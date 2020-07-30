import { TDspMeta, TCompiledDsp, TFaustUI, TFaustUIGroup, TFaustUIItem } from "./types";
declare const FaustAudioWorkletNode_base: {
    new (context: BaseAudioContext, name: string, options?: AudioWorkletNodeOptions): AudioWorkletNode;
    prototype: AudioWorkletNode;
};
export declare class FaustAudioWorkletNode extends FaustAudioWorkletNode_base {
    onprocessorerror: (e: ErrorEvent) => never;
    voices?: number;
    dspMeta: TDspMeta;
    effectMeta: TDspMeta;
    outputHandler: (address: string, value: number) => any;
    inputsItems: string[];
    outputsItems: string[];
    fPitchwheelLabel: {
        path: string;
        min: number;
        max: number;
    }[];
    fCtrlLabel: {
        path: string;
        min: number;
        max: number;
    }[][];
    plotHandler: (plotted: Float32Array[], index: number, events?: {
        type: string;
        data: any;
    }[]) => any;
    constructor(options: {
        audioCtx: AudioContext;
        id: string;
        compiledDsp: TCompiledDsp;
        voices?: number;
        plotHandler?: (plotted: Float32Array[], index: number, events?: {
            type: string;
            data: any;
        }[]) => any;
        mixer32Module: WebAssembly.Module;
    });
    parseUI(ui: TFaustUI): void;
    parseGroup(group: TFaustUIGroup): void;
    parseItems(items: TFaustUIItem[]): void;
    parseItem(item: TFaustUIItem): void;
    keyOn(channel: number, pitch: number, velocity: number): void;
    keyOff(channel: number, pitch: number, velocity: number): void;
    allNotesOff(): void;
    ctrlChange(channel: number, ctrlIn: number, valueIn: any): void;
    pitchWheel(channel: number, wheel: number): void;
    midiMessage(data: number[] | Uint8Array): void;
    metadata(): void;
    setParamValue(path: string, value: number): void;
    getParamValue(path: string): number;
    setOutputParamHandler(handler: (address: string, value: number) => any): void;
    getOutputParamHandler(): (address: string, value: number) => any;
    getNumInputs(): number;
    getNumOutputs(): number;
    getParams(): string[];
    getJSON(): string;
    getUI(): TFaustUI | {
        type: string;
        label: string;
        items: {
            type: string;
            label: string;
            items: TFaustUI;
        }[];
    }[];
    destroy(): void;
}
export {};
