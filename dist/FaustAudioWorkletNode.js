"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class FaustAudioWorkletNode extends (window.AudioWorkletNode ? AudioWorkletNode : null) {
    constructor(options) {
        super(options.audioCtx, options.id, {
            numberOfInputs: options.compiledDsp.dspMeta.inputs > 0 ? 1 : 0,
            numberOfOutputs: options.compiledDsp.dspMeta.outputs > 0 ? 1 : 0,
            channelCount: Math.max(1, options.compiledDsp.dspMeta.inputs),
            outputChannelCount: [options.compiledDsp.dspMeta.outputs],
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            processorOptions: { id: options.id, voices: options.voices, compiledDsp: options.compiledDsp, mixer32Module: options.mixer32Module }
        });
        this.onprocessorerror = (e) => {
            console.error("Error from " + this.dspMeta.name + " AudioWorkletNode: ");
            throw e.error;
        };
        this.port.onmessage = (e) => {
            if (e.data.type === "param" && this.outputHandler) {
                this.outputHandler(e.data.path, e.data.value);
            }
            else if (e.data.type === "plot") {
                if (this.plotHandler)
                    this.plotHandler(e.data.value, e.data.index, e.data.events);
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
        if (this.effectMeta)
            this.parseUI(this.effectMeta.ui);
        try {
            if (this.parameters)
                this.parameters.forEach(p => p.automationRate = "k-rate");
        }
        catch (e) { }
    }
    parseUI(ui) {
        ui.forEach(group => this.parseGroup(group));
    }
    parseGroup(group) {
        if (group.items)
            this.parseItems(group.items);
    }
    parseItems(items) {
        items.forEach(item => this.parseItem(item));
    }
    parseItem(item) {
        if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
            this.parseItems(item.items);
        }
        else if (item.type === "hbargraph" || item.type === "vbargraph") {
            this.outputsItems.push(item.address);
        }
        else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
            this.inputsItems.push(item.address);
            if (!item.meta)
                return;
            item.meta.forEach((meta) => {
                const { midi } = meta;
                if (!midi)
                    return;
                const strMidi = midi.trim();
                if (strMidi === "pitchwheel") {
                    this.fPitchwheelLabel.push({ path: item.address, min: item.min, max: item.max });
                }
                else {
                    const matched = strMidi.match(/^ctrl\s(\d+)/);
                    if (!matched)
                        return;
                    this.fCtrlLabel[parseInt(matched[1])].push({ path: item.address, min: item.min, max: item.max });
                }
            });
        }
    }
    keyOn(channel, pitch, velocity) {
        const e = { type: "keyOn", data: [channel, pitch, velocity] };
        this.port.postMessage(e);
    }
    keyOff(channel, pitch, velocity) {
        const e = { type: "keyOff", data: [channel, pitch, velocity] };
        this.port.postMessage(e);
    }
    allNotesOff() {
        const e = { type: "ctrlChange", data: [0, 123, 0] };
        this.port.postMessage(e);
    }
    ctrlChange(channel, ctrlIn, valueIn) {
        const e = { type: "ctrlChange", data: [channel, ctrlIn, valueIn] };
        this.port.postMessage(e);
        if (!this.fCtrlLabel[ctrlIn].length)
            return;
        this.fCtrlLabel[ctrlIn].forEach((ctrl) => {
            const { path } = ctrl;
            const value = utils_1.remap(valueIn, 0, 127, ctrl.min, ctrl.max);
            const param = this.parameters.get(path);
            if (param)
                param.setValueAtTime(value, this.context.currentTime);
        });
    }
    pitchWheel(channel, wheel) {
        const e = { type: "pitchWheel", data: [channel, wheel] };
        this.port.postMessage(e);
        this.fPitchwheelLabel.forEach((pw) => {
            const { path } = pw;
            const value = utils_1.remap(wheel, 0, 16383, pw.min, pw.max);
            const param = this.parameters.get(path);
            if (param)
                param.setValueAtTime(value, this.context.currentTime);
        });
    }
    midiMessage(data) {
        const cmd = data[0] >> 4;
        const channel = data[0] & 0xf;
        const data1 = data[1];
        const data2 = data[2];
        if (channel === 9)
            return;
        if (cmd === 8 || (cmd === 9 && data2 === 0))
            this.keyOff(channel, data1, data2);
        else if (cmd === 9)
            this.keyOn(channel, data1, data2);
        else if (cmd === 11)
            this.ctrlChange(channel, data1, data2);
        else if (cmd === 14)
            this.pitchWheel(channel, data2 * 128.0 + data1);
        else
            this.port.postMessage({ data, type: "midi" });
    }
    metadata() { }
    setParamValue(path, value) {
        const e = { type: "param", data: { path, value } };
        this.port.postMessage(e);
        const param = this.parameters.get(path);
        if (param)
            param.setValueAtTime(value, this.context.currentTime);
    }
    getParamValue(path) {
        const param = this.parameters.get(path);
        if (param)
            return param.value;
        return null;
    }
    setOutputParamHandler(handler) {
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
            const r = Object.assign({}, o);
            if (e) {
                r.ui = [{ type: "tgroup", label: "Sequencer", items: [
                            { type: "vgroup", label: "Instrument", items: o.ui },
                            { type: "vgroup", label: "Effect", items: e.ui }
                        ] }];
            }
            else {
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
exports.FaustAudioWorkletNode = FaustAudioWorkletNode;
//# sourceMappingURL=FaustAudioWorkletNode.js.map