/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable object-property-newline */
import { TDspMeta, TFaustCompileArgs } from "./types";
import mixer32DataURI from "./wasm/mixer32.wasm";

export const ab2str = (buf: ArrayBuffer): string => (buf ? String.fromCharCode.apply(null, new Uint8Array(buf)) : null);
export const str2ab = (str: string): ArrayBuffer => {
    if (!str) return null;
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
};
export const atoUint6 = (nChr: number) => { // eslint-disable-line arrow-body-style
    return nChr > 64 && nChr < 91
        ? nChr - 65
        : nChr > 96 && nChr < 123
            ? nChr - 71
            : nChr > 47 && nChr < 58
                ? nChr + 4
                : nChr === 43
                    ? 62
                    : nChr === 47
                        ? 63
                        : 0;
};
export const atoab = (sBase64: string, nBlocksSize?: number) => {
    if (typeof window.atob === "function") return str2ab(atob(sBase64));
    const sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, "");
    const nInLen = sB64Enc.length;
    const nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
    const taBytes = new Uint8Array(nOutLen);
    for (let nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
        nMod4 = nInIdx & 3;
        nUint24 |= atoUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
        if (nMod4 === 3 || nInLen - nInIdx === 1) {
            for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
            }
            nUint24 = 0;
        }
    }
    return taBytes.buffer;
};
export const heap2Str = (buf: number[]) => {
    let str = "";
    let i = 0;
    while (buf[i] !== 0) {
        str += String.fromCharCode(buf[i++]);
    }
    return str;
};
export const mixer32Module = new WebAssembly.Module(atoab(mixer32DataURI.split(",")[1]));
export const midiToFreq = (note: number) => 440.0 * 2 ** ((note - 69) / 12);
export const remap = (v: number, mn0: number, mx0: number, mn1: number, mx1: number) => (v - mn0) / (mx0 - mn0) * (mx1 - mn1) + mn1;
export const findPath = (o: any, p: string) => {
    if (typeof o !== "object") return false;
    if (o.address) {
        return (o.address === p);
    }
    for (const k in o) {
        if (findPath(o[k], p)) return true;
    }
    return false;
};
export const findPathClosure = () => {
    const findPath = (o: any, p: string) => {
        if (typeof o !== "object") return false;
        if (o.address) {
            return (o.address === p);
        }
        for (const k in o) {
            if (findPath(o[k], p)) return true;
        }
        return false;
    };
    return findPath;
};
export const createWasmImport = (voices: number, memory: WebAssembly.Memory) => ({
    env: {
        memory: voices ? memory : undefined, memoryBase: 0, tableBase: 0,
        _abs: Math.abs,
        // Float version
        _acosf: Math.acos, _asinf: Math.asin, _atanf: Math.atan, _atan2f: Math.atan2,
        _ceilf: Math.ceil, _cosf: Math.cos, _expf: Math.exp, _floorf: Math.floor,
        _fmodf: (x: number, y: number) => x % y,
        _logf: Math.log, _log10f: Math.log10, _max_f: Math.max, _min_f: Math.min,
        _remainderf: (x: number, y: number) => x - Math.round(x / y) * y,
        _powf: Math.pow, _roundf: Math.fround, _sinf: Math.sin, _sqrtf: Math.sqrt, _tanf: Math.tan,
        _acoshf: Math.acosh, _asinhf: Math.asinh, _atanhf: Math.atanh,
        _coshf: Math.cosh, _sinhf: Math.sinh, _tanhf: Math.tanh,
        // Double version
        _acos: Math.acos, _asin: Math.asin, _atan: Math.atan, _atan2: Math.atan2,
        _ceil: Math.ceil, _cos: Math.cos, _exp: Math.exp, _floor: Math.floor,
        _fmod: (x: number, y: number) => x % y,
        _log: Math.log, _log10: Math.log10, _max_: Math.max, _min_: Math.min,
        _remainder: (x: number, y: number) => x - Math.round(x / y) * y,
        _pow: Math.pow, _round: Math.fround, _sin: Math.sin, _sqrt: Math.sqrt, _tan: Math.tan,
        _acosh: Math.acosh, _asinh: Math.asinh, _atanh: Math.atanh,
        _cosh: Math.cosh, _sinh: Math.sinh, _tanh: Math.tanh,
        table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
    }
});
export const createWasmMemory = (voicesIn: number, dspMeta: TDspMeta, effectMeta: TDspMeta, bufferSize: number) => {
    // Hack : at least 4 voices (to avoid weird wasm memory bug?)
    const voices = Math.max(4, voicesIn);
    // Memory allocator
    const ptrSize = 4;
    const sampleSize = 4;
    const pow2limit = (x: number) => {
        let n = 65536; // Minimum = 64 kB
        while (n < x) { n *= 2; }
        return n;
    };
    const effectSize = effectMeta ? effectMeta.size : 0;
    let memorySize = pow2limit(
        effectSize
        + dspMeta.size * voices
        + (dspMeta.inputs + dspMeta.outputs * 2)
        * (ptrSize + bufferSize * sampleSize)
    ) / 65536;
    memorySize = Math.max(2, memorySize); // As least 2
    return new WebAssembly.Memory({ initial: memorySize, maximum: memorySize });
};

export const args2String = (args: TFaustCompileArgs) => {
    let argStr = "";
    for (const key in args) {
        const arg = args[key];
        if (Array.isArray(arg)) arg.forEach((s: string) => argStr += key + " " + s + " ");
        else argStr += key + " " + arg + " ";
    }
    return argStr;
};

export const argsTbl2String = (args: string[]) => {
    let argStr = "";
    args.forEach( (item) => { argStr += item + " "} );
    return argStr;
};

export const toArgv = (args: TFaustCompileArgs) => {
    const argv: string[] = [];
    for (const key in args) {
        const arg = args[key];
        if (Array.isArray(arg)) arg.forEach((s: string) => argv.push(key, s));
        else if (typeof arg === "number") argv.push(key, arg.toString());
        else argv.push(key, arg);
    }
    return argv;
};
