"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mixer32_wasm_1 = require("./wasm/mixer32.wasm");
exports.ab2str = (buf) => (buf ? String.fromCharCode.apply(null, new Uint8Array(buf)) : null);
exports.str2ab = (str) => {
    if (!str)
        return null;
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
};
exports.atoUint6 = (nChr) => {
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
exports.atoab = (sBase64, nBlocksSize) => {
    if (typeof window.atob === "function")
        return exports.str2ab(atob(sBase64));
    const sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, "");
    const nInLen = sB64Enc.length;
    const nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
    const taBytes = new Uint8Array(nOutLen);
    for (let nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
        nMod4 = nInIdx & 3;
        nUint24 |= exports.atoUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
        if (nMod4 === 3 || nInLen - nInIdx === 1) {
            for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
            }
            nUint24 = 0;
        }
    }
    return taBytes.buffer;
};
exports.heap2Str = (buf) => {
    let str = "";
    let i = 0;
    while (buf[i] !== 0) {
        str += String.fromCharCode(buf[i++]);
    }
    return str;
};
exports.mixer32Module = new WebAssembly.Module(exports.atoab(mixer32_wasm_1.default.split(",")[1]));
exports.midiToFreq = (note) => 440.0 * Math.pow(2, ((note - 69) / 12));
exports.remap = (v, mn0, mx0, mn1, mx1) => (v - mn0) / (mx0 - mn0) * (mx1 - mn1) + mn1;
exports.findPath = (o, p) => {
    if (typeof o !== "object")
        return false;
    if (o.address) {
        return (o.address === p);
    }
    for (const k in o) {
        if (exports.findPath(o[k], p))
            return true;
    }
    return false;
};
exports.findPathClosure = () => {
    const findPath = (o, p) => {
        if (typeof o !== "object")
            return false;
        if (o.address) {
            return (o.address === p);
        }
        for (const k in o) {
            if (findPath(o[k], p))
                return true;
        }
        return false;
    };
    return findPath;
};
exports.createWasmImport = (voices, memory) => ({
    env: {
        memory: voices ? memory : undefined, memoryBase: 0, tableBase: 0,
        _abs: Math.abs,
        _acosf: Math.acos, _asinf: Math.asin, _atanf: Math.atan, _atan2f: Math.atan2,
        _ceilf: Math.ceil, _cosf: Math.cos, _expf: Math.exp, _floorf: Math.floor,
        _fmodf: (x, y) => x % y,
        _logf: Math.log, _log10f: Math.log10, _max_f: Math.max, _min_f: Math.min,
        _remainderf: (x, y) => x - Math.round(x / y) * y,
        _powf: Math.pow, _roundf: Math.fround, _sinf: Math.sin, _sqrtf: Math.sqrt, _tanf: Math.tan,
        _acoshf: Math.acosh, _asinhf: Math.asinh, _atanhf: Math.atanh,
        _coshf: Math.cosh, _sinhf: Math.sinh, _tanhf: Math.tanh,
        _acos: Math.acos, _asin: Math.asin, _atan: Math.atan, _atan2: Math.atan2,
        _ceil: Math.ceil, _cos: Math.cos, _exp: Math.exp, _floor: Math.floor,
        _fmod: (x, y) => x % y,
        _log: Math.log, _log10: Math.log10, _max_: Math.max, _min_: Math.min,
        _remainder: (x, y) => x - Math.round(x / y) * y,
        _pow: Math.pow, _round: Math.fround, _sin: Math.sin, _sqrt: Math.sqrt, _tan: Math.tan,
        _acosh: Math.acosh, _asinh: Math.asinh, _atanh: Math.atanh,
        _cosh: Math.cosh, _sinh: Math.sinh, _tanh: Math.tanh,
        table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
    }
});
exports.createWasmMemory = (voicesIn, dspMeta, effectMeta, bufferSize) => {
    const voices = Math.max(4, voicesIn);
    const ptrSize = 4;
    const sampleSize = 4;
    const pow2limit = (x) => {
        let n = 65536;
        while (n < x) {
            n *= 2;
        }
        return n;
    };
    const effectSize = effectMeta ? effectMeta.size : 0;
    let memorySize = pow2limit(effectSize
        + dspMeta.size * voices
        + (dspMeta.inputs + dspMeta.outputs * 2)
            * (ptrSize + bufferSize * sampleSize)) / 65536;
    memorySize = Math.max(2, memorySize);
    return new WebAssembly.Memory({ initial: memorySize, maximum: memorySize });
};
exports.args2String = (args) => {
    let argStr = "";
    for (const key in args) {
        const arg = args[key];
        if (Array.isArray(arg))
            arg.forEach((s) => argStr += key + " " + s + " ");
        else
            argStr += key + " " + arg + " ";
    }
    return argStr;
};
exports.argsTbl2String = (args) => {
    let argStr = "";
    args.forEach((item) => { argStr += item + " "; });
    return argStr;
};
exports.toArgv = (args) => {
    const argv = [];
    for (const key in args) {
        const arg = args[key];
        if (Array.isArray(arg))
            arg.forEach((s) => argv.push(key, s));
        else if (typeof arg === "number")
            argv.push(key, arg.toString());
        else
            argv.push(key, arg);
    }
    return argv;
};
//# sourceMappingURL=utils.js.map