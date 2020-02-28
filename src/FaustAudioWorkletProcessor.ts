/* eslint-disable no-console */
/* eslint-disable no-restricted-properties */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable object-property-newline */
/* eslint-env worker */
import { TDspMeta, FaustDspNode, TFaustUI, TFaustUIGroup, TFaustUIItem, FaustWebAssemblyExports, FaustWebAssemblyMixerExports, TCompiledDsp } from "./types";

// AudioWorklet Globals
declare class AudioWorkletProcessor {
    public port: MessagePort;
    public process(inputs: Float32Array[][], outputs: Float32Array[][], parameters: { [key: string]: Float32Array }): boolean;
    constructor(options: AudioWorkletNodeOptions);
}
type AudioWorkletProcessorConstructor<T extends AudioWorkletProcessor> = {
    new (options: AudioWorkletNodeOptions): T;
};
declare function registerProcessor<T extends AudioWorkletProcessor>(name: string, constructor: AudioWorkletProcessorConstructor<T>): void;
declare const currentFrame: number;
declare const currentTime: number;
declare const sampleRate: number;
interface AudioParamDescriptor {
    automationRate?: AutomationRate;
    defaultValue?: number;
    maxValue?: number;
    minValue?: number;
    name: string;
}

// Injected by Faust
type FaustData = {
    id: string;
    voices: number;
    dspMeta: TDspMeta;
    effectMeta?: TDspMeta;
};
declare const faustData: FaustData;

declare const remap: (v: number, mn0: number, mx0: number, mn1: number, mx1: number) => number;
declare const midiToFreq: (v: number) => number;
declare const findPath: (o: any, p: string) => boolean;
declare const createWasmImport: (voices: number, memory: WebAssembly.Memory) => { [key: string]: any };
declare const createWasmMemory: (voicesIn: number, dspMeta: TDspMeta, effectMeta: TDspMeta, bufferSize: number) => WebAssembly.Memory;

export const FaustAudioWorkletProcessorWrapper = () => {
    class FaustConst {
        static id = faustData.id;
        static dspMeta = faustData.dspMeta;
        static effectMeta = faustData.effectMeta;
    }
    class FaustAudioWorkletProcessor extends AudioWorkletProcessor implements FaustDspNode {
        static bufferSize = 128;
        // JSON parsing functions
        static parseUI(ui: TFaustUI, obj: AudioParamDescriptor[] | FaustAudioWorkletProcessor, callback: (...args: any[]) => any) {
            for (let i = 0; i < ui.length; i++) {
                this.parseGroup(ui[i], obj, callback);
            }
        }
        static parseGroup(group: TFaustUIGroup, obj: AudioParamDescriptor[] | FaustAudioWorkletProcessor, callback: (...args: any[]) => any) {
            if (group.items) {
                this.parseItems(group.items, obj, callback);
            }
        }
        static parseItems(items: TFaustUIItem[], obj: AudioParamDescriptor[] | FaustAudioWorkletProcessor, callback: (...args: any[]) => any) {
            for (let i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        static parseItem(item: TFaustUIItem, obj: AudioParamDescriptor[], callback: (...args: any[]) => any) {
            if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
                FaustAudioWorkletProcessor.parseItems(item.items, obj, callback); // callback may not binded to this
            } else if (item.type === "hbargraph" || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider" || item.type === "hslider" || item.type === "nentry") {
                if (!faustData.voices || (!item.address.endsWith("/gate") && !item.address.endsWith("/freq") && !item.address.endsWith("/gain"))) {
                    obj.push({ name: item.address, defaultValue: item.init || 0, minValue: item.min || 0, maxValue: item.max || 0 });
                }
            } else if (item.type === "button" || item.type === "checkbox") {
                if (!faustData.voices || (!item.address.endsWith("/gate") && !item.address.endsWith("/freq") && !item.address.endsWith("/gain"))) {
                    obj.push({ name: item.address, defaultValue: item.init || 0, minValue: 0, maxValue: 1 });
                }
            }
        }
        static parseItem2(item: TFaustUIItem, obj: FaustAudioWorkletProcessor, callback: (...args: any[]) => any) {
            if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
                FaustAudioWorkletProcessor.parseItems(item.items, obj, callback); // callback may not binded to this
            } else if (item.type === "hbargraph" || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputsItems.push(item.address);
                obj.pathTable$[item.address] = item.index;
            } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputsItems.push(item.address);
                obj.pathTable$[item.address] = item.index;
                if (!item.meta) return;
                item.meta.forEach((meta) => {
                    const { midi } = meta;
                    if (!midi) return;
                    const strMidi = midi.trim();
                    if (strMidi === "pitchwheel") {
                        obj.fPitchwheelLabel.push({ path: item.address, min: item.min, max: item.max });
                    } else {
                        const matched = strMidi.match(/^ctrl\s(\d+)/);
                        if (!matched) return;
                        obj.fCtrlLabel[parseInt(matched[1])].push({ path: item.address, min: item.min, max: item.max });
                    }
                });
            }
        }
        static get parameterDescriptors() {
            // Analyse JSON to generate AudioParam parameters
            const params = [] as AudioParamDescriptor[];
            this.parseUI(FaustConst.dspMeta.ui, params, this.parseItem);
            if (FaustConst.effectMeta) this.parseUI(FaustConst.effectMeta.ui, params, this.parseItem);
            return params;
        }
        destroyed: boolean;
        dspInstance: WebAssembly.Instance;
        effectInstance?: WebAssembly.Instance;
        mixerInstance?: WebAssembly.Instance;
        memory?: WebAssembly.Memory;

        bufferSize: number;
        voices: number;
        dspMeta: TDspMeta;
        $ins: number;
        $outs: number;
        dspInChannnels: Float32Array[];
        dspOutChannnels: Float32Array[];
        fPitchwheelLabel: { path: string; min: number; max: number }[];
        fCtrlLabel: { path: string; min: number; max: number }[][];
        numIn: number;
        numOut: number;
        ptrSize: number;
        sampleSize: number;
        outputsTimer: number;
        inputsItems: string[];
        outputsItems: string[];
        pathTable$: { [address: string]: number };
        $audioHeap: number;
        $$audioHeapInputs: number;
        $$audioHeapOutputs: number;
        $audioHeapInputs: number;
        $audioHeapOutputs: number;
        $dsp: number;
        factory: FaustWebAssemblyExports;
        HEAP: ArrayBuffer;
        HEAP32: Int32Array;
        HEAPF32: Float32Array;

        effectMeta?: TDspMeta;
        $effect?: number;
        $mixing?: number;
        fFreqLabel$?: number[];
        fGateLabel$?: number[];
        fGainLabel$?: number[];
        fDate?: number;
        $$audioHeapMixing?: number;
        $audioHeapMixing?: number;
        mixer?: FaustWebAssemblyMixerExports;
        effect?: FaustWebAssemblyExports;
        dspVoices$?: number[];
        dspVoicesState?: number[];
        dspVoicesLevel?: number[];
        dspVoicesDate?: number[];
        kActiveVoice?: number;
        kFreeVoice?: number;
        kReleaseVoice?: number;
        kNoVoice?: number;

        $buffer: number;
        cachedEvents: { type: string; data: any }[];

        outputHandler: (address: string, value: number) => any;
        computeHandler: (bufferSize: number) => any;

        handleMessage = (e: MessageEvent) => { // use arrow function for binding
            const msg = e.data;
            this.cachedEvents.push({ type: e.data.type, data: e.data.data });
            switch (msg.type) {
                // Generic MIDI message
                case "midi": this.midiMessage(msg.data); break;
                // Typed MIDI message
                case "keyOn": this.keyOn(msg.data[0], msg.data[1], msg.data[2]); break;
                case "keyOff": this.keyOff(msg.data[0], msg.data[1], msg.data[2]); break;
                case "ctrlChange": this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]); break;
                case "pitchWheel": this.pitchWheel(msg.data[0], msg.data[1]); break;
                // Generic data message
                case "param": this.setParamValue(msg.data.path, msg.data.value); break;
                // case "patch": this.onpatch(msg.data); break;
                case "destroy": {
                    this.port.close();
                    this.destroyed = true;
                    delete this.outputHandler;
                    delete this.computeHandler;
                    break;
                }
                default:
            }
        }
        constructor(options: AudioWorkletNodeOptions) {
            super(options);
            const processorOptions: { id: string; voices: number; compiledDsp: TCompiledDsp; mixer32Module: WebAssembly.Module } = options.processorOptions;
            this.instantiateWasm(processorOptions);
            this.port.onmessage = this.handleMessage; // Naturally binded with arrow function property
            this.destroyed = false;

            this.bufferSize = 128;
            this.voices = processorOptions.voices;
            this.dspMeta = processorOptions.compiledDsp.dspMeta;

            this.outputHandler = (path, value) => this.port.postMessage({ path, value, type: "param" });
            this.computeHandler = null;

            this.$ins = null;
            this.$outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.fPitchwheelLabel = [];
            this.fCtrlLabel = new Array(128).fill(null).map(() => []);

            this.numIn = this.dspMeta.inputs;
            this.numOut = this.dspMeta.outputs;

            // Memory allocator
            this.ptrSize = 4;
            this.sampleSize = 4;

            // Create the WASM instance
            this.factory = this.dspInstance.exports as FaustWebAssemblyExports;
            this.HEAP = this.voices ? this.memory.buffer : this.factory.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            // console.log(this.HEAP);
            // console.log(this.HEAP32);
            // console.log(this.HEAPF32);

            // bargraph
            this.outputsTimer = 5;
            this.outputsItems = [];

            // input items
            this.inputsItems = [];

            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.$audioHeap = this.voices ? 0 : this.dspMeta.size;

            // Setup pointers offset
            this.$$audioHeapInputs = this.$audioHeap;
            this.$$audioHeapOutputs = this.$$audioHeapInputs + this.numIn * this.ptrSize;

            // Setup buffer offset
            this.$audioHeapInputs = this.$$audioHeapOutputs + (this.numOut * this.ptrSize);
            this.$audioHeapOutputs = this.$audioHeapInputs + (this.numIn * this.bufferSize * this.sampleSize);
            if (this.voices) {
                this.$$audioHeapMixing = this.$$audioHeapOutputs + this.numOut * this.ptrSize;
                // Setup buffer offset
                this.$audioHeapInputs = this.$$audioHeapMixing + this.numOut * this.ptrSize;
                this.$audioHeapOutputs = this.$audioHeapInputs + this.numIn * this.bufferSize * this.sampleSize;
                this.$audioHeapMixing = this.$audioHeapOutputs + this.numOut * this.bufferSize * this.sampleSize;
                this.$dsp = this.$audioHeapMixing + this.numOut * this.bufferSize * this.sampleSize;
            } else {
                this.$audioHeapInputs = this.$$audioHeapOutputs + this.numOut * this.ptrSize;
                this.$audioHeapOutputs = this.$audioHeapInputs + this.numIn * this.bufferSize * this.sampleSize;
                // Start of DSP memory : Mono DSP is placed first with index 0
                this.$dsp = 0;
            }

            if (this.voices) {
                this.effectMeta = FaustConst.effectMeta;
                this.$mixing = null;
                this.fFreqLabel$ = [];
                this.fGateLabel$ = [];
                this.fGainLabel$ = [];
                this.fDate = 0;

                this.mixer = this.mixerInstance.exports as FaustWebAssemblyMixerExports;
                this.effect = this.effectInstance ? this.effectInstance.exports as FaustWebAssemblyExports : null;

                // Start of DSP memory ('polyphony' DSP voices)
                this.dspVoices$ = [];
                this.dspVoicesState = [];
                this.dspVoicesLevel = [];
                this.dspVoicesDate = [];

                this.kActiveVoice = 0;
                this.kFreeVoice = -1;
                this.kReleaseVoice = -2;
                this.kNoVoice = -3;

                for (let i = 0; i < this.voices; i++) {
                    this.dspVoices$[i] = this.$dsp + i * this.dspMeta.size;
                    this.dspVoicesState[i] = this.kFreeVoice;
                    this.dspVoicesLevel[i] = 0;
                    this.dspVoicesDate[i] = 0;
                }
                // Effect memory starts after last voice
                this.$effect = this.dspVoices$[this.voices - 1] + this.dspMeta.size;
            }

            this.pathTable$ = {};

            this.$buffer = 0;
            this.cachedEvents = [];

            // Init resulting DSP
            this.setup();
        }
        instantiateWasm(options: { id: string; voices: number; compiledDsp: TCompiledDsp; mixer32Module: WebAssembly.Module }) {
            const memory = createWasmMemory(options.voices, options.compiledDsp.dspMeta, options.compiledDsp.effectMeta, 128);
            this.memory = memory;
            const imports = createWasmImport(options.voices, memory);
            this.dspInstance = new WebAssembly.Instance(options.compiledDsp.dspModule, imports);
            if (options.compiledDsp.effectModule) {
                this.effectInstance = new WebAssembly.Instance(options.compiledDsp.effectModule, imports);
            }
            if (options.voices) {
                const mixerImports = { imports: { print: console.log }, memory: { memory } };
                this.mixerInstance = new WebAssembly.Instance(options.mixer32Module, mixerImports);
            }
        }
        updateOutputs() {
            if (this.outputsItems.length > 0 && this.outputHandler && this.outputsTimer-- === 0) {
                this.outputsTimer = 5;
                this.outputsItems.forEach(item => this.outputHandler(item, this.factory.getParamValue(this.$dsp, this.pathTable$[item])));
            }
        }

        parseUI(ui: TFaustUI) {
            return FaustAudioWorkletProcessor.parseUI(ui, this, FaustAudioWorkletProcessor.parseItem2);
        }
        parseGroup(group: TFaustUIGroup) {
            return FaustAudioWorkletProcessor.parseGroup(group, this, FaustAudioWorkletProcessor.parseItem2);
        }
        parseItems(items: TFaustUIItem[]) {
            return FaustAudioWorkletProcessor.parseItems(items, this, FaustAudioWorkletProcessor.parseItem2);
        }
        parseItem(item: TFaustUIItem) {
            return FaustAudioWorkletProcessor.parseItem2(item, this, FaustAudioWorkletProcessor.parseItem2);
        }

        setParamValue(path: string, val: number) {
            if (this.voices) {
                if (this.effect && findPath(this.effectMeta.ui, path)) this.effect.setParamValue(this.$effect, this.pathTable$[path], val);
                else this.dspVoices$.forEach($voice => this.factory.setParamValue($voice, this.pathTable$[path], val));
            } else {
                this.factory.setParamValue(this.$dsp, this.pathTable$[path], val);
            }
        }
        getParamValue(path: string) {
            if (this.voices) {
                if (this.effect && findPath(this.effectMeta.ui, path)) return this.effect.getParamValue(this.$effect, this.pathTable$[path]);
                return this.factory.getParamValue(this.dspVoices$[0], this.pathTable$[path]);
            }
            return this.factory.getParamValue(this.$dsp, this.pathTable$[path]);
        }
        setup() {
            if (this.numIn > 0) {
                this.$ins = this.$$audioHeapInputs;
                for (let i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.$ins >> 2) + i] = this.$audioHeapInputs + this.bufferSize * this.sampleSize * i;
                }
                // Prepare Ins buffer tables
                const dspInChans = this.HEAP32.subarray(this.$ins >> 2, (this.$ins + this.numIn * this.ptrSize) >> 2);
                for (let i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + this.bufferSize * this.sampleSize) >> 2);
                }
            }
            if (this.numOut > 0) {
                this.$outs = this.$$audioHeapOutputs;
                if (this.voices) this.$mixing = this.$$audioHeapMixing;
                for (let i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.$outs >> 2) + i] = this.$audioHeapOutputs + this.bufferSize * this.sampleSize * i;
                    if (this.voices) this.HEAP32[(this.$mixing >> 2) + i] = this.$audioHeapMixing + this.bufferSize * this.sampleSize * i;
                }
                // Prepare Out buffer tables
                const dspOutChans = this.HEAP32.subarray(this.$outs >> 2, (this.$outs + this.numOut * this.ptrSize) >> 2);
                for (let i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + this.bufferSize * this.sampleSize) >> 2);
                }
            }
            // Parse UI
            this.parseUI(this.dspMeta.ui);
            if (this.effect) this.parseUI(this.effectMeta.ui);

            // keep 'keyOn/keyOff' labels
            if (this.voices) {
                this.inputsItems.forEach((item) => {
                    if (item.endsWith("/gate")) this.fGateLabel$.push(this.pathTable$[item]);
                    else if (item.endsWith("/freq")) this.fFreqLabel$.push(this.pathTable$[item]);
                    else if (item.endsWith("/gain")) this.fGainLabel$.push(this.pathTable$[item]);
                });
                // Init DSP voices
                this.dspVoices$.forEach($voice => this.factory.init($voice, sampleRate));
                // Init effect
                if (this.effect) this.effect.init(this.$effect, sampleRate);
            } else {
                // Init DSP
                this.factory.init(this.$dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope
            }
        }
        // Poly only methods
        getPlayingVoice(pitch: number) {
            if (!this.voices) return null;
            let voice = this.kNoVoice;
            let oldestDatePlaying = Number.MAX_VALUE;
            for (let i = 0; i < this.voices; i++) {
                if (this.dspVoicesState[i] === pitch) {
                    // Keeps oldest playing voice
                    if (this.dspVoicesDate[i] < oldestDatePlaying) {
                        oldestDatePlaying = this.dspVoicesDate[i];
                        voice = i;
                    }
                }
            }
            return voice;
        }
        allocVoice(voice: number) {
            if (!this.voices) return null;
            // so that envelop is always re-initialized
            this.factory.instanceClear(this.dspVoices$[voice]);
            this.dspVoicesDate[voice] = this.fDate++;
            this.dspVoicesState[voice] = this.kActiveVoice;
            return voice;
        }
        getFreeVoice() {
            if (!this.voices) return null;
            for (let i = 0; i < this.voices; i++) {
                if (this.dspVoicesState[i] === this.kFreeVoice) return this.allocVoice(i);
            }
            let voiceRelease = this.kNoVoice;
            let voicePlaying = this.kNoVoice;
            let oldestDateRelease = Number.MAX_VALUE;
            let oldestDatePlaying = Number.MAX_VALUE;
            for (let i = 0; i < this.voices; i++) { // Scan all voices
                // Try to steal a voice in kReleaseVoice mode...
                if (this.dspVoicesState[i] === this.kReleaseVoice) {
                    // Keeps oldest release voice
                    if (this.dspVoicesDate[i] < oldestDateRelease) {
                        oldestDateRelease = this.dspVoicesDate[i];
                        voiceRelease = i;
                    }
                } else if (this.dspVoicesDate[i] < oldestDatePlaying) {
                    oldestDatePlaying = this.dspVoicesDate[i];
                    voicePlaying = i;
                }
            }
            // Then decide which one to steal
            if (oldestDateRelease !== Number.MAX_VALUE) {
                // console.log(`Steal release voice : voice_date = ${this.dspVoicesDate[voiceRelease]} cur_date = ${this.fDate} voice = ${voiceRelease}`);
                return this.allocVoice(voiceRelease);
            }
            if (oldestDatePlaying !== Number.MAX_VALUE) {
                // console.log(`Steal playing voice : voice_date = ${this.dspVoicesDate[voicePlaying]} cur_date = ${this.fDate} voice = ${voicePlaying}`);
                return this.allocVoice(voicePlaying);
            }
            return this.kNoVoice;
        }
        keyOn(channel: number, pitch: number, velocity: number) {
            if (!this.voices) return;
            const voice = this.getFreeVoice();
            // console.log("keyOn voice " + voice);
            this.fFreqLabel$.forEach($ => this.factory.setParamValue(this.dspVoices$[voice], $, midiToFreq(pitch)));
            this.fGateLabel$.forEach($ => this.factory.setParamValue(this.dspVoices$[voice], $, 1));
            this.fGainLabel$.forEach($ => this.factory.setParamValue(this.dspVoices$[voice], $, velocity / 127));
            this.dspVoicesState[voice] = pitch;
        }
        keyOff(channel: number, pitch: number, velocity: number) {
            if (!this.voices) return;
            const voice = this.getPlayingVoice(pitch);
            if (voice === this.kNoVoice) return; // console.log("Playing voice not found...");
            // console.log("keyOff voice " + voice);
            this.fGateLabel$.forEach($ => this.factory.setParamValue(this.dspVoices$[voice], $, 0)); // No use of velocity for now...
            this.dspVoicesState[voice] = this.kReleaseVoice; // Release voice
        }
        allNotesOff() {
            if (!this.voices) return;
            for (let i = 0; i < this.voices; i++) {
                this.fGateLabel$.forEach($gate => this.factory.setParamValue(this.dspVoices$[i], $gate, 0));
                this.dspVoicesState[i] = this.kReleaseVoice;
            }
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
        }
        ctrlChange(channel: number, ctrl: number, value: number) {
            if (!this.fCtrlLabel[ctrl].length) return;
            this.fCtrlLabel[ctrl].forEach((ctrl) => {
                const { path } = ctrl;
                this.setParamValue(path, remap(value, 0, 127, ctrl.min, ctrl.max));
                if (this.outputHandler) this.outputHandler(path, this.getParamValue(path));
            });
        }
        pitchWheel(channel: number, wheel: number) {
            this.fPitchwheelLabel.forEach((pw) => {
                this.setParamValue(pw.path, remap(wheel, 0, 16383, pw.min, pw.max));
                if (this.outputHandler) this.outputHandler(pw.path, this.getParamValue(pw.path));
            });
        }
        process(inputs: Float32Array[][], outputs: Float32Array[][], parameters: { [key: string]: Float32Array }) {
            if (this.destroyed) return false;
            const input = inputs[0];
            const output = outputs[0];
            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                // console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                // console.log("Process output error");
                return true;
            }
            // Copy inputs
            if (input !== undefined) {
                for (let chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                    const dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            // Update controls (possibly needed for sample accurate control)
            for (const path in parameters) {
                const paramArray = parameters[path];
                this.setParamValue(path, paramArray[0]);
            }
            // Possibly call an externally given callback (for instance to synchronize playing a MIDIFile...)
            if (this.computeHandler) this.computeHandler(this.bufferSize);
            if (this.voices) {
                this.mixer.clearOutput(this.bufferSize, this.numOut, this.$outs); // First clear the outputs
                for (let i = 0; i < this.voices; i++) { // Compute all running voices
                    this.factory.compute(this.dspVoices$[i], this.bufferSize, this.$ins, this.$mixing); // Compute voice
                    this.mixer.mixVoice(this.bufferSize, this.numOut, this.$mixing, this.$outs); // Mix it in result
                }
                if (this.effect) this.effect.compute(this.$effect, this.bufferSize, this.$outs, this.$outs); // Apply effect. Not a typo, effect is applied on the outs.
            } else {
                this.factory.compute(this.$dsp, this.bufferSize, this.$ins, this.$outs); // Compute
            }
            // Update bargraph
            this.updateOutputs();
            // Copy outputs
            if (output !== undefined) {
                for (let i = 0; i < Math.min(this.numOut, output.length); i++) {
                    const dspOutput = this.dspOutChannnels[i];
                    output[i].set(dspOutput);
                }
                this.port.postMessage({ type: "plot", value: output, index: this.$buffer++, events: this.cachedEvents });
                this.cachedEvents = [];
            }
            return true;
        }
        printMemory() {
            console.log("============== Memory layout ==============");
            console.log("dspMeta.size: " + this.dspMeta.size);
            console.log("$audioHeap: " + this.$audioHeap);
            console.log("$$audioHeapInputs: " + this.$$audioHeapInputs);
            console.log("$$audioHeapOutputs: " + this.$$audioHeapOutputs);
            console.log("$$audioHeapMixing: " + this.$$audioHeapMixing);
            console.log("$audioHeapInputs: " + this.$audioHeapInputs);
            console.log("$audioHeapOutputs: " + this.$audioHeapOutputs);
            console.log("$audioHeapMixing: " + this.$audioHeapMixing);
            console.log("$dsp: " + this.$dsp);
            if (this.dspVoices$) this.dspVoices$.forEach(($voice, i) => console.log("dspVoices$[" + i + "]: " + $voice));
            console.log("$effect: " + this.$effect);
            console.log("$mixing: " + this.$mixing);
        }
    }

    // Globals
    // Synchronously compile and instantiate the WASM module
    registerProcessor(FaustConst.id || "mydsp", FaustAudioWorkletProcessor);
};
