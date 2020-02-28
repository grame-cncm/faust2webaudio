/* eslint-disable object-curly-newline */
/* eslint-disable object-property-newline */
import { TDspMeta, TCompiledDsp, TFaustUI, TFaustUIGroup, TFaustUIItem } from "./types";
import { remap } from "./utils";

export class FaustAudioWorkletNode extends (window.AudioWorkletNode ? AudioWorkletNode : null) {
    onprocessorerror = (e: ErrorEvent) => {
        console.error("Error from " + this.dspMeta.name + " AudioWorkletNode: "); // eslint-disable-line no-console
        throw e.error;
    }
    /* WAP ??
    getMetadata = this.getJSON;
    setParam = this.setParamValue;
    getParam = this.getParamValue;
    inputChannelCount = this.getNumInputs;
    outputChannelCount = this.getNumOutputs;
    getParams = () => this.inputsItems;
    getDescriptor = this.getParams;
    onMidi = this.midiMessage;
    getState = async () => {
        const params = {} as { [key: string]: string };
        this.getDescriptor().forEach(key => params[key] = JSON.stringify(this.getParam(key)));
        return params;
    }
    setState = async (state: { [key: string]: number; }) => {
        for (const key in state) {
            this.setParam(key, state[key]);
        }
        try {
            this.gui.setAttribute("state", JSON.stringify(state));
        } catch (error) {
            console.warn("Plugin without gui or GUI not defined: ", error);
        }
        return state;
    }
    setPatch = (patch: any) => this.presets ? this.setState(this.presets[patch]) : undefined; // ??
    metadata = (handler: (...args: any[]) => any) => handler(null);
    gui: any;
    presets: any;
    */

    voices?: number;
    dspMeta: TDspMeta;
    effectMeta: TDspMeta;
    outputHandler: (address: string, value: number) => any;
    inputsItems: string[];
    outputsItems: string[];

    fPitchwheelLabel: { path: string; min: number; max: number }[];
    fCtrlLabel: { path: string; min: number; max: number }[][];

    plotHandler: (plotted: Float32Array[], index: number, events?: { type: string; data: any }[]) => any;

    constructor(options: { audioCtx: AudioContext; id: string; compiledDsp: TCompiledDsp; voices?: number; plotHandler?: (plotted: Float32Array[], index: number, events?: { type: string; data: any }[]) => any; mixer32Module: WebAssembly.Module }) {
        super(options.audioCtx, options.id, {
            numberOfInputs: options.compiledDsp.dspMeta.inputs > 0 ? 1 : 0,
            numberOfOutputs: options.compiledDsp.dspMeta.outputs > 0 ? 1 : 0,
            channelCount: Math.max(1, options.compiledDsp.dspMeta.inputs),
            outputChannelCount: [options.compiledDsp.dspMeta.outputs],
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            processorOptions: { id: options.id, voices: options.voices, compiledDsp: options.compiledDsp, mixer32Module: options.mixer32Module }
        });
        // Patch it with additional functions
        this.port.onmessage = (e: MessageEvent) => {
            if (e.data.type === "param" && this.outputHandler) {
                this.outputHandler(e.data.path, e.data.value);
            } else if (e.data.type === "plot") {
                if (this.plotHandler) this.plotHandler(e.data.value, e.data.index, e.data.events);
            }
        };
        this.voices = options.voices;
        this.dspMeta = options.compiledDsp.dspMeta;
        this.effectMeta = options.compiledDsp.effectMeta;
        this.outputHandler = null;
        this.inputsItems = [];
        this.outputsItems = [];
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128).fill(null).map(() => []);
        this.plotHandler = options.plotHandler;
        this.parseUI(this.dspMeta.ui);
        if (this.effectMeta) this.parseUI(this.effectMeta.ui);
        try {
            if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
        } catch (e) {} // eslint-disable-line no-empty
    }
    parseUI(ui: TFaustUI) {
        ui.forEach(group => this.parseGroup(group));
    }
    parseGroup(group: TFaustUIGroup) {
        if (group.items) this.parseItems(group.items);
    }
    parseItems(items: TFaustUIItem[]) {
        items.forEach(item => this.parseItem(item));
    }
    parseItem(item: TFaustUIItem) {
        if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
            this.parseItems(item.items);
        } else if (item.type === "hbargraph" || item.type === "vbargraph") {
            // Keep bargraph adresses
            this.outputsItems.push(item.address);
        } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
            // Keep inputs adresses
            this.inputsItems.push(item.address);
            if (!item.meta) return;
            item.meta.forEach((meta) => {
                const { midi } = meta;
                if (!midi) return;
                const strMidi = midi.trim();
                if (strMidi === "pitchwheel") {
                    this.fPitchwheelLabel.push({ path: item.address, min: item.min, max: item.max });
                } else {
                    const matched = strMidi.match(/^ctrl\s(\d+)/);
                    if (!matched) return;
                    this.fCtrlLabel[parseInt(matched[1])].push({ path: item.address, min: item.min, max: item.max });
                }
            });
        }
    }

    /**
     * Instantiates a new polyphonic voice.
     *
     * @param {number} channel - the MIDI channel (0..15, not used for now)
     * @param {number} pitch - the MIDI pitch (0..127)
     * @param {number} velocity - the MIDI velocity (0..127)
     * @memberof FaustAudioWorkletNode
     */
    keyOn(channel: number, pitch: number, velocity: number) {
        const e = { type: "keyOn", data: [channel, pitch, velocity] };
        this.port.postMessage(e);
    }
    /**
     * De-instantiates a polyphonic voice.
     *
     * @param {number} channel - the MIDI channel (0..15, not used for now)
     * @param {number} pitch - the MIDI pitch (0..127)
     * @param {number} velocity - the MIDI velocity (0..127)
     * @memberof FaustAudioWorkletNode
     */
    keyOff(channel: number, pitch: number, velocity: number) {
        const e = { type: "keyOff", data: [channel, pitch, velocity] };
        this.port.postMessage(e);
    }
    /**
     * Gently terminates all the active voices.
     *
     * @memberof FaustAudioWorkletNode
     */
    allNotesOff() {
        const e = { type: "ctrlChange", data: [0, 123, 0] };
        this.port.postMessage(e);
    }
    ctrlChange(channel: number, ctrlIn: number, valueIn: any) {
        const e = { type: "ctrlChange", data: [channel, ctrlIn, valueIn] };
        this.port.postMessage(e);
        if (!this.fCtrlLabel[ctrlIn].length) return;
        this.fCtrlLabel[ctrlIn].forEach((ctrl) => {
            const { path } = ctrl;
            const value = remap(valueIn, 0, 127, ctrl.min, ctrl.max);
            const param = this.parameters.get(path);
            if (param) param.setValueAtTime(value, this.context.currentTime);
        });
    }
    pitchWheel(channel: number, wheel: number) {
        const e = { type: "pitchWheel", data: [channel, wheel] };
        this.port.postMessage(e);
        this.fPitchwheelLabel.forEach((pw) => {
            const { path } = pw;
            const value = remap(wheel, 0, 16383, pw.min, pw.max);
            const param = this.parameters.get(path);
            if (param) param.setValueAtTime(value, this.context.currentTime);
        });
    }
    midiMessage(data: number[] | Uint8Array) {
        const cmd = data[0] >> 4;
        const channel = data[0] & 0xf;
        const data1 = data[1];
        const data2 = data[2];
        if (channel === 9) return;
        if (cmd === 8 || (cmd === 9 && data2 === 0)) this.keyOff(channel, data1, data2);
        else if (cmd === 9) this.keyOn(channel, data1, data2);
        else if (cmd === 11) this.ctrlChange(channel, data1, data2);
        else if (cmd === 14) this.pitchWheel(channel, data2 * 128.0 + data1);
        else this.port.postMessage({ data, type: "midi" });
    }
    metadata() {}
    setParamValue(path: string, value: number) {
        const e = { type: "param", data: { path, value } };
        this.port.postMessage(e);
        this.parameters.get(path).setValueAtTime(value, 0);
    }
    getParamValue(path: string) {
        return this.parameters.get(path).value;
    }
    setOutputParamHandler(handler: (address: string, value: number) => any) {
        this.outputHandler = handler;
    }
    getOutputParamHandler() {
        return this.outputHandler;
    }
    getNumInputs() {
        return this.dspMeta.inputs;
    }
    getNumOutputs() {
        return this.dspMeta.outputs;
    }
    getParams() {
        return this.inputsItems;
    }
    getJSON() {
        if (this.voices) {
            const o = this.dspMeta;
            const e = this.effectMeta;
            const r = { ...o };
            if (e) {
                r.ui = [{ type: "tgroup", label: "Sequencer", items: [
                    { type: "vgroup", label: "Instrument", items: o.ui },
                    { type: "vgroup", label: "Effect", items: e.ui }
                ] }];
            } else {
                r.ui = [{ type: "tgroup", label: "Polyphonic", items: [
                    { type: "vgroup", label: "Voices", items: o.ui }
                ] }];
            }
            return JSON.stringify(r);
        }
        return JSON.stringify(this.dspMeta);
    }
    getUI() {
        if (this.voices) {
            const o = this.dspMeta;
            const e = this.effectMeta;
            if (e) {
                return [{ type: "tgroup", label: "Sequencer", items: [
                    { type: "vgroup", label: "Instrument", items: o.ui },
                    { type: "vgroup", label: "Effect", items: e.ui }
                ] }];
            }
            return [{ type: "tgroup", label: "Polyphonic", items: [
                { type: "vgroup", label: "Voices", items: o.ui }
            ] }];
        }
        return this.dspMeta.ui;
    }
    destroy() {
        this.port.postMessage({ type: "destroy" });
        this.port.close();
        delete this.plotHandler;
        delete this.outputHandler;
    }
}
