
// import { FS } from "@types/emscripten";
// import { FSWatcher } from "fs";

///<reference path="libfaust.d.ts"/>
///<reference path="../node_modules/@types/emscripten/index.d.ts"/>


// declare interface LibFaust extends EmscriptenModule {
//     cwrap(name: string, type: string, args: string[]): (...args: any[]) => any;
//     UTF8ArrayToString(u8Array: number[], ptr: number, maxBytesToRead?: number): string;
//     stringToUTF8Array(str: string, outU8Array: number[], outIdx: number, maxBytesToWrite: number): number;
//     UTF8ToString(ptr: number, maxBytesToRead?: number): string;
//     stringToUTF8(str: string, outPtr: number, maxBytesToRead?: number): void;
//     lengthBytesUTF8(str: string): number;
//     allocateUTF8(str: string): number;
//     UTF16ToString(ptr: number): string;
//     stringToUTF16(str: string, outPtr: number, maxBytesToRead?: number): void;
//     lengthBytesUTF16(str: string): number;
//     UTF32ToString(ptr: number): string;
//     stringToUTF32(str: string, outPtr: number, maxBytesToRead?: number): void;
//     lengthBytesUTF32(str: string): number;
//     // Undocumented Promise-like, has issue in https://github.com/emscripten-core/emscripten/issues/5820
//     // then(func: (module: any) => any): LibFaust;
//     FS: FS;
// }

declare interface LibFaust extends Faust,  EmscriptenModule {
    FS: typeof FS;
}

// declare function FaustModule(FaustModule: LibFaust, ...args: any[]): LibFaust;


export class LibFaustLoader {
    static load(wasmLocation: string, dataLocation: string): Promise<LibFaust>;
}
