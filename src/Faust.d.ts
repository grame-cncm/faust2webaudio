/// <reference types="emscripten" />
import { LibFaust } from "./LibFaustLoader";
import { FaustAudioWorkletNode } from "./FaustAudioWorkletNode";
import { TCompiledDsp, TFaustCompileOptions, FaustScriptProcessorNode, TFaustCompileArgs } from "./types";
export declare class Faust {
    private libFaust;
    debug: boolean;
    private dspTable;
    private workletProcessors;
    private _log;
    private offlineProcessor;
    private wasmLocation;
    private dataLocation;
    constructor(debug: boolean, lib: LibFaust);
    getNode(code: string, optionsIn: TFaustCompileOptions): Promise<FaustAudioWorkletNode | FaustScriptProcessorNode>;
    inspect(code: string, optionsIn: {
        voices?: number;
        args?: TFaustCompileArgs;
    }): Promise<TCompiledDsp>;
    plot(optionsIn?: {
        code?: string;
        size?: number;
        sampleRate?: number;
        args?: TFaustCompileArgs;
    }): Promise<Float32Array[]>;
    private compileCode;
    private compileCodes;
    expandCode(code: string, args?: TFaustCompileArgs): string;
    private compileDsp;
    private getScriptProcessorNode;
    private getAudioWorkletNode;
    private deleteDsp;
    stringifyDspTable(): string;
    parseDspTable(str: string): void;
    getDiagram(code: string, args?: TFaustCompileArgs): string;
    get fs(): typeof FS;
    log(...args: any[]): void;
    error(...args: any[]): void;
    logHandler: (msg: string, errorLevel: 1 | 0) => any;
}
