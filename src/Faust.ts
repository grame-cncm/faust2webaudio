/* eslint-disable no-console */
import sha1 from "crypto-libraries/sha1";
import { LibFaustLoader, LibFaust } from "./LibFaustLoader";
import { FaustWasmToScriptProcessor } from "./FaustWasmToScriptProcessor";
import { FaustAudioWorkletProcessorWrapper } from "./FaustAudioWorkletProcessor";
import { FaustAudioWorkletNode } from "./FaustAudioWorkletNode";

import * as utils from "./utils";
import { FaustOfflineProcessor } from "./FaustOfflineProcessor";
import { TCompiledDsp, TFaustCompileOptions, FaustScriptProcessorNode, TFaustCompileArgs, TCompiledCode, TCompiledCodes, TAudioNodeOptions, TCompiledStrCodes } from "./types";

// import * as Binaryen from "binaryen";

///<reference path="libfaust.d.ts"/>

/**
 * Main Faust class,
 * usage: `new Faust().ready.then(faust => any);`
 *
 * @export
 * @class Faust
 */
export class Faust {
    /**
     * The libfaust Wasm Emscripten Module
     *
     * @private
     * @type {LibFaust}
     * @memberof Faust
     */
    private libFaust: LibFaust;
    // private createWasmCDSPFactoryFromString: ($name: number, $code: number, argc: number, $argv: number, $errorMsg: number, internalMemory: boolean) => number;
    // private deleteAllWasmCDSPFactories: () => void;
    // private expandCDSPFromString: ($name: number, $code: number, argc: number, $argv: number, $shaKey: number, $errorMsg: number) => number;
    // private getCLibFaustVersion: () => number;
    // private getWasmCModule: ($moduleCode: number) => number;
    // private getWasmCModuleSize: ($moduleCode: number) => number;
    // private getWasmCHelpers: ($moduleCode: number) => number;
    // private freeWasmCModule: ($moduleCode: number) => void;
    // private freeCMemory: ($: number) => number;
    // private cleanupAfterException: () => void;
    // private getErrorAfterException: () => number;
    // private getLibFaustVersion: () => string;
    // private generateCAuxFilesFromString: ($name: number, $code: number, argc: number, $argv: number, $errorMsg: number) => number;
    /**
     * Debug mode, set to true to print out each message
     *
     * @type {boolean}
     * @memberof Faust
     */
    debug: boolean = false;
    /**
     * An object to storage compiled dsp with it's sha1
     *
     * @private
     * @type {{ [shaKey: string]: TCompiledDsp }}
     * @memberof Faust
     */
    private dspTable: { [shaKey: string]: TCompiledDsp } = {};
    /**
     * Registered WorkletProcessor names
     *
     * @private
     * @type {string[]}
     * @memberof Faust
     */
    private workletProcessors: string[] = [];
    private _log: string[] = [];
    /**
     * Offline processor used to plot
     *
     * @private
     * @type {FaustOfflineProcessor}
     * @memberof Faust
     */
    private offlineProcessor: FaustOfflineProcessor = new FaustOfflineProcessor();
    /**
     * Location of `libfaust-wasm.wasm`
     *
     * @private
     * @type {string}
     * @memberof Faust
     */
    private wasmLocation: string;
    /**
     * Location of `libfaust-wasm.data`
     *
     * @private
     * @type {string}
     * @memberof Faust
     */
    private dataLocation: string;

    /**
     * Creates an instance of Faust
     * usage: `new Faust().ready.then(faust => any);`
     *
     * @param {{ debug?: boolean; wasmLocation?: string; dataLocation?: string }} [options]
     * @memberof Faust
     */
    constructor(debug: boolean, lib: LibFaust) {
        this.debug = debug;
        this.libFaust = lib;
    }
    /**
     * Load a libfaust module
     *
     * @returns {Promise<Faust>}
     * @memberof Faust
     */
    // async loadLibFaust(): Promise<Faust> {
    //     if (this.libFaust) return this;
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    //     // @ts-ignore
    //     this.libFaust = await LibFaustLoader.load(this.wasmLocation, this.dataLocation);
    //     // this.importLibFaustFunctions();
    //     return this;
    // }
    /**
     * A promise to resolve when libfaust is ready.
     *
     * @readonly
     * @type {Promise<Faust>}
     * @memberof Faust
     */
    // get ready(): Promise<Faust> {
    //     return this.loadLibFaust();
    // }
    // private importLibFaustFunctions(): void {
    //     if (!this.libFaust) return;
        // this.cleanupAfterException = this.libFaust.cwrap("cleanupAfterException", null, []);
        // this.getErrorAfterException = this.libFaust.cwrap("getErrorAfterException", "number", []);

        // this.createWasmCDSPFactoryFromString = this.libFaust.cwrap("createWasmCDSPFactoryFromString", "number", ["number", "number", "number", "number", "number", "number"]);
        // this.deleteAllWasmCDSPFactories = this.libFaust.cwrap("deleteAllWasmCDSPFactories", null, []);
        // this.expandCDSPFromString = this.libFaust.cwrap("expandCDSPFromString", "number", ["number", "number", "number", "number", "number", "number"]);
        // this.getCLibFaustVersion = this.libFaust.cwrap("getCLibFaustVersion", "number", []);
        // this.getWasmCModule = this.libFaust.cwrap("getWasmCModule", "number", ["number"]);
        // this.getWasmCModuleSize = this.libFaust.cwrap("getWasmCModuleSize", "number", ["number"]);
        // this.getWasmCHelpers = this.libFaust.cwrap("getWasmCHelpers", "number", ["number"]);
        // this.freeWasmCModule = this.libFaust.cwrap("freeWasmCModule", null, ["number"]);
        // this.freeCMemory = this.libFaust.cwrap("freeCMemory", null, ["number"]);
        // this.cleanupAfterException = this.libFaust.cwrap("cleanupAfterException", null, []);
        // this.getErrorAfterException = this.libFaust.cwrap("getErrorAfterException", "number", []);
        // this.getLibFaustVersion = () => this.libFaust.UTF8ToString(this.getCLibFaustVersion());
        // this.generateCAuxFilesFromString = this.libFaust.cwrap("generateCAuxFilesFromString", "number", ["number", "number", "number", "number", "number"]);
    // }
    /**
     * Create a AudioNode from dsp source code with options.
     *
     * @param {string} code - the source code
     * @param {TFaustCompileOptions} optionsIn - options with audioCtx, bufferSize, voices, useWorklet, args, plot and plotHandler
     * @returns {Promise<FaustAudioWorkletNode | FaustScriptProcessorNode>}
     * @memberof Faust
     */
    async getNode(code: string, optionsIn: TFaustCompileOptions): Promise<FaustAudioWorkletNode | FaustScriptProcessorNode> {
        const { audioCtx, voices, useWorklet, bufferSize, plotHandler, args } = optionsIn;
        const argv = utils.toArgv(args);
        const compiledDsp = await this.compileCodes(code, argv, !voices);
        if (!compiledDsp) return null;
        const options = { compiledDsp, audioCtx, voices, plotHandler, bufferSize: useWorklet ? 128 : bufferSize };
        return useWorklet ? this.getAudioWorkletNode(options) : this.getScriptProcessorNode(options);
    }
    /**
     * Get DSP information
     *
     * @param {string} code
     * @param {{ voices?: number; args?: TFaustCompileArgs }} optionsIn
     * @returns {Promise<TCompiledDsp>}
     * @memberof Faust
     */
    async inspect(code: string, optionsIn: { voices?: number; args?: TFaustCompileArgs }): Promise<TCompiledDsp> {
        const { voices, args } = optionsIn;
        const argv = utils.toArgv(args);
        return this.compileCodes(code, argv, !voices);
    }
    /**
     * Plot a dsp offline.
     *
     * @param {{ code?: string; size?: number; sampleRate?: number; args?: TFaustCompileArgs }} [optionsIn]
     * @returns {Promise<Float32Array[]>}
     * @memberof Faust
     */
    async plot(optionsIn?: { code?: string; size?: number; sampleRate?: number; args?: TFaustCompileArgs }): Promise<Float32Array[]> {
        let compiledDsp;
        const argv = utils.toArgv(optionsIn.args);
        if (optionsIn.code) {
            compiledDsp = await this.compileCodes(optionsIn.code, argv, true);
            if (!compiledDsp) return null;
        }
        return this.offlineProcessor.plot({ compiledDsp, ...optionsIn });
    }
    /**
     * Generate Uint8Array and helpersCode from a dsp source code
     *
     * @private
     * @param {string} factoryName - Class name of the source code
     * @param {string} code - dsp source code
     * @param {string[]} argvIn - Array of paramaters to be given to the Faust compiler
     * @param {boolean} internalMemory - Use internal Memory flag, false for poly, true for mono
     * @returns {TCompiledCode} - An object with ui8Code, code, helpersCode
     * @memberof Faust
     */
    private compileCode(factoryName: string, code: string, argvIn: string[], internalMemory: boolean): TCompiledCode {
        // const codeSize = this.libFaust.lengthBytesUTF8(code) + 1;
        // const $code = this.libFaust._malloc(codeSize);
        // const name = "FaustDSP";
        // const nameSize = this.libFaust.lengthBytesUTF8(name) + 1;
        // const $name = this.libFaust._malloc(nameSize);
        // const $errorMsg = this.libFaust._malloc(4096);

        // this.libFaust.stringToUTF8(name, $name, nameSize);
        // this.libFaust.stringToUTF8(code, $code, codeSize);

        // Add 'cn' option with the factory name
        // const argv = argvIn || [];
        // argv.push("-cn", factoryName);

        // // Prepare 'argv_aux' array for C side
        // const ptrSize = 4;
        // const $argv = this.libFaust._malloc(argv.length * ptrSize); // Get buffer from emscripten.
        // let argvBuffer$ = new Int32Array(this.libFaust.HEAP32.buffer, $argv, argv.length); // Get a integer view on the newly allocated buffer.
        // for (let i = 0; i < argv.length; i++) {
        //     const size$arg = this.libFaust.lengthBytesUTF8(argv[i]) + 1;
        //     const $arg = this.libFaust._malloc(size$arg);
        //     this.libFaust.stringToUTF8(argv[i], $arg, size$arg);
        //     argvBuffer$[i] = $arg;
        // }
        let argsStr = utils.argsTbl2String(argvIn) + " -cn " + factoryName;
        try {
            const time1 = performance.now();
            let fact = this.libFaust.createDSPFactory("FaustDSP", code, argsStr, internalMemory);
            const time2 = performance.now();
            this.log("Faust compilation duration : " + (time2 - time1));
            if (fact.error) throw new Error(fact.error);

            if (fact.module === 0) return null;

            let wasm = this.libFaust.getWasmModule(fact.module);
            this.log("getWasmModule "  + wasm.module);
            // Copy native 'binary' string in JavaScript Uint8Array
            const size = wasm.data.size();
            const ui8Code = new Uint8Array(size);
            this.log("copy " + size);
            for (let i = 0; i < size; i++) {
                ui8Code[i] = wasm.data.get(i);
            }
            // Free C allocated wasm module
            // this.log("freeWasmModule " + wasm.module);
            // this.libFaust.freeWasmModule(wasm.module);
            // this.log("freeWasmModule done");
            return { ui8Code, code, helpersCode: wasm.helper };

            // const time1 = performance.now();
            // const $moduleCode = this.createWasmCDSPFactoryFromString($name, $code, argv.length, $argv, $errorMsg, internalMemory);
            // const time2 = performance.now();
            // this.log("Faust compilation duration : " + (time2 - time1));
            // const errorMsg = this.libFaust.UTF8ToString($errorMsg);
            // if (errorMsg) throw new Error(errorMsg);

            // if ($moduleCode === 0) return null;
            // const $compiledCode = this.getWasmCModule($moduleCode);
            // const compiledCodeSize = this.getWasmCModuleSize($moduleCode);
            // // Copy native 'binary' string in JavaScript Uint8Array
            // const ui8Code = new Uint8Array(compiledCodeSize);
            // for (let i = 0; i < compiledCodeSize; i++) {
            //     // faster than 'getValue' which gets the type of access for each read...
            //     ui8Code[i] = this.libFaust.HEAP8[$compiledCode + i];
            // }
            // const $helpersCode = this.getWasmCHelpers($moduleCode);
            // const helpersCode = this.libFaust.UTF8ToString($helpersCode);
            // // Free strings
            // this.libFaust._free($code);
            // this.libFaust._free($name);
            // this.libFaust._free($errorMsg);
            // // Free C allocated wasm module
            // this.freeWasmCModule($moduleCode);
            // // Get an updated integer view on the newly allocated buffer after possible emscripten memory grow
            // argvBuffer$ = new Int32Array(this.libFaust.HEAP32.buffer, $argv, argv.length);
            // // Free 'argv' C side array
            // for (let i = 0; i < argv.length; i++) {
            //     this.libFaust._free(argvBuffer$[i]);
            // }
            // this.libFaust._free($argv);
            // return { ui8Code, code, helpersCode };
        } catch (e) {
            // libfaust is compiled without C++ exception activated, so a JS exception is throwed and catched here
            const errorMsg = this.libFaust.getErrorAfterException();
            this.libFaust.cleanupAfterException();
            // Report the Emscripten error
            throw errorMsg ? new Error(errorMsg) : e;
        }
    }
    /**
     * createDSPFactoryAux
     * Generate shaKey, effects, dsp, their Wasm Modules and helpers from a dsp source code
     *
     * @private
     * @param {string} code - dsp source code
     * @param {string[]} argv - Array of paramaters to be given to the Faust compiler
     * @param {boolean} internalMemory - Use internal Memory flag, false for poly, true for mono
     * @returns {Promise<TCompiledDsp>} - An object contains shaKey, empty polyphony map, original codes, modules and helpers
     * @memberof Faust
     */
    private async compileCodes(code: string, argv: string[], internalMemory: boolean): Promise<TCompiledDsp> {
        // Code memory type and argv in the SHAKey to differentiate compilation flags and Monophonic and Polyphonic factories
        const strArgv = argv.join("");
        const shaKey = sha1.hash(code + (internalMemory ? "internal_memory" : "external_memory") + strArgv, { msgFormat: "string" });
        const compiledDsp = this.dspTable[shaKey];
        if (compiledDsp) {
            this.log("Existing library : " + shaKey);
            // Existing factory, do not create it...
            return compiledDsp;
        }
        // this.log("libfaust.js version : " + this.getLibFaustVersion());
        this.log("libfaust.js version : " + this.libFaust.version());
        // Create 'effect' expression
        const effectCode = `adapt(1,1) = _; adapt(2,2) = _,_; adapt(1,2) = _ <: _,_; adapt(2,1) = _,_ :> _;
adaptor(F,G) = adapt(outputs(F),inputs(G));
dsp_code = environment{${code}};
process = adaptor(dsp_code.process, dsp_code.effect) : dsp_code.effect;`;
        const dspCompiledCode = this.compileCode(shaKey, code, argv, internalMemory);
        let effectCompiledCode: TCompiledCode;
        try {
            effectCompiledCode = this.compileCode(shaKey + "_", effectCode, argv, internalMemory);
        } catch (e) {} // eslint-disable-line no-empty
        const compiledCodes = { dsp: dspCompiledCode, effect: effectCompiledCode };
        return this.compileDsp(compiledCodes, shaKey);
    }
    /**
     * From a DSP source file, creates a "self-contained" DSP source string where all needed librairies have been included.
     * All compilations options are 'normalized' and included as a comment in the expanded string.
     *
     * @param {string} code - dsp source code
     * @param {TFaustCompileArgs} args - Paramaters to be given to the Faust compiler
     * @returns {string} "self-contained" DSP source string where all needed librairies
     * @memberof Faust
     */
    expandCode(code: string, args?: TFaustCompileArgs): string {
        this.log("libfaust.js version : " + this.libFaust.version());
        // Allocate strings on the HEAP
        // const codeSize = this.libFaust.lengthBytesUTF8(code) + 1;
        // const $code = this.libFaust._malloc(codeSize);

        // const name = "FaustDSP";
        // const nameSize = this.libFaust.lengthBytesUTF8(name) + 1;
        // const $name = this.libFaust._malloc(nameSize);

        // const $shaKey = this.libFaust._malloc(64);
        // const $errorMsg = this.libFaust._malloc(4096);

        // this.libFaust.stringToUTF8(name, $name, nameSize);
        // this.libFaust.stringToUTF8(code, $code, codeSize);

        // const argvIn = args ? utils.toArgv(args) : [];
        // // Force "wasm" compilation
        // const argv = [...argvIn, "-lang", "wasm"];

        const argsStr = utils.args2String(args) + "-lang wasm";

        // Prepare 'argv' array for C side
        // const ptrSize = 4;
        // const $argv = this.libFaust._malloc(argv.length * ptrSize); // Get buffer from emscripten.
        // let argvBuffer$ = new Int32Array(this.libFaust.HEAP32.buffer, $argv, argv.length); // Get a integer view on the newly allocated buffer.
        // for (let i = 0; i < argv.length; i++) {
        //     const size$arg = this.libFaust.lengthBytesUTF8(argv[i]) + 1;
        //     const $arg = this.libFaust._malloc(size$arg);
        //     this.libFaust.stringToUTF8(argv[i], $arg, size$arg);
        //     argvBuffer$[i] = $arg;
        // }
        try {
            let expand = this.libFaust.expandDSP("FaustDSP", code, argsStr);
            const expandedCode = expand.dsp;
            const errorMsg = expand.error;
            if (errorMsg) this.error(errorMsg);

            // const $expandedCode = this.expandCDSPFromString($name, $code, argv.length, $argv, $shaKey, $errorMsg);
            // const expandedCode = this.libFaust.UTF8ToString($expandedCode);
            // const errorMsg = this.libFaust.UTF8ToString($errorMsg);
            // if (errorMsg) this.error(errorMsg);
            // Free strings
            // this.libFaust._free($code);
            // this.libFaust._free($name);
            // this.libFaust._free($shaKey);
            // this.libFaust._free($errorMsg);
            // Free C allocated expanded string
            // this.freeCMemory($expandedCode);
            // Get an updated integer view on the newly allocated buffer after possible emscripten memory grow
            // argvBuffer$ = new Int32Array(this.libFaust.HEAP32.buffer, $argv, argv.length);
            // // Free 'argv' C side array
            // for (let i = 0; i < argv.length; i++) {
            //     this.libFaust._free(argvBuffer$[i]);
            // }
            // this.libFaust._free($argv);
            return expandedCode;
        } catch (e) {
            // libfaust is compiled without C++ exception activated, so a JS exception is throwed and catched here
            const errorMsg = this.libFaust.getErrorAfterException();
            this.libFaust.cleanupAfterException();

            // const errorMsg = this.libFaust.UTF8ToString(this.getErrorAfterException());
            // this.cleanupAfterException();
            // Report the Emscripten error
            throw errorMsg ? new Error(errorMsg) : e;
        }
    }
    /**
     * readDSPFactoryFromMachineAux
     * Compile wasm modules from dsp and effect Uint8Arrays
     *
     * @private
     * @param {TCompiledCodes} codes
     * @param {string} shaKey
     * @returns {Promise<TCompiledDsp>}
     * @memberof Faust
     */
    private async compileDsp(codes: TCompiledCodes, shaKey: string): Promise<TCompiledDsp> {
        const time1 = performance.now();
        /*
        if (typeof Binaryen !== "undefined") {
            try {
                const binaryenModule = Binaryen.readBinary(codes.dsp.ui8Code);
                this.log("Binaryen based optimisation");
                binaryenModule.optimize();
                // console.log(binaryen_module.emitText());
                codes.dsp.ui8Code = binaryenModule.emitBinary();
                binaryenModule.dispose();
            } catch (e) {
                this.log("Binaryen not available, no optimisation...");
            }
        }
        */
        const dspModule = await WebAssembly.compile(codes.dsp.ui8Code);
        if (!dspModule) {
            this.error("Faust DSP factory cannot be compiled");
            throw new Error("Faust DSP factory cannot be compiled");
        }
        const time2 = performance.now();
        this.log("WASM compilation duration : " + (time2 - time1));
        const compiledDsp: TCompiledDsp = { shaKey, codes, dspModule, dspMeta: undefined }; // Default mode
        // 'libfaust.js' wasm backend generates UI methods, then we compile the code
        // eval(helpers_code1);
        // factory.getJSON = eval("getJSON" + dspName);
        // factory.getBase64Code = eval("getBase64Code" + dspName);
        try {
            const json = codes.dsp.helpersCode.match(/getJSON\w+?\(\)[\s\n]*{[\s\n]*return[\s\n]*'(\{.+?)';}/)[1].replace(/\\'/g, "'");
            // const base64Code = codes.dsp.helpersCode.match(/getBase64Code\w+?\(\)[\s\n]*{[\s\n]*return[\s\n]*"([A-Za-z0-9+/=]+?)";[\s\n]+}/)[1];
            const meta = JSON.parse(json);
            compiledDsp.dspMeta = meta;
        } catch (e) {
            this.error("Error in JSON.parse: " + e.message);
            throw e;
        }
        this.dspTable[shaKey] = compiledDsp;
        // Possibly compile effect
        if (!codes.effect) return compiledDsp;
        try {
            const effectModule = await WebAssembly.compile(codes.effect.ui8Code);
            compiledDsp.effectModule = effectModule;
            // 'libfaust.js' wasm backend generates UI methods, then we compile the code
            // eval(helpers_code2);
            // factory.getJSONeffect = eval("getJSON" + factory_name2);
            // factory.getBase64Codeeffect = eval("getBase64Code" + factory_name2);
            try {
                const json = codes.effect.helpersCode.match(/getJSON\w+?\(\)[\s\n]*{[\s\n]*return[\s\n]*'(\{.+?)';}/)[1].replace(/\\'/g, "'");
                // const base64Code = codes.effect.helpersCode.match(/getBase64Code\w+?\(\)[\s\n]*{[\s\n]*return[\s\n]*"([A-Za-z0-9+/=]+?)";[\s\n]+}/)[1];
                const meta = JSON.parse(json);
                compiledDsp.effectMeta = meta;
            } catch (e) {
                this.error("Error in JSON.parse: " + e.message);
                throw e;
            }
        } catch (e) {
            return compiledDsp;
        }
        return compiledDsp;
    }
    /**
     * Get a ScriptProcessorNode from compiled dsp
     *
     * @private
     * @param {TCompiledDsp} compiledDsp - DSP compiled by libfaust
     * @param {TAudioNodeOptions} optionsIn
     * @returns {Promise<FaustScriptProcessorNode>}
     * @memberof Faust
     */
    private async getScriptProcessorNode(optionsIn: TAudioNodeOptions): Promise<FaustScriptProcessorNode> {
        return new FaustWasmToScriptProcessor(this).getNode(optionsIn);
    }
    // deleteDSPInstance() {}
    /**
     * Get a AudioWorkletNode from compiled dsp
     *
     * @private
     * @param {TAudioNodeOptions} optionsIn
     * @returns {Promise<FaustAudioWorkletNode>}
     * @memberof Faust
     */
    private async getAudioWorkletNode(optionsIn: TAudioNodeOptions): Promise<FaustAudioWorkletNode> {
        const { compiledDsp: compiledDspWithCodes, audioCtx, voices, plotHandler } = optionsIn;
        const compiledDsp = { ...compiledDspWithCodes };
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
(${FaustAudioWorkletProcessorWrapper.toString()})();
`;
            const url = window.URL.createObjectURL(new Blob([strProcessor], { type: "text/javascript" }));
            await audioCtx.audioWorklet.addModule(url);
            this.workletProcessors.push(id);
        }
        return new FaustAudioWorkletNode({ audioCtx, id, voices, compiledDsp, plotHandler, mixer32Module: utils.mixer32Module });
    }
    /**
     * Remove a DSP from registry
     *
     * @private
     * @param {TCompiledDsp} compiledDsp
     * @memberof Faust
     */
    private deleteDsp(compiledDsp: TCompiledDsp): void {
        // The JS side is cleared
        delete this.dspTable[compiledDsp.shaKey];
        // The native C++ is cleared each time (freeWasmCModule has been already called in faust.compile)
        this.libFaust.deleteAllDSPFactories();
        // this.deleteAllWasmCDSPFactories();
    }
    /**
     * Stringify current storaged DSP Table.
     *
     * @returns {string}
     * @memberof Faust
     */
    stringifyDspTable(): string {
        const strTable: { [shaKey: string]: TCompiledStrCodes } = {};
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
    /**
     * parse and store a stringified DSP Table.
     *
     * @param {string} str
     * @memberof Faust
     */
    parseDspTable(str: string) {
        const strTable = JSON.parse(str) as { [shaKey: string]: TCompiledStrCodes };
        for (const shaKey in strTable) {
            if (this.dspTable[shaKey]) continue;
            const strCodes = strTable[shaKey];
            const compiledCodes: TCompiledCodes = {
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
    // deleteDSPWorkletInstance() {}
    /**
     * Get an SVG Diagram XML File as string
     *
     * @param {string} code faust source code
     * @param {TFaustCompileArgs} args - Paramaters to be given to the Faust compiler
     * @returns {string} svg file as string
     * @memberof Faust
     */
    getDiagram(code: string, args?: TFaustCompileArgs): string {
        // const codeSize = this.libFaust.lengthBytesUTF8(code) + 1;
        // const $code = this.libFaust._malloc(codeSize);
        // const name = "FaustDSP";
        // const nameSize = this.libFaust.lengthBytesUTF8(name) + 1;
        // const $name = this.libFaust._malloc(nameSize);
        // const $errorMsg = this.libFaust._malloc(4096);

        // this.libFaust.stringToUTF8(name, $name, nameSize);
        // this.libFaust.stringToUTF8(code, $code, codeSize);
        // const argvIn = args ? utils.toArgv(args) : [];
        // const argv = [...argvIn, "-lang", "wast", "-o", "/dev/null", "-svg"];

        // // Prepare 'argv' array for C side
        // const ptrSize = 4;
        // const $argv = this.libFaust._malloc(argv.length * ptrSize); // Get buffer from emscripten.
        // let argvBuffer$ = new Int32Array(this.libFaust.HEAP32.buffer, $argv, argv.length); // Get a integer view on the newly allocated buffer.
        // for (let i = 0; i < argv.length; i++) {
        //     const size$arg = this.libFaust.lengthBytesUTF8(argv[i]) + 1;
        //     const $arg = this.libFaust._malloc(size$arg);
        //     this.libFaust.stringToUTF8(argv[i], $arg, size$arg);
        //     argvBuffer$[i] = $arg;
        // }

        const argsStr = utils.args2String(args) + "-lang wasm -o /dev/null -svg";
        try {
            let aux = this.libFaust.generateAuxFiles("FaustDSP", code, argsStr);

            // this.generateCAuxFilesFromString($name, $code, argv.length, $argv, $errorMsg);
            // // Free strings
            // this.libFaust._free($code);
            // this.libFaust._free($name);
            // this.libFaust._free($errorMsg);
            // // Get an updated integer view on the newly allocated buffer after possible emscripten memory grow
            // argvBuffer$ = new Int32Array(this.libFaust.HEAP32.buffer, $argv, argv.length);
            // // Free 'argv' C side array
            // for (let i = 0; i < argv.length; i++) {
            //     this.libFaust._free(argvBuffer$[i]);
            // }
            // this.libFaust._free($argv);
        } catch (e) {
            // libfaust is compiled without C++ exception activated, so a JS exception is throwed and catched here
            // const errorMsg = this.libFaust.UTF8ToString(this.getErrorAfterException());
            const errorMsg = this.libFaust.getErrorAfterException();
            this.libFaust.cleanupAfterException();
            // Report the Emscripten error
            throw errorMsg ? new Error(errorMsg) : e;
        }
        return this.libFaust.FS.readFile("FaustDSP-svg/process.svg", { encoding: "utf8" }) as string;
    }
    /**
     * Expose LibFaust Emscripten Module File System
     *
     * @param {string} path path string
     * @returns {Emscripten.FS} Emscripten Module File System
     * @memberof Faust
     */
    get fs() {
        return this.libFaust.FS;
    }
    log(...args: any[]) {
        if (this.debug) console.log(...args);
        const msg = args.length === 1 && typeof args[0] === "string" ? args[0] : JSON.stringify(args.length !== 1 ? args : args[0]);
        this._log.push(msg);
        if (typeof this.logHandler === "function") this.logHandler(msg, 0);
    }
    error(...args: any[]) {
        console.error(...args);
        const msg = args.length === 1 && typeof args[0] === "string" ? args[0] : JSON.stringify(args.length !== 1 ? args : args[0]);
        this._log.push(msg);
        if (typeof this.logHandler === "function") this.logHandler(msg, 1);
    }
    logHandler: (msg: string, errorLevel: 1 | 0) => any;
}
