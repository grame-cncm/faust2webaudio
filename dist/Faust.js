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
const sha1_1 = require("crypto-libraries/sha1");
const FaustWasmToScriptProcessor_1 = require("./FaustWasmToScriptProcessor");
const FaustAudioWorkletProcessor_1 = require("./FaustAudioWorkletProcessor");
const FaustAudioWorkletNode_1 = require("./FaustAudioWorkletNode");
const utils = require("./utils");
const FaustOfflineProcessor_1 = require("./FaustOfflineProcessor");
class Faust {
    constructor(debug, lib) {
        this.debug = false;
        this.dspTable = {};
        this.workletProcessors = [];
        this._log = [];
        this.offlineProcessor = new FaustOfflineProcessor_1.FaustOfflineProcessor();
        this.debug = debug;
        this.libFaust = lib;
    }
    getNode(code, optionsIn) {
        return __awaiter(this, void 0, void 0, function* () {
            const { audioCtx, voices, useWorklet, bufferSize, plotHandler, args } = optionsIn;
            const argv = utils.toArgv(args);
            const compiledDsp = yield this.compileCodes(code, argv, !voices);
            if (!compiledDsp)
                return null;
            const options = { compiledDsp, audioCtx, voices, plotHandler, bufferSize: useWorklet ? 128 : bufferSize };
            return useWorklet ? this.getAudioWorkletNode(options) : this.getScriptProcessorNode(options);
        });
    }
    inspect(code, optionsIn) {
        return __awaiter(this, void 0, void 0, function* () {
            const { voices, args } = optionsIn;
            const argv = utils.toArgv(args);
            return this.compileCodes(code, argv, !voices);
        });
    }
    plot(optionsIn) {
        return __awaiter(this, void 0, void 0, function* () {
            let compiledDsp;
            const argv = utils.toArgv(optionsIn.args);
            if (optionsIn.code) {
                compiledDsp = yield this.compileCodes(optionsIn.code, argv, true);
                if (!compiledDsp)
                    return null;
            }
            return this.offlineProcessor.plot(Object.assign({ compiledDsp }, optionsIn));
        });
    }
    compileCode(factoryName, code, argvIn, internalMemory) {
        let argsStr = utils.argsTbl2String(argvIn) + " -cn " + factoryName;
        try {
            const time1 = performance.now();
            let fact = this.libFaust.createDSPFactory("FaustDSP", code, argsStr, internalMemory);
            const time2 = performance.now();
            this.log("Faust compilation duration : " + (time2 - time1));
            if (fact.error)
                throw new Error(fact.error);
            if (fact.module === 0)
                return null;
            let wasm = this.libFaust.getWasmModule(fact.module);
            const size = wasm.data.size();
            const ui8Code = new Uint8Array(size);
            for (let i = 0; i < size; i++) {
                ui8Code[i] = wasm.data.get(i);
            }
            this.libFaust.freeWasmModule(fact.module);
            return { ui8Code, code, helpersCode: wasm.helper };
        }
        catch (e) {
            const errorMsg = this.libFaust.getErrorAfterException();
            this.libFaust.cleanupAfterException();
            throw errorMsg ? new Error(errorMsg) : e;
        }
    }
    compileCodes(code, argv, internalMemory) {
        return __awaiter(this, void 0, void 0, function* () {
            const strArgv = argv.join("");
            const shaKey = sha1_1.default.hash(code + (internalMemory ? "internal_memory" : "external_memory") + strArgv, { msgFormat: "string" });
            const compiledDsp = this.dspTable[shaKey];
            if (compiledDsp) {
                this.log("Existing library : " + shaKey);
                return compiledDsp;
            }
            this.log("libfaust.js version : " + this.libFaust.version());
            const effectCode = `adapt(1,1) = _; adapt(2,2) = _,_; adapt(1,2) = _ <: _,_; adapt(2,1) = _,_ :> _;
adaptor(F,G) = adapt(outputs(F),inputs(G));
dsp_code = environment{${code}};
process = adaptor(dsp_code.process, dsp_code.effect) : dsp_code.effect;`;
            const dspCompiledCode = this.compileCode(shaKey, code, argv, internalMemory);
            let effectCompiledCode;
            try {
                effectCompiledCode = this.compileCode(shaKey + "_", effectCode, argv, internalMemory);
            }
            catch (e) { }
            const compiledCodes = { dsp: dspCompiledCode, effect: effectCompiledCode };
            return this.compileDsp(compiledCodes, shaKey);
        });
    }
    expandCode(code, args) {
        this.log("libfaust.js version : " + this.libFaust.version());
        const argsStr = utils.args2String(args) + "-lang wasm";
        try {
            let expand = this.libFaust.expandDSP("FaustDSP", code, argsStr);
            const expandedCode = expand.dsp;
            const errorMsg = expand.error;
            if (errorMsg)
                this.error(errorMsg);
            return expandedCode;
        }
        catch (e) {
            const errorMsg = this.libFaust.getErrorAfterException();
            this.libFaust.cleanupAfterException();
            throw errorMsg ? new Error(errorMsg) : e;
        }
    }
    compileDsp(codes, shaKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const time1 = performance.now();
            const dspModule = yield WebAssembly.compile(codes.dsp.ui8Code);
            if (!dspModule) {
                this.error("Faust DSP factory cannot be compiled");
                throw new Error("Faust DSP factory cannot be compiled");
            }
            const time2 = performance.now();
            this.log("WASM compilation duration : " + (time2 - time1));
            const compiledDsp = { shaKey, codes, dspModule, dspMeta: undefined };
            try {
                const json = codes.dsp.helpersCode.match(/getJSON\w+?\(\)[\s\n]*{[\s\n]*return[\s\n]*'(\{.+?)';}/)[1].replace(/\\'/g, "'");
                const meta = JSON.parse(json);
                compiledDsp.dspMeta = meta;
            }
            catch (e) {
                this.error("Error in JSON.parse: " + e.message);
                throw e;
            }
            this.dspTable[shaKey] = compiledDsp;
            if (!codes.effect)
                return compiledDsp;
            try {
                const effectModule = yield WebAssembly.compile(codes.effect.ui8Code);
                compiledDsp.effectModule = effectModule;
                try {
                    const json = codes.effect.helpersCode.match(/getJSON\w+?\(\)[\s\n]*{[\s\n]*return[\s\n]*'(\{.+?)';}/)[1].replace(/\\'/g, "'");
                    const meta = JSON.parse(json);
                    compiledDsp.effectMeta = meta;
                }
                catch (e) {
                    this.error("Error in JSON.parse: " + e.message);
                    throw e;
                }
            }
            catch (e) {
                return compiledDsp;
            }
            return compiledDsp;
        });
    }
    getScriptProcessorNode(optionsIn) {
        return __awaiter(this, void 0, void 0, function* () {
            return new FaustWasmToScriptProcessor_1.FaustWasmToScriptProcessor(this).getNode(optionsIn);
        });
    }
    getAudioWorkletNode(optionsIn) {
        return __awaiter(this, void 0, void 0, function* () {
            const { compiledDsp: compiledDspWithCodes, audioCtx, voices, plotHandler } = optionsIn;
            const compiledDsp = Object.assign({}, compiledDspWithCodes);
            delete compiledDsp.codes;
            const id = compiledDsp.shaKey + "_" + voices;
            if (this.workletProcessors.indexOf(id) === -1) {
                const strProcessor = `
const remap = ${utils.remap.toString()};
const midiToFreq = ${utils.midiToFreq.toString()};
const findPath = (${utils.findPathClosure.toString()})();
const createWasmImport = ${utils.createWasmImport.toString()};
const createWasmMemory = ${utils.createWasmMemory.toString()};
const faustData = ${JSON.stringify({
                    id,
                    voices,
                    dspMeta: compiledDsp.dspMeta,
                    effectMeta: compiledDsp.effectMeta
                })};
(${FaustAudioWorkletProcessor_1.FaustAudioWorkletProcessorWrapper.toString()})();
`;
                const url = window.URL.createObjectURL(new Blob([strProcessor], { type: "text/javascript" }));
                yield audioCtx.audioWorklet.addModule(url);
                this.workletProcessors.push(id);
            }
            return new FaustAudioWorkletNode_1.FaustAudioWorkletNode({ audioCtx, id, voices, compiledDsp, plotHandler, mixer32Module: utils.mixer32Module });
        });
    }
    deleteDsp(compiledDsp) {
        delete this.dspTable[compiledDsp.shaKey];
        this.libFaust.deleteAllDSPFactories();
    }
    stringifyDspTable() {
        const strTable = {};
        for (const key in this.dspTable) {
            const { codes } = this.dspTable[key];
            strTable[key] = {
                dsp: {
                    strCode: btoa(utils.ab2str(codes.dsp.ui8Code)),
                    code: codes.dsp.code,
                    helpersCode: codes.dsp.helpersCode
                },
                effect: codes.effect ? {
                    strCode: btoa(utils.ab2str(codes.effect.ui8Code)),
                    code: codes.effect.code,
                    helpersCode: codes.effect.helpersCode
                } : undefined
            };
        }
        return JSON.stringify(strTable);
    }
    parseDspTable(str) {
        const strTable = JSON.parse(str);
        for (const shaKey in strTable) {
            if (this.dspTable[shaKey])
                continue;
            const strCodes = strTable[shaKey];
            const compiledCodes = {
                dsp: {
                    ui8Code: utils.str2ab(atob(strCodes.dsp.strCode)),
                    code: strCodes.dsp.code,
                    helpersCode: strCodes.dsp.helpersCode
                },
                effect: strCodes.effect ? {
                    ui8Code: utils.str2ab(atob(strCodes.effect.strCode)),
                    code: strCodes.effect.code,
                    helpersCode: strCodes.effect.helpersCode
                } : undefined
            };
            this.compileDsp(compiledCodes, shaKey).then(dsp => this.dspTable[shaKey] = dsp);
        }
    }
    getDiagram(code, args) {
        const argsStr = utils.args2String(args) + "-lang wasm -o /dev/null -svg";
        try {
            let aux = this.libFaust.generateAuxFiles("FaustDSP", code, argsStr);
        }
        catch (e) {
            const errorMsg = this.libFaust.getErrorAfterException();
            this.libFaust.cleanupAfterException();
            throw errorMsg ? new Error(errorMsg) : e;
        }
        return this.libFaust.FS.readFile("FaustDSP-svg/process.svg", { encoding: "utf8" });
    }
    get fs() {
        return this.libFaust.FS;
    }
    log(...args) {
        if (this.debug)
            console.log(...args);
        const msg = args.length === 1 && typeof args[0] === "string" ? args[0] : JSON.stringify(args.length !== 1 ? args : args[0]);
        this._log.push(msg);
        if (typeof this.logHandler === "function")
            this.logHandler(msg, 0);
    }
    error(...args) {
        console.error(...args);
        const msg = args.length === 1 && typeof args[0] === "string" ? args[0] : JSON.stringify(args.length !== 1 ? args : args[0]);
        this._log.push(msg);
        if (typeof this.logHandler === "function")
            this.logHandler(msg, 1);
    }
}
exports.Faust = Faust;
//# sourceMappingURL=Faust.js.map