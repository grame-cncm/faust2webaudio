"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class FaustWasmToScriptProcessor {
    constructor(faust) {
        this.faust = faust;
    }
    initNode(compiledDsp, dspInstance, effectInstance, mixerInstance, audioCtx, bufferSize, memory, voices, plotHandler) {
        let node;
        const dspMeta = compiledDsp.dspMeta;
        const inputs = dspMeta.inputs;
        const outputs = dspMeta.outputs;
        try {
            node = audioCtx.createScriptProcessor(bufferSize, inputs, outputs);
        }
        catch (e) {
            this.faust.error("Error in createScriptProcessor: " + e.message);
            throw e;
        }
        node.destroyed = false;
        node.voices = voices;
        node.dspMeta = dspMeta;
        node.outputHandler = null;
        node.computeHandler = null;
        node.$ins = null;
        node.$outs = null;
        node.dspInChannnels = [];
        node.dspOutChannnels = [];
        node.fPitchwheelLabel = [];
        node.fCtrlLabel = new Array(128).fill(null).map(() => []);
        node.numIn = inputs;
        node.numOut = outputs;
        this.faust.log(node.numIn);
        this.faust.log(node.numOut);
        node.ptrSize = 4;
        node.sampleSize = 4;
        node.factory = dspInstance.exports;
        node.HEAP = node.voices ? memory.buffer : node.factory.memory.buffer;
        node.HEAP32 = new Int32Array(node.HEAP);
        node.HEAPF32 = new Float32Array(node.HEAP);
        this.faust.log(node.HEAP);
        this.faust.log(node.HEAP32);
        this.faust.log(node.HEAPF32);
        node.outputsTimer = 5;
        node.outputsItems = [];
        node.inputsItems = [];
        node.$audioHeap = node.voices ? 0 : node.dspMeta.size;
        node.$$audioHeapInputs = node.$audioHeap;
        node.$$audioHeapOutputs = node.$$audioHeapInputs + node.numIn * node.ptrSize;
        if (node.voices) {
            node.$$audioHeapMixing = node.$$audioHeapOutputs + node.numOut * node.ptrSize;
            node.$audioHeapInputs = node.$$audioHeapMixing + node.numOut * node.ptrSize;
            node.$audioHeapOutputs = node.$audioHeapInputs + node.numIn * node.bufferSize * node.sampleSize;
            node.$audioHeapMixing = node.$audioHeapOutputs + node.numOut * node.bufferSize * node.sampleSize;
            node.$dsp = node.$audioHeapMixing + node.numOut * node.bufferSize * node.sampleSize;
        }
        else {
            node.$audioHeapInputs = node.$$audioHeapOutputs + node.numOut * node.ptrSize;
            node.$audioHeapOutputs = node.$audioHeapInputs + node.numIn * node.bufferSize * node.sampleSize;
            node.$dsp = 0;
        }
        if (node.voices) {
            node.effectMeta = compiledDsp.effectMeta;
            node.$mixing = null;
            node.fFreqLabel$ = [];
            node.fGateLabel$ = [];
            node.fGainLabel$ = [];
            node.fDate = 0;
            node.mixer = mixerInstance.exports;
            node.effect = effectInstance ? effectInstance.exports : null;
            this.faust.log(node.mixer);
            this.faust.log(node.factory);
            this.faust.log(node.effect);
            node.dspVoices$ = [];
            node.dspVoicesState = [];
            node.dspVoicesLevel = [];
            node.dspVoicesDate = [];
            node.kActiveVoice = 0;
            node.kFreeVoice = -1;
            node.kReleaseVoice = -2;
            node.kNoVoice = -3;
            for (let i = 0; i < node.voices; i++) {
                node.dspVoices$[i] = node.$dsp + i * node.dspMeta.size;
                node.dspVoicesState[i] = node.kFreeVoice;
                node.dspVoicesLevel[i] = 0;
                node.dspVoicesDate[i] = 0;
            }
            node.$effect = node.dspVoices$[node.voices - 1] + node.dspMeta.size;
        }
        node.pathTable$ = {};
        node.$buffer = 0;
        node.cachedEvents = [];
        node.plotHandler = plotHandler;
        node.updateOutputs = () => {
            if (node.outputsItems.length > 0 && node.outputHandler && node.outputsTimer-- === 0) {
                node.outputsTimer = 5;
                node.outputsItems.forEach(item => node.outputHandler(item, node.factory.getParamValue(node.$dsp, node.pathTable$[item])));
            }
        };
        node.parseUI = ui => ui.forEach(group => node.parseGroup(group));
        node.parseGroup = group => (group.items ? node.parseItems(group.items) : null);
        node.parseItems = items => items.forEach(item => node.parseItem(item));
        node.parseItem = (item) => {
            if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
                node.parseItems(item.items);
            }
            else if (item.type === "hbargraph" || item.type === "vbargraph") {
                node.outputsItems.push(item.address);
                node.pathTable$[item.address] = item.index;
            }
            else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
                node.inputsItems.push(item.address);
                node.pathTable$[item.address] = item.index;
                if (!item.meta)
                    return;
                item.meta.forEach((meta) => {
                    const { midi } = meta;
                    if (!midi)
                        return;
                    const strMidi = midi.trim();
                    if (strMidi === "pitchwheel") {
                        node.fPitchwheelLabel.push({ path: item.address, min: item.min, max: item.max });
                    }
                    else {
                        const matched = strMidi.match(/^ctrl\s(\d+)/);
                        if (!matched)
                            return;
                        node.fCtrlLabel[parseInt(matched[1])].push({ path: item.address, min: item.min, max: item.max });
                    }
                });
            }
        };
        if (node.voices) {
            node.getPlayingVoice = (pitch) => {
                let voice = node.kNoVoice;
                let oldestDatePlaying = Number.MAX_VALUE;
                for (let i = 0; i < node.voices; i++) {
                    if (node.dspVoicesState[i] === pitch) {
                        if (node.dspVoicesDate[i] < oldestDatePlaying) {
                            oldestDatePlaying = node.dspVoicesDate[i];
                            voice = i;
                        }
                    }
                }
                return voice;
            };
            node.allocVoice = (voice) => {
                node.factory.instanceClear(node.dspVoices$[voice]);
                node.dspVoicesDate[voice] = node.fDate++;
                node.dspVoicesState[voice] = node.kActiveVoice;
                return voice;
            };
            node.getFreeVoice = () => {
                for (let i = 0; i < node.voices; i++) {
                    if (node.dspVoicesState[i] === node.kFreeVoice)
                        return node.allocVoice(i);
                }
                let voiceRelease = node.kNoVoice;
                let voicePlaying = node.kNoVoice;
                let oldestDateRelease = Number.MAX_VALUE;
                let oldestDatePlaying = Number.MAX_VALUE;
                for (let i = 0; i < node.voices; i++) {
                    if (node.dspVoicesState[i] === node.kReleaseVoice) {
                        if (node.dspVoicesDate[i] < oldestDateRelease) {
                            oldestDateRelease = node.dspVoicesDate[i];
                            voiceRelease = i;
                        }
                    }
                    else if (node.dspVoicesDate[i] < oldestDatePlaying) {
                        oldestDatePlaying = node.dspVoicesDate[i];
                        voicePlaying = i;
                    }
                }
                if (oldestDateRelease !== Number.MAX_VALUE) {
                    this.faust.log(`Steal release voice : voice_date = ${node.dspVoicesDate[voiceRelease]} cur_date = ${node.fDate} voice = ${voiceRelease}`);
                    return node.allocVoice(voiceRelease);
                }
                if (oldestDatePlaying !== Number.MAX_VALUE) {
                    this.faust.log(`Steal playing voice : voice_date = ${node.dspVoicesDate[voicePlaying]} cur_date = ${node.fDate} voice = ${voicePlaying}`);
                    return node.allocVoice(voicePlaying);
                }
                return node.kNoVoice;
            };
            node.keyOn = (channel, pitch, velocity) => {
                node.cachedEvents.push({ type: "keyOn", data: [channel, pitch, velocity] });
                const voice = node.getFreeVoice();
                this.faust.log("keyOn voice " + voice);
                node.fFreqLabel$.forEach($ => node.factory.setParamValue(node.dspVoices$[voice], $, utils_1.midiToFreq(pitch)));
                node.fGateLabel$.forEach($ => node.factory.setParamValue(node.dspVoices$[voice], $, 1));
                node.fGainLabel$.forEach($ => node.factory.setParamValue(node.dspVoices$[voice], $, velocity / 127));
                node.dspVoicesState[voice] = pitch;
            };
            node.keyOff = (channel, pitch, velocity) => {
                node.cachedEvents.push({ type: "keyOff", data: [channel, pitch, velocity] });
                const voice = node.getPlayingVoice(pitch);
                if (voice === node.kNoVoice)
                    return this.faust.log("Playing voice not found...");
                node.fGateLabel$.forEach($ => node.factory.setParamValue(node.dspVoices$[voice], $, 0));
                node.dspVoicesState[voice] = node.kReleaseVoice;
                return this.faust.log("keyOff voice " + voice);
            };
            node.allNotesOff = () => {
                node.cachedEvents.push({ type: "ctrlChange", data: [0, 123, 0] });
                for (let i = 0; i < node.voices; i++) {
                    node.fGateLabel$.forEach($gate => node.factory.setParamValue(node.dspVoices$[i], $gate, 0));
                    node.dspVoicesState[i] = node.kReleaseVoice;
                }
            };
        }
        node.midiMessage = (data) => {
            node.cachedEvents.push({ data, type: "midi" });
            const cmd = data[0] >> 4;
            const channel = data[0] & 0xf;
            const data1 = data[1];
            const data2 = data[2];
            if (channel === 9)
                return undefined;
            if (node.voices) {
                if (cmd === 8 || (cmd === 9 && data2 === 0))
                    return node.keyOff(channel, data1, data2);
                if (cmd === 9)
                    return node.keyOn(channel, data1, data2);
            }
            if (cmd === 11)
                return node.ctrlChange(channel, data1, data2);
            if (cmd === 14)
                return node.pitchWheel(channel, (data2 * 128.0 + data1));
            return undefined;
        };
        node.ctrlChange = (channel, ctrl, value) => {
            node.cachedEvents.push({ type: "ctrlChange", data: [channel, ctrl, value] });
            if (!node.fCtrlLabel[ctrl].length)
                return;
            node.fCtrlLabel[ctrl].forEach((ctrl) => {
                const { path } = ctrl;
                node.setParamValue(path, utils_1.remap(value, 0, 127, ctrl.min, ctrl.max));
                if (node.outputHandler)
                    node.outputHandler(path, node.getParamValue(path));
            });
        };
        node.pitchWheel = (channel, wheel) => {
            node.cachedEvents.push({ type: "pitchWheel", data: [channel, wheel] });
            node.fPitchwheelLabel.forEach((pw) => {
                node.setParamValue(pw.path, utils_1.remap(wheel, 0, 16383, pw.min, pw.max));
                if (node.outputHandler)
                    node.outputHandler(pw.path, node.getParamValue(pw.path));
            });
        };
        node.compute = (e) => {
            if (node.destroyed)
                return false;
            for (let i = 0; i < node.numIn; i++) {
                const input = e.inputBuffer.getChannelData(i);
                const dspInput = node.dspInChannnels[i];
                dspInput.set(input);
            }
            if (node.computeHandler)
                node.computeHandler(node.bufferSize);
            if (node.voices) {
                node.mixer.clearOutput(node.bufferSize, node.numOut, node.$outs);
                for (let i = 0; i < node.voices; i++) {
                    node.factory.compute(node.dspVoices$[i], node.bufferSize, node.$ins, node.$mixing);
                    node.mixer.mixVoice(node.bufferSize, node.numOut, node.$mixing, node.$outs);
                }
                if (node.effect)
                    node.effect.compute(node.$effect, node.bufferSize, node.$outs, node.$outs);
            }
            else {
                node.factory.compute(node.$dsp, node.bufferSize, node.$ins, node.$outs);
            }
            node.updateOutputs();
            const outputs = new Array(node.numOut).fill(null).map(() => new Float32Array(node.bufferSize));
            for (let i = 0; i < node.numOut; i++) {
                const output = e.outputBuffer.getChannelData(i);
                const dspOutput = node.dspOutChannnels[i];
                output.set(dspOutput);
                outputs[i].set(dspOutput);
            }
            if (node.plotHandler)
                node.plotHandler(outputs, node.$buffer++, node.cachedEvents.length ? node.cachedEvents : undefined);
            node.cachedEvents = [];
            return true;
        };
        node.setup = () => {
            this.faust.log("buffer_size " + node.bufferSize);
            node.onaudioprocess = node.compute;
            if (node.numIn > 0) {
                node.$ins = node.$$audioHeapInputs;
                for (let i = 0; i < node.numIn; i++) {
                    node.HEAP32[(node.$ins >> 2) + i] = node.$audioHeapInputs + node.bufferSize * node.sampleSize * i;
                }
                const dspInChans = node.HEAP32.subarray(node.$ins >> 2, (node.$ins + node.numIn * node.ptrSize) >> 2);
                for (let i = 0; i < node.numIn; i++) {
                    node.dspInChannnels[i] = node.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + node.bufferSize * node.sampleSize) >> 2);
                }
            }
            if (node.numOut > 0) {
                node.$outs = node.$$audioHeapOutputs;
                if (node.voices)
                    node.$mixing = node.$$audioHeapMixing;
                for (let i = 0; i < node.numOut; i++) {
                    node.HEAP32[(node.$outs >> 2) + i] = node.$audioHeapOutputs + node.bufferSize * node.sampleSize * i;
                    if (node.voices)
                        node.HEAP32[(node.$mixing >> 2) + i] = node.$audioHeapMixing + node.bufferSize * node.sampleSize * i;
                }
                const dspOutChans = node.HEAP32.subarray(node.$outs >> 2, (node.$outs + node.numOut * node.ptrSize) >> 2);
                for (let i = 0; i < node.numOut; i++) {
                    node.dspOutChannnels[i] = node.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + node.bufferSize * node.sampleSize) >> 2);
                }
            }
            node.parseUI(node.dspMeta.ui);
            if (node.effect)
                node.parseUI(node.effectMeta.ui);
            if (node.voices) {
                node.inputsItems.forEach((item) => {
                    if (item.endsWith("/gate"))
                        node.fGateLabel$.push(node.pathTable$[item]);
                    else if (item.endsWith("/freq"))
                        node.fFreqLabel$.push(node.pathTable$[item]);
                    else if (item.endsWith("/gain"))
                        node.fGainLabel$.push(node.pathTable$[item]);
                });
                node.dspVoices$.forEach($voice => node.factory.init($voice, audioCtx.sampleRate));
                if (node.effect)
                    node.effect.init(node.$effect, audioCtx.sampleRate);
            }
            else {
                node.factory.init(node.$dsp, audioCtx.sampleRate);
            }
        };
        node.getSampleRate = () => audioCtx.sampleRate;
        node.getNumInputs = () => node.numIn;
        node.getNumOutputs = () => node.numOut;
        node.init = (sampleRate) => {
            if (node.voices)
                node.dspVoices$.forEach($voice => node.factory.init($voice, sampleRate));
            else
                node.factory.init(node.$dsp, sampleRate);
        };
        node.instanceInit = (sampleRate) => {
            if (node.voices)
                node.dspVoices$.forEach($voice => node.factory.instanceInit($voice, sampleRate));
            else
                node.factory.instanceInit(node.$dsp, sampleRate);
        };
        node.instanceConstants = (sampleRate) => {
            if (node.voices)
                node.dspVoices$.forEach($voice => node.factory.instanceConstants($voice, sampleRate));
            else
                node.factory.instanceConstants(node.$dsp, sampleRate);
        };
        node.instanceResetUserInterface = () => {
            if (node.voices)
                node.dspVoices$.forEach($voice => node.factory.instanceResetUserInterface($voice));
            else
                node.factory.instanceResetUserInterface(node.$dsp);
        };
        node.instanceClear = () => {
            if (node.voices)
                node.dspVoices$.forEach($voice => node.factory.instanceClear($voice));
            else
                node.factory.instanceClear(node.$dsp);
        };
        node.metadata = handler => (node.dspMeta.meta ? node.dspMeta.meta.forEach(meta => handler.declare(Object.keys(meta)[0], meta[Object.keys(meta)[0]])) : undefined);
        node.setOutputParamHandler = handler => node.outputHandler = handler;
        node.getOutputParamHandler = () => node.outputHandler;
        node.setComputeHandler = handler => node.computeHandler = handler;
        node.getComputeHandler = () => node.computeHandler;
        const findPath = (o, p) => {
            if (typeof o !== "object")
                return false;
            if (o.address) {
                if (o.address === p)
                    return true;
                return false;
            }
            for (const k in o) {
                if (findPath(o[k], p))
                    return true;
            }
            return false;
        };
        node.setParamValue = (path, value) => {
            node.cachedEvents.push({ type: "param", data: { path, value } });
            if (node.voices) {
                if (node.effect && findPath(node.effectMeta.ui, path))
                    node.effect.setParamValue(node.$effect, node.pathTable$[path], value);
                else
                    node.dspVoices$.forEach($voice => node.factory.setParamValue($voice, node.pathTable$[path], value));
            }
            else {
                node.factory.setParamValue(node.$dsp, node.pathTable$[path], value);
            }
        };
        node.getParamValue = (path) => {
            if (node.voices) {
                if (node.effect && findPath(node.effectMeta.ui, path))
                    return node.effect.getParamValue(node.$effect, node.pathTable$[path]);
                return node.factory.getParamValue(node.dspVoices$[0], node.pathTable$[path]);
            }
            return node.factory.getParamValue(node.$dsp, node.pathTable$[path]);
        };
        node.getParams = () => node.inputsItems;
        node.getJSON = () => {
            if (node.voices) {
                const o = node.dspMeta;
                const e = node.effectMeta;
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
            return JSON.stringify(node.dspMeta);
        };
        node.getUI = () => {
            if (node.voices) {
                const o = node.dspMeta;
                const e = node.effectMeta;
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
            return node.dspMeta.ui;
        };
        node.destroy = () => {
            node.destroyed = true;
            delete node.outputHandler;
            delete node.computeHandler;
            delete node.plotHandler;
        };
        node.setup();
        return node;
    }
    getNode(optionsIn) {
        return __awaiter(this, void 0, void 0, function* () {
            const { compiledDsp, audioCtx, bufferSize: bufferSizeIn, voices, plotHandler } = optionsIn;
            const bufferSize = bufferSizeIn || 512;
            let node;
            try {
                let effectInstance;
                let mixerInstance;
                const memory = utils_1.createWasmMemory(voices, compiledDsp.dspMeta, compiledDsp.effectMeta, bufferSize);
                const importObject = utils_1.createWasmImport(voices, memory);
                if (voices) {
                    const mixerObject = { imports: { print: console.log }, memory: { memory } };
                    mixerInstance = new WebAssembly.Instance(utils_1.mixer32Module, mixerObject);
                    try {
                        effectInstance = yield WebAssembly.instantiate(compiledDsp.effectModule, importObject);
                    }
                    catch (e) { }
                }
                const dspInstance = yield WebAssembly.instantiate(compiledDsp.dspModule, importObject);
                node = this.initNode(compiledDsp, dspInstance, effectInstance, mixerInstance, audioCtx, bufferSize, memory, voices, plotHandler);
            }
            catch (e) {
                this.faust.error("Faust " + compiledDsp.shaKey + " cannot be loaded or compiled");
                throw e;
            }
            return node;
        });
    }
}
exports.FaustWasmToScriptProcessor = FaustWasmToScriptProcessor;
//# sourceMappingURL=FaustWasmToScriptProcessor.js.map