import { Faust } from "./Faust";
import { FaustScriptProcessorNode, TAudioNodeOptions } from "./types";
export declare class FaustWasmToScriptProcessor {
    faust: Faust;
    constructor(faust: Faust);
    private initNode;
    getNode(optionsIn: TAudioNodeOptions): Promise<FaustScriptProcessorNode>;
}
