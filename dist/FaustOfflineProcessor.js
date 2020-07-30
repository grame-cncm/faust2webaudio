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
class FaustOfflineProcessor {
    constructor() {
        this.bufferSize = 1024;
    }
    static get importObject() {
        return {
            env: {
                memory: undefined, memoryBase: 0, tableBase: 0,
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
        };
    }
    init(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { compiledDsp } = options;
            if (!compiledDsp)
                throw new Error("No Dsp input");
            this.dspMeta = compiledDsp.dspMeta;
            this.$ins = null;
            this.$outs = null;
            this.dspInChannnels = [];
            this.dspOutChannnels = [];
            this.numIn = this.dspMeta.inputs;
            this.numOut = this.dspMeta.outputs;
            this.ptrSize = 4;
            this.sampleSize = 4;
            const dspInstance = yield WebAssembly.instantiate(compiledDsp.dspModule, FaustOfflineProcessor.importObject);
            this.factory = dspInstance.exports;
            this.HEAP = this.factory.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);
            this.output = new Array(this.numOut).fill(null).map(() => new Float32Array(this.bufferSize));
        });
    }
    setup(options) {
        if (!this.dspMeta)
            throw new Error("No Dsp");
        this.sampleRate = options && options.sampleRate || 48000;
        this.$audioHeap = this.dspMeta.size;
        this.$$audioHeapInputs = this.$audioHeap;
        this.$$audioHeapOutputs = this.$$audioHeapInputs + this.numIn * this.ptrSize;
        this.$audioHeapInputs = this.$$audioHeapOutputs + (this.numOut * this.ptrSize);
        this.$audioHeapOutputs = this.$audioHeapInputs + (this.numIn * this.bufferSize * this.sampleSize);
        this.$dsp = 0;
        if (this.numIn > 0) {
            this.$ins = this.$$audioHeapInputs;
            for (let i = 0; i < this.numIn; i++) {
                this.HEAP32[(this.$ins >> 2) + i] = this.$audioHeapInputs + this.bufferSize * this.sampleSize * i;
            }
            const dspInChans = this.HEAP32.subarray(this.$ins >> 2, (this.$ins + this.numIn * this.ptrSize) >> 2);
            for (let i = 0; i < this.numIn; i++) {
                this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + this.bufferSize * this.sampleSize) >> 2);
            }
        }
        if (this.numOut > 0) {
            this.$outs = this.$$audioHeapOutputs;
            for (let i = 0; i < this.numOut; i++) {
                this.HEAP32[(this.$outs >> 2) + i] = this.$audioHeapOutputs + this.bufferSize * this.sampleSize * i;
            }
            const dspOutChans = this.HEAP32.subarray(this.$outs >> 2, (this.$outs + this.numOut * this.ptrSize) >> 2);
            for (let i = 0; i < this.numOut; i++) {
                this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + this.bufferSize * this.sampleSize) >> 2);
            }
        }
        this.factory.init(this.$dsp, this.sampleRate);
    }
    compute() {
        if (!this.factory)
            return this.output;
        for (let i = 0; i < this.numIn; i++) {
            this.dspInChannnels[i].fill(0);
        }
        this.factory.compute(this.$dsp, this.bufferSize, this.$ins, this.$outs);
        if (this.output !== undefined) {
            for (let i = 0; i < this.numOut; i++) {
                this.output[i].set(this.dspOutChannnels[i]);
            }
        }
        return this.output;
    }
    plot(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (options && options.compiledDsp)
                yield this.init(options);
            this.setup(options);
            const size = options && options.size || 128;
            const plotted = new Array(this.numOut).fill(null).map(() => new Float32Array(size));
            for (let i = 0; i < size; i += this.bufferSize) {
                const computed = this.compute();
                for (let j = 0; j < plotted.length; j++) {
                    plotted[j].set(size - i > this.bufferSize ? computed[j] : computed[j].subarray(0, size - i), i);
                }
            }
            return plotted;
        });
    }
}
exports.FaustOfflineProcessor = FaustOfflineProcessor;
//# sourceMappingURL=FaustOfflineProcessor.js.map