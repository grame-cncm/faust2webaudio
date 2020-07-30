(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Faust2WebAudio"] = factory();
	else
		root["Faust2WebAudio"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/crypto-libraries/sha1.js":
/*!***********************************************!*\
  !*** ./node_modules/crypto-libraries/sha1.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* SHA-1 (FIPS 180-4) implementation in JavaScript                    (c) Chris Veness 2002-2019  */
/*                                                                                   MIT Licence  */
/* www.movable-type.co.uk/scripts/sha1.html                                                       */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


/**
 * SHA-1 hash function reference implementation.
 *
 * This is an annotated direct implementation of FIPS 180-4, without any optimisations. It is
 * intended to aid understanding of the algorithm rather than for production use.
 *
 * While it could be used where performance is not critical, I would recommend using the ‘Web
 * Cryptography API’ (developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest) for the browser,
 * or the ‘crypto’ library (nodejs.org/api/crypto.html#crypto_class_hash) in Node.js.
 *
 * See csrc.nist.gov/groups/ST/toolkit/secure_hashing.html
 *     csrc.nist.gov/groups/ST/toolkit/examples.html
 */
class Sha1 {

    /**
     * Generates SHA-1 hash of string.
     *
     * @param   {string} msg - (Unicode) string to be hashed.
     * @param   {Object} [options]
     * @param   {string} [options.msgFormat=string] - Message format: 'string' for JavaScript string
     *   (gets converted to UTF-8 for hashing); 'hex-bytes' for string of hex bytes ('616263' ≡ 'abc') .
     * @param   {string} [options.outFormat=hex] - Output format: 'hex' for string of contiguous
     *   hex bytes; 'hex-w' for grouping hex bytes into groups of (4 byte / 8 character) words.
     * @returns {string} Hash of msg as hex character string.
     *
     * @example
     *   import Sha1 from './sha1.js';
     *   const hash = Sha1.hash('abc'); // 'a9993e364706816aba3e25717850c26c9cd0d89d'
     */
    static hash(msg, options) {
        const defaults = { msgFormat: 'string', outFormat: 'hex' };
        const opt = Object.assign(defaults, options);

        switch (opt.msgFormat) {
            default: // default is to convert string to UTF-8, as SHA only deals with byte-streams
            case 'string':   msg = utf8Encode(msg);       break;
            case 'hex-bytes':msg = hexBytesToString(msg); break; // mostly for running tests
        }

        // constants [§4.2.1]
        const K = [ 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6 ];

        // initial hash value [§5.3.1]
        const H = [ 0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0 ];

        // PREPROCESSING [§6.1.1]

        msg += String.fromCharCode(0x80);  // add trailing '1' bit (+ 0's padding) to string [§5.1.1]

        // convert string msg into 512-bit/16-integer blocks arrays of ints [§5.2.1]
        const l = msg.length/4 + 2; // length (in 32-bit integers) of msg + ‘1’ + appended length
        const N = Math.ceil(l/16);  // number of 16-integer-blocks required to hold 'l' ints
        const M = new Array(N);

        for (let i=0; i<N; i++) {
            M[i] = new Array(16);
            for (let j=0; j<16; j++) {  // encode 4 chars per integer, big-endian encoding
                M[i][j] = (msg.charCodeAt(i*64+j*4+0)<<24) | (msg.charCodeAt(i*64+j*4+1)<<16)
                        | (msg.charCodeAt(i*64+j*4+2)<< 8) | (msg.charCodeAt(i*64+j*4+3)<< 0);
            } // note running off the end of msg is ok 'cos bitwise ops on NaN return 0
        }
        // add length (in bits) into final pair of 32-bit integers (big-endian) [§5.1.1]
        // note: most significant word would be (len-1)*8 >>> 32, but since JS converts
        // bitwise-op args to 32 bits, we need to simulate this by arithmetic operators
        M[N-1][14] = ((msg.length-1)*8) / Math.pow(2, 32); M[N-1][14] = Math.floor(M[N-1][14]);
        M[N-1][15] = ((msg.length-1)*8) & 0xffffffff;

        // HASH COMPUTATION [§6.1.2]

        for (let i=0; i<N; i++) {
            const W = new Array(80);

            // 1 - prepare message schedule 'W'
            for (let t=0;  t<16; t++) W[t] = M[i][t];
            for (let t=16; t<80; t++) W[t] = Sha1.ROTL(W[t-3] ^ W[t-8] ^ W[t-14] ^ W[t-16], 1);

            // 2 - initialise five working variables a, b, c, d, e with previous hash value
            let a = H[0], b = H[1], c = H[2], d = H[3], e = H[4];

            // 3 - main loop (use JavaScript '>>> 0' to emulate UInt32 variables)
            for (let t=0; t<80; t++) {
                const s = Math.floor(t/20); // seq for blocks of 'f' functions and 'K' constants
                const T = (Sha1.ROTL(a, 5) + Sha1.f(s, b, c, d) + e + K[s] + W[t]) >>> 0;
                e = d;
                d = c;
                c = Sha1.ROTL(b, 30) >>> 0;
                b = a;
                a = T;
            }

            // 4 - compute the new intermediate hash value (note 'addition modulo 2^32' – JavaScript
            // '>>> 0' coerces to unsigned UInt32 which achieves modulo 2^32 addition)
            H[0] = (H[0]+a) >>> 0;
            H[1] = (H[1]+b) >>> 0;
            H[2] = (H[2]+c) >>> 0;
            H[3] = (H[3]+d) >>> 0;
            H[4] = (H[4]+e) >>> 0;
        }

        // convert H0..H4 to hex strings (with leading zeros)
        for (let h=0; h<H.length; h++) H[h] = ('00000000'+H[h].toString(16)).slice(-8);

        // concatenate H0..H4, with separator if required
        const separator = opt.outFormat=='hex-w' ? ' ' : '';

        return H.join(separator);

        /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

        function utf8Encode(str) {
            try {
                return new TextEncoder().encode(str, 'utf-8').reduce((prev, curr) => prev + String.fromCharCode(curr), '');
            } catch (e) { // no TextEncoder available?
                return unescape(encodeURIComponent(str)); // monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
            }
        }

        function hexBytesToString(hexStr) { // convert string of hex numbers to a string of chars (eg '616263' -> 'abc').
            const str = hexStr.replace(' ', ''); // allow space-separated groups
            return str=='' ? '' : str.match(/.{2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
        }
    }


    /**
     * Function 'f' [§4.1.1].
     * @private
     */
    static f(s, x, y, z)  {
        switch (s) {
            case 0: return (x & y) ^ (~x & z);          // Ch()
            case 1: return  x ^ y  ^  z;                // Parity()
            case 2: return (x & y) ^ (x & z) ^ (y & z); // Maj()
            case 3: return  x ^ y  ^  z;                // Parity()
        }
    }


    /**
     * Rotates left (circular left shift) value x by n positions [§3.2.5].
     * @private
     */
    static ROTL(x, n) {
        return (x<<n) | (x>>>(32-n));
    }

}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/* harmony default export */ __webpack_exports__["default"] = (Sha1);


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/Faust.ts":
/*!**********************!*\
  !*** ./src/Faust.ts ***!
  \**********************/
/*! exports provided: Faust */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faust", function() { return Faust; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto_libraries_sha1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-libraries/sha1 */ "./node_modules/crypto-libraries/sha1.js");
/* harmony import */ var _FaustWasmToScriptProcessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FaustWasmToScriptProcessor */ "./src/FaustWasmToScriptProcessor.ts");
/* harmony import */ var _FaustAudioWorkletProcessor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FaustAudioWorkletProcessor */ "./src/FaustAudioWorkletProcessor.ts");
/* harmony import */ var _FaustAudioWorkletNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FaustAudioWorkletNode */ "./src/FaustAudioWorkletNode.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _FaustOfflineProcessor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FaustOfflineProcessor */ "./src/FaustOfflineProcessor.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable no-console */






// import * as Binaryen from "binaryen";
///<reference path="libfaust.d.ts"/>

/**
 * Main Faust class,
 * usage: `new Faust().ready.then(faust => any);`
 *
 * @export
 * @class Faust
 */
class Faust {
  /**
   * The libfaust Wasm Emscripten Module
   *
   * @private
   * @type {LibFaust}
   * @memberof Faust
   */
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

  /**
   * An object to storage compiled dsp with it's sha1
   *
   * @private
   * @type {{ [shaKey: string]: TCompiledDsp }}
   * @memberof Faust
   */

  /**
   * Registered WorkletProcessor names
   *
   * @private
   * @type {string[]}
   * @memberof Faust
   */

  /**
   * Offline processor used to plot
   *
   * @private
   * @type {FaustOfflineProcessor}
   * @memberof Faust
   */

  /**
   * Location of `libfaust-wasm.wasm`
   *
   * @private
   * @type {string}
   * @memberof Faust
   */

  /**
   * Location of `libfaust-wasm.data`
   *
   * @private
   * @type {string}
   * @memberof Faust
   */

  /**
   * Creates an instance of Faust
   * usage: `new Faust().ready.then(faust => any);`
   *
   * @param {{ debug?: boolean; wasmLocation?: string; dataLocation?: string }} [options]
   * @memberof Faust
   */
  constructor(debug, lib) {
    this.libFaust = void 0;
    this.debug = false;
    this.dspTable = {};
    this.workletProcessors = [];
    this._log = [];
    this.offlineProcessor = new _FaustOfflineProcessor__WEBPACK_IMPORTED_MODULE_8__["FaustOfflineProcessor"]();
    this.wasmLocation = void 0;
    this.dataLocation = void 0;
    this.logHandler = void 0;
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


  getNode(code, optionsIn) {
    var _this = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var audioCtx, voices, useWorklet, bufferSize, plotHandler, args, argv, compiledDsp, options;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              audioCtx = optionsIn.audioCtx, voices = optionsIn.voices, useWorklet = optionsIn.useWorklet, bufferSize = optionsIn.bufferSize, plotHandler = optionsIn.plotHandler, args = optionsIn.args;
              argv = _utils__WEBPACK_IMPORTED_MODULE_7__["toArgv"](args);
              _context.next = 4;
              return _this.compileCodes(code, argv, !voices);

            case 4:
              compiledDsp = _context.sent;

              if (compiledDsp) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", null);

            case 7:
              options = {
                compiledDsp,
                audioCtx,
                voices,
                plotHandler,
                bufferSize: useWorklet ? 128 : bufferSize
              };
              return _context.abrupt("return", useWorklet ? _this.getAudioWorkletNode(options) : _this.getScriptProcessorNode(options));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
  /**
   * Get DSP information
   *
   * @param {string} code
   * @param {{ voices?: number; args?: TFaustCompileArgs }} optionsIn
   * @returns {Promise<TCompiledDsp>}
   * @memberof Faust
   */


  inspect(code, optionsIn) {
    var _this2 = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var voices, args, argv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              voices = optionsIn.voices, args = optionsIn.args;
              argv = _utils__WEBPACK_IMPORTED_MODULE_7__["toArgv"](args);
              return _context2.abrupt("return", _this2.compileCodes(code, argv, !voices));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
  /**
   * Plot a dsp offline.
   *
   * @param {{ code?: string; size?: number; sampleRate?: number; args?: TFaustCompileArgs }} [optionsIn]
   * @returns {Promise<Float32Array[]>}
   * @memberof Faust
   */


  plot(optionsIn) {
    var _this3 = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var compiledDsp, argv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              argv = _utils__WEBPACK_IMPORTED_MODULE_7__["toArgv"](optionsIn.args);

              if (!optionsIn.code) {
                _context3.next = 7;
                break;
              }

              _context3.next = 4;
              return _this3.compileCodes(optionsIn.code, argv, true);

            case 4:
              compiledDsp = _context3.sent;

              if (compiledDsp) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", null);

            case 7:
              return _context3.abrupt("return", _this3.offlineProcessor.plot(_objectSpread({
                compiledDsp
              }, optionsIn)));

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
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


  compileCode(factoryName, code, argvIn, internalMemory) {
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
    var argsStr = _utils__WEBPACK_IMPORTED_MODULE_7__["argsTbl2String"](argvIn) + " -cn " + factoryName;

    try {
      var time1 = performance.now();
      var fact = this.libFaust.createDSPFactory("FaustDSP", code, argsStr, internalMemory);
      var time2 = performance.now();
      this.log("Faust compilation duration : " + (time2 - time1));
      if (fact.error) throw new Error(fact.error);
      if (fact.module === 0) return null;
      var wasm = this.libFaust.getWasmModule(fact.module);
      this.log("getWasmModule " + wasm.module); // Copy native 'binary' string in JavaScript Uint8Array

      var size = wasm.data.size();
      var ui8Code = new Uint8Array(size);
      this.log("copy " + size);

      for (var i = 0; i < size; i++) {
        ui8Code[i] = wasm.data.get(i);
      } // Free C allocated wasm module
      // this.log("freeWasmModule " + wasm.module);
      // this.libFaust.freeWasmModule(wasm.module);
      // this.log("freeWasmModule done");


      return {
        ui8Code,
        code,
        helpersCode: wasm.helper
      }; // const time1 = performance.now();
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
      var errorMsg = this.libFaust.getErrorAfterException();
      this.libFaust.cleanupAfterException(); // Report the Emscripten error

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


  compileCodes(code, argv, internalMemory) {
    var _this4 = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var strArgv, shaKey, compiledDsp, effectCode, dspCompiledCode, effectCompiledCode, compiledCodes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // Code memory type and argv in the SHAKey to differentiate compilation flags and Monophonic and Polyphonic factories
              strArgv = argv.join("");
              shaKey = crypto_libraries_sha1__WEBPACK_IMPORTED_MODULE_3__["default"].hash(code + (internalMemory ? "internal_memory" : "external_memory") + strArgv, {
                msgFormat: "string"
              });
              compiledDsp = _this4.dspTable[shaKey];

              if (!compiledDsp) {
                _context4.next = 6;
                break;
              }

              _this4.log("Existing library : " + shaKey); // Existing factory, do not create it...


              return _context4.abrupt("return", compiledDsp);

            case 6:
              // this.log("libfaust.js version : " + this.getLibFaustVersion());
              _this4.log("libfaust.js version : " + _this4.libFaust.version()); // Create 'effect' expression


              effectCode = "adapt(1,1) = _; adapt(2,2) = _,_; adapt(1,2) = _ <: _,_; adapt(2,1) = _,_ :> _;\nadaptor(F,G) = adapt(outputs(F),inputs(G));\ndsp_code = environment{".concat(code, "};\nprocess = adaptor(dsp_code.process, dsp_code.effect) : dsp_code.effect;");
              dspCompiledCode = _this4.compileCode(shaKey, code, argv, internalMemory);

              try {
                effectCompiledCode = _this4.compileCode(shaKey + "_", effectCode, argv, internalMemory);
              } catch (e) {} // eslint-disable-line no-empty


              compiledCodes = {
                dsp: dspCompiledCode,
                effect: effectCompiledCode
              };
              return _context4.abrupt("return", _this4.compileDsp(compiledCodes, shaKey));

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
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


  expandCode(code, args) {
    this.log("libfaust.js version : " + this.libFaust.version()); // Allocate strings on the HEAP
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

    var argsStr = _utils__WEBPACK_IMPORTED_MODULE_7__["args2String"](args) + "-lang wasm"; // Prepare 'argv' array for C side
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
      var expand = this.libFaust.expandDSP("FaustDSP", code, argsStr);
      var expandedCode = expand.dsp;
      var errorMsg = expand.error;
      if (errorMsg) this.error(errorMsg); // const $expandedCode = this.expandCDSPFromString($name, $code, argv.length, $argv, $shaKey, $errorMsg);
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
      var _errorMsg = this.libFaust.getErrorAfterException();

      this.libFaust.cleanupAfterException(); // const errorMsg = this.libFaust.UTF8ToString(this.getErrorAfterException());
      // this.cleanupAfterException();
      // Report the Emscripten error

      throw _errorMsg ? new Error(_errorMsg) : e;
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


  compileDsp(codes, shaKey) {
    var _this5 = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
      var time1, dspModule, time2, compiledDsp, json, meta, effectModule, _json, _meta;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              time1 = performance.now();
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

              _context5.next = 3;
              return WebAssembly.compile(codes.dsp.ui8Code);

            case 3:
              dspModule = _context5.sent;

              if (dspModule) {
                _context5.next = 7;
                break;
              }

              _this5.error("Faust DSP factory cannot be compiled");

              throw new Error("Faust DSP factory cannot be compiled");

            case 7:
              time2 = performance.now();

              _this5.log("WASM compilation duration : " + (time2 - time1));

              compiledDsp = {
                shaKey,
                codes,
                dspModule,
                dspMeta: undefined
              }; // Default mode
              // 'libfaust.js' wasm backend generates UI methods, then we compile the code
              // eval(helpers_code1);
              // factory.getJSON = eval("getJSON" + dspName);
              // factory.getBase64Code = eval("getBase64Code" + dspName);

              _context5.prev = 10;
              json = codes.dsp.helpersCode.match(/getJSON\w+?\(\)[\s\n]*{[\s\n]*return[\s\n]*'(\{.+?)';}/)[1].replace(/\\'/g, "'"); // const base64Code = codes.dsp.helpersCode.match(/getBase64Code\w+?\(\)[\s\n]*{[\s\n]*return[\s\n]*"([A-Za-z0-9+/=]+?)";[\s\n]+}/)[1];

              meta = JSON.parse(json);
              compiledDsp.dspMeta = meta;
              _context5.next = 20;
              break;

            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](10);

              _this5.error("Error in JSON.parse: " + _context5.t0.message);

              throw _context5.t0;

            case 20:
              _this5.dspTable[shaKey] = compiledDsp; // Possibly compile effect

              if (codes.effect) {
                _context5.next = 23;
                break;
              }

              return _context5.abrupt("return", compiledDsp);

            case 23:
              _context5.prev = 23;
              _context5.next = 26;
              return WebAssembly.compile(codes.effect.ui8Code);

            case 26:
              effectModule = _context5.sent;
              compiledDsp.effectModule = effectModule; // 'libfaust.js' wasm backend generates UI methods, then we compile the code
              // eval(helpers_code2);
              // factory.getJSONeffect = eval("getJSON" + factory_name2);
              // factory.getBase64Codeeffect = eval("getBase64Code" + factory_name2);

              _context5.prev = 28;
              _json = codes.effect.helpersCode.match(/getJSON\w+?\(\)[\s\n]*{[\s\n]*return[\s\n]*'(\{.+?)';}/)[1].replace(/\\'/g, "'"); // const base64Code = codes.effect.helpersCode.match(/getBase64Code\w+?\(\)[\s\n]*{[\s\n]*return[\s\n]*"([A-Za-z0-9+/=]+?)";[\s\n]+}/)[1];

              _meta = JSON.parse(_json);
              compiledDsp.effectMeta = _meta;
              _context5.next = 38;
              break;

            case 34:
              _context5.prev = 34;
              _context5.t1 = _context5["catch"](28);

              _this5.error("Error in JSON.parse: " + _context5.t1.message);

              throw _context5.t1;

            case 38:
              _context5.next = 43;
              break;

            case 40:
              _context5.prev = 40;
              _context5.t2 = _context5["catch"](23);
              return _context5.abrupt("return", compiledDsp);

            case 43:
              return _context5.abrupt("return", compiledDsp);

            case 44:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[10, 16], [23, 40], [28, 34]]);
    }))();
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


  getScriptProcessorNode(optionsIn) {
    var _this6 = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", new _FaustWasmToScriptProcessor__WEBPACK_IMPORTED_MODULE_4__["FaustWasmToScriptProcessor"](_this6).getNode(optionsIn));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  } // deleteDSPInstance() {}

  /**
   * Get a AudioWorkletNode from compiled dsp
   *
   * @private
   * @param {TAudioNodeOptions} optionsIn
   * @returns {Promise<FaustAudioWorkletNode>}
   * @memberof Faust
   */


  getAudioWorkletNode(optionsIn) {
    var _this7 = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
      var compiledDspWithCodes, audioCtx, voices, plotHandler, compiledDsp, id, strProcessor, url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              compiledDspWithCodes = optionsIn.compiledDsp, audioCtx = optionsIn.audioCtx, voices = optionsIn.voices, plotHandler = optionsIn.plotHandler;
              compiledDsp = _objectSpread({}, compiledDspWithCodes);
              delete compiledDsp.codes;
              id = compiledDsp.shaKey + "_" + voices;

              if (!(_this7.workletProcessors.indexOf(id) === -1)) {
                _context7.next = 10;
                break;
              }

              strProcessor = "\nconst remap = ".concat(_utils__WEBPACK_IMPORTED_MODULE_7__["remap"].toString(), ";\nconst midiToFreq = ").concat(_utils__WEBPACK_IMPORTED_MODULE_7__["midiToFreq"].toString(), ";\nconst findPath = (").concat(_utils__WEBPACK_IMPORTED_MODULE_7__["findPathClosure"].toString(), ")();\nconst createWasmImport = ").concat(_utils__WEBPACK_IMPORTED_MODULE_7__["createWasmImport"].toString(), ";\nconst createWasmMemory = ").concat(_utils__WEBPACK_IMPORTED_MODULE_7__["createWasmMemory"].toString(), ";\nconst faustData = ").concat(JSON.stringify({
                id,
                voices,
                dspMeta: compiledDsp.dspMeta,
                effectMeta: compiledDsp.effectMeta
              }), ";\n(").concat(_FaustAudioWorkletProcessor__WEBPACK_IMPORTED_MODULE_5__["FaustAudioWorkletProcessorWrapper"].toString(), ")();\n");
              url = window.URL.createObjectURL(new Blob([strProcessor], {
                type: "text/javascript"
              }));
              _context7.next = 9;
              return audioCtx.audioWorklet.addModule(url);

            case 9:
              _this7.workletProcessors.push(id);

            case 10:
              return _context7.abrupt("return", new _FaustAudioWorkletNode__WEBPACK_IMPORTED_MODULE_6__["FaustAudioWorkletNode"]({
                audioCtx,
                id,
                voices,
                compiledDsp,
                plotHandler,
                mixer32Module: _utils__WEBPACK_IMPORTED_MODULE_7__["mixer32Module"]
              }));

            case 11:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  }
  /**
   * Remove a DSP from registry
   *
   * @private
   * @param {TCompiledDsp} compiledDsp
   * @memberof Faust
   */


  deleteDsp(compiledDsp) {
    // The JS side is cleared
    delete this.dspTable[compiledDsp.shaKey]; // The native C++ is cleared each time (freeWasmCModule has been already called in faust.compile)

    this.libFaust.deleteAllDSPFactories(); // this.deleteAllWasmCDSPFactories();
  }
  /**
   * Stringify current storaged DSP Table.
   *
   * @returns {string}
   * @memberof Faust
   */


  stringifyDspTable() {
    var strTable = {};

    for (var key in this.dspTable) {
      var codes = this.dspTable[key].codes;
      strTable[key] = {
        dsp: {
          strCode: btoa(_utils__WEBPACK_IMPORTED_MODULE_7__["ab2str"](codes.dsp.ui8Code)),
          code: codes.dsp.code,
          helpersCode: codes.dsp.helpersCode
        },
        effect: codes.effect ? {
          strCode: btoa(_utils__WEBPACK_IMPORTED_MODULE_7__["ab2str"](codes.effect.ui8Code)),
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


  parseDspTable(str) {
    var _this8 = this;

    var strTable = JSON.parse(str);

    var _loop = function _loop(_shaKey) {
      if (_this8.dspTable[_shaKey]) return "continue";
      var strCodes = strTable[_shaKey];
      var compiledCodes = {
        dsp: {
          ui8Code: _utils__WEBPACK_IMPORTED_MODULE_7__["str2ab"](atob(strCodes.dsp.strCode)),
          code: strCodes.dsp.code,
          helpersCode: strCodes.dsp.helpersCode
        },
        effect: strCodes.effect ? {
          ui8Code: _utils__WEBPACK_IMPORTED_MODULE_7__["str2ab"](atob(strCodes.effect.strCode)),
          code: strCodes.effect.code,
          helpersCode: strCodes.effect.helpersCode
        } : undefined
      };

      _this8.compileDsp(compiledCodes, _shaKey).then(dsp => _this8.dspTable[_shaKey] = dsp);
    };

    for (var _shaKey in strTable) {
      var _ret = _loop(_shaKey);

      if (_ret === "continue") continue;
    }
  } // deleteDSPWorkletInstance() {}

  /**
   * Get an SVG Diagram XML File as string
   *
   * @param {string} code faust source code
   * @param {TFaustCompileArgs} args - Paramaters to be given to the Faust compiler
   * @returns {string} svg file as string
   * @memberof Faust
   */


  getDiagram(code, args) {
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
    var argsStr = _utils__WEBPACK_IMPORTED_MODULE_7__["args2String"](args) + "-lang wasm -o /dev/null -svg";

    try {
      var aux = this.libFaust.generateAuxFiles("FaustDSP", code, argsStr); // this.generateCAuxFilesFromString($name, $code, argv.length, $argv, $errorMsg);
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
      var errorMsg = this.libFaust.getErrorAfterException();
      this.libFaust.cleanupAfterException(); // Report the Emscripten error

      throw errorMsg ? new Error(errorMsg) : e;
    }

    return this.libFaust.FS.readFile("FaustDSP-svg/process.svg", {
      encoding: "utf8"
    });
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

  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (this.debug) console.log(...args);
    var msg = args.length === 1 && typeof args[0] === "string" ? args[0] : JSON.stringify(args.length !== 1 ? args : args[0]);

    this._log.push(msg);

    if (typeof this.logHandler === "function") this.logHandler(msg, 0);
  }

  error() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    console.error(...args);
    var msg = args.length === 1 && typeof args[0] === "string" ? args[0] : JSON.stringify(args.length !== 1 ? args : args[0]);

    this._log.push(msg);

    if (typeof this.logHandler === "function") this.logHandler(msg, 1);
  }

}

/***/ }),

/***/ "./src/FaustAudioWorkletNode.ts":
/*!**************************************!*\
  !*** ./src/FaustAudioWorkletNode.ts ***!
  \**************************************/
/*! exports provided: FaustAudioWorkletNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaustAudioWorkletNode", function() { return FaustAudioWorkletNode; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable object-curly-newline */

/* eslint-disable object-property-newline */

class FaustAudioWorkletNode extends (window.AudioWorkletNode ? AudioWorkletNode : null) {
  /* WAP ??
  getMetadata = this.getJSON;
  setParam = this.setParamValue;
  getParam = this.getParamValue;
  inputChannelCount = this.getNumInputs;
  outputChannelCount = this.getNumOutputs;
  getParams = () => this.inputsItems;
  getDescriptor = this.getParams;
  onMidi = this.midiMessage;
  getState = async () => {
      const params = {} as { [key: string]: string };
      this.getDescriptor().forEach(key => params[key] = JSON.stringify(this.getParam(key)));
      return params;
  }
  setState = async (state: { [key: string]: number; }) => {
      for (const key in state) {
          this.setParam(key, state[key]);
      }
      try {
          this.gui.setAttribute("state", JSON.stringify(state));
      } catch (error) {
          console.warn("Plugin without gui or GUI not defined: ", error);
      }
      return state;
  }
  setPatch = (patch: any) => this.presets ? this.setState(this.presets[patch]) : undefined; // ??
  metadata = (handler: (...args: any[]) => any) => handler(null);
  gui: any;
  presets: any;
  */
  constructor(options) {
    super(options.audioCtx, options.id, {
      numberOfInputs: options.compiledDsp.dspMeta.inputs > 0 ? 1 : 0,
      numberOfOutputs: options.compiledDsp.dspMeta.outputs > 0 ? 1 : 0,
      channelCount: Math.max(1, options.compiledDsp.dspMeta.inputs),
      outputChannelCount: [options.compiledDsp.dspMeta.outputs],
      channelCountMode: "explicit",
      channelInterpretation: "speakers",
      processorOptions: {
        id: options.id,
        voices: options.voices,
        compiledDsp: options.compiledDsp,
        mixer32Module: options.mixer32Module
      }
    }); // Patch it with additional functions

    this.onprocessorerror = e => {
      console.error("Error from " + this.dspMeta.name + " AudioWorkletNode: "); // eslint-disable-line no-console

      throw e.error;
    };

    this.voices = void 0;
    this.dspMeta = void 0;
    this.effectMeta = void 0;
    this.outputHandler = void 0;
    this.inputsItems = void 0;
    this.outputsItems = void 0;
    this.fPitchwheelLabel = void 0;
    this.fCtrlLabel = void 0;
    this.plotHandler = void 0;

    this.port.onmessage = e => {
      if (e.data.type === "param" && this.outputHandler) {
        this.outputHandler(e.data.path, e.data.value);
      } else if (e.data.type === "plot") {
        if (this.plotHandler) this.plotHandler(e.data.value, e.data.index, e.data.events);
      }
    };

    this.voices = options.voices;
    this.dspMeta = options.compiledDsp.dspMeta;
    this.effectMeta = options.compiledDsp.effectMeta;
    this.outputHandler = null;
    this.inputsItems = [];
    this.outputsItems = [];
    this.fPitchwheelLabel = [];
    this.fCtrlLabel = new Array(128).fill(null).map(() => []);
    this.plotHandler = options.plotHandler;
    this.parseUI(this.dspMeta.ui);
    if (this.effectMeta) this.parseUI(this.effectMeta.ui);

    try {
      if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
    } catch (e) {} // eslint-disable-line no-empty

  }

  parseUI(ui) {
    ui.forEach(group => this.parseGroup(group));
  }

  parseGroup(group) {
    if (group.items) this.parseItems(group.items);
  }

  parseItems(items) {
    items.forEach(item => this.parseItem(item));
  }

  parseItem(item) {
    if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
      this.parseItems(item.items);
    } else if (item.type === "hbargraph" || item.type === "vbargraph") {
      // Keep bargraph adresses
      this.outputsItems.push(item.address);
    } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
      // Keep inputs adresses
      this.inputsItems.push(item.address);
      if (!item.meta) return;
      item.meta.forEach(meta => {
        var midi = meta.midi;
        if (!midi) return;
        var strMidi = midi.trim();

        if (strMidi === "pitchwheel") {
          this.fPitchwheelLabel.push({
            path: item.address,
            min: item.min,
            max: item.max
          });
        } else {
          var matched = strMidi.match(/^ctrl\s(\d+)/);
          if (!matched) return;
          this.fCtrlLabel[parseInt(matched[1])].push({
            path: item.address,
            min: item.min,
            max: item.max
          });
        }
      });
    }
  }
  /**
   * Instantiates a new polyphonic voice.
   *
   * @param {number} channel - the MIDI channel (0..15, not used for now)
   * @param {number} pitch - the MIDI pitch (0..127)
   * @param {number} velocity - the MIDI velocity (0..127)
   * @memberof FaustAudioWorkletNode
   */


  keyOn(channel, pitch, velocity) {
    var e = {
      type: "keyOn",
      data: [channel, pitch, velocity]
    };
    this.port.postMessage(e);
  }
  /**
   * De-instantiates a polyphonic voice.
   *
   * @param {number} channel - the MIDI channel (0..15, not used for now)
   * @param {number} pitch - the MIDI pitch (0..127)
   * @param {number} velocity - the MIDI velocity (0..127)
   * @memberof FaustAudioWorkletNode
   */


  keyOff(channel, pitch, velocity) {
    var e = {
      type: "keyOff",
      data: [channel, pitch, velocity]
    };
    this.port.postMessage(e);
  }
  /**
   * Gently terminates all the active voices.
   *
   * @memberof FaustAudioWorkletNode
   */


  allNotesOff() {
    var e = {
      type: "ctrlChange",
      data: [0, 123, 0]
    };
    this.port.postMessage(e);
  }

  ctrlChange(channel, ctrlIn, valueIn) {
    var e = {
      type: "ctrlChange",
      data: [channel, ctrlIn, valueIn]
    };
    this.port.postMessage(e);
    if (!this.fCtrlLabel[ctrlIn].length) return;
    this.fCtrlLabel[ctrlIn].forEach(ctrl => {
      var path = ctrl.path;
      var value = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["remap"])(valueIn, 0, 127, ctrl.min, ctrl.max);
      var param = this.parameters.get(path);
      if (param) param.setValueAtTime(value, this.context.currentTime);
    });
  }

  pitchWheel(channel, wheel) {
    var e = {
      type: "pitchWheel",
      data: [channel, wheel]
    };
    this.port.postMessage(e);
    this.fPitchwheelLabel.forEach(pw => {
      var path = pw.path;
      var value = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["remap"])(wheel, 0, 16383, pw.min, pw.max);
      var param = this.parameters.get(path);
      if (param) param.setValueAtTime(value, this.context.currentTime);
    });
  }

  midiMessage(data) {
    var cmd = data[0] >> 4;
    var channel = data[0] & 0xf;
    var data1 = data[1];
    var data2 = data[2];
    if (channel === 9) return;
    if (cmd === 8 || cmd === 9 && data2 === 0) this.keyOff(channel, data1, data2);else if (cmd === 9) this.keyOn(channel, data1, data2);else if (cmd === 11) this.ctrlChange(channel, data1, data2);else if (cmd === 14) this.pitchWheel(channel, data2 * 128.0 + data1);else this.port.postMessage({
      data,
      type: "midi"
    });
  }

  metadata() {}

  setParamValue(path, value) {
    var e = {
      type: "param",
      data: {
        path,
        value
      }
    };
    this.port.postMessage(e);
    var param = this.parameters.get(path);
    if (param) param.setValueAtTime(value, this.context.currentTime);
  }

  getParamValue(path) {
    var param = this.parameters.get(path);
    if (param) return param.value;
    return null;
  }

  setOutputParamHandler(handler) {
    this.outputHandler = handler;
  }

  getOutputParamHandler() {
    return this.outputHandler;
  }

  getNumInputs() {
    return this.dspMeta.inputs;
  }

  getNumOutputs() {
    return this.dspMeta.outputs;
  }

  getParams() {
    return this.inputsItems;
  }

  getJSON() {
    if (this.voices) {
      var o = this.dspMeta;
      var e = this.effectMeta;

      var r = _objectSpread({}, o);

      if (e) {
        r.ui = [{
          type: "tgroup",
          label: "Sequencer",
          items: [{
            type: "vgroup",
            label: "Instrument",
            items: o.ui
          }, {
            type: "vgroup",
            label: "Effect",
            items: e.ui
          }]
        }];
      } else {
        r.ui = [{
          type: "tgroup",
          label: "Polyphonic",
          items: [{
            type: "vgroup",
            label: "Voices",
            items: o.ui
          }]
        }];
      }

      return JSON.stringify(r);
    }

    return JSON.stringify(this.dspMeta);
  }

  getUI() {
    if (this.voices) {
      var o = this.dspMeta;
      var e = this.effectMeta;

      if (e) {
        return [{
          type: "tgroup",
          label: "Sequencer",
          items: [{
            type: "vgroup",
            label: "Instrument",
            items: o.ui
          }, {
            type: "vgroup",
            label: "Effect",
            items: e.ui
          }]
        }];
      }

      return [{
        type: "tgroup",
        label: "Polyphonic",
        items: [{
          type: "vgroup",
          label: "Voices",
          items: o.ui
        }]
      }];
    }

    return this.dspMeta.ui;
  }

  destroy() {
    this.port.postMessage({
      type: "destroy"
    });
    this.port.close();
    delete this.plotHandler;
    delete this.outputHandler;
  }

}

/***/ }),

/***/ "./src/FaustAudioWorkletProcessor.ts":
/*!*******************************************!*\
  !*** ./src/FaustAudioWorkletProcessor.ts ***!
  \*******************************************/
/*! exports provided: FaustAudioWorkletProcessorWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaustAudioWorkletProcessorWrapper", function() { return FaustAudioWorkletProcessorWrapper; });
/* eslint-disable no-console */

/* eslint-disable no-restricted-properties */

/* eslint-disable @typescript-eslint/camelcase */

/* eslint-disable object-property-newline */

/* eslint-env worker */
// AudioWorklet Globals
// Injected by Faust
var FaustAudioWorkletProcessorWrapper = () => {
  class FaustConst {}

  FaustConst.id = faustData.id;
  FaustConst.dspMeta = faustData.dspMeta;
  FaustConst.effectMeta = faustData.effectMeta;

  class FaustAudioWorkletProcessor extends AudioWorkletProcessor {
    // JSON parsing functions
    static parseUI(ui, obj, callback) {
      for (var i = 0; i < ui.length; i++) {
        this.parseGroup(ui[i], obj, callback);
      }
    }

    static parseGroup(group, obj, callback) {
      if (group.items) {
        this.parseItems(group.items, obj, callback);
      }
    }

    static parseItems(items, obj, callback) {
      for (var i = 0; i < items.length; i++) {
        callback(items[i], obj, callback);
      }
    }

    static parseItem(item, obj, callback) {
      if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
        FaustAudioWorkletProcessor.parseItems(item.items, obj, callback); // callback may not binded to this
      } else if (item.type === "hbargraph" || item.type === "vbargraph") {// Nothing
      } else if (item.type === "vslider" || item.type === "hslider" || item.type === "nentry") {
        if (!faustData.voices || !item.address.endsWith("/gate") && !item.address.endsWith("/freq") && !item.address.endsWith("/gain")) {
          obj.push({
            name: item.address,
            defaultValue: item.init || 0,
            minValue: item.min || 0,
            maxValue: item.max || 0
          });
        }
      } else if (item.type === "button" || item.type === "checkbox") {
        if (!faustData.voices || !item.address.endsWith("/gate") && !item.address.endsWith("/freq") && !item.address.endsWith("/gain")) {
          obj.push({
            name: item.address,
            defaultValue: item.init || 0,
            minValue: 0,
            maxValue: 1
          });
        }
      }
    }

    static parseItem2(item, obj, callback) {
      if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
        FaustAudioWorkletProcessor.parseItems(item.items, obj, callback); // callback may not binded to this
      } else if (item.type === "hbargraph" || item.type === "vbargraph") {
        // Keep bargraph adresses
        obj.outputsItems.push(item.address);
        obj.pathTable$[item.address] = item.index;
      } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
        // Keep inputs adresses
        obj.inputsItems.push(item.address);
        obj.pathTable$[item.address] = item.index;
        if (!item.meta) return;
        item.meta.forEach(meta => {
          var midi = meta.midi;
          if (!midi) return;
          var strMidi = midi.trim();

          if (strMidi === "pitchwheel") {
            obj.fPitchwheelLabel.push({
              path: item.address,
              min: item.min,
              max: item.max
            });
          } else {
            var matched = strMidi.match(/^ctrl\s(\d+)/);
            if (!matched) return;
            obj.fCtrlLabel[parseInt(matched[1])].push({
              path: item.address,
              min: item.min,
              max: item.max
            });
          }
        });
      }
    }

    static get parameterDescriptors() {
      // Analyse JSON to generate AudioParam parameters
      var params = [];
      this.parseUI(FaustConst.dspMeta.ui, params, this.parseItem);
      if (FaustConst.effectMeta) this.parseUI(FaustConst.effectMeta.ui, params, this.parseItem);
      return params;
    }

    constructor(options) {
      super(options);
      this.destroyed = void 0;
      this.dspInstance = void 0;
      this.effectInstance = void 0;
      this.mixerInstance = void 0;
      this.memory = void 0;
      this.bufferSize = void 0;
      this.voices = void 0;
      this.dspMeta = void 0;
      this.$ins = void 0;
      this.$outs = void 0;
      this.dspInChannnels = void 0;
      this.dspOutChannnels = void 0;
      this.fPitchwheelLabel = void 0;
      this.fCtrlLabel = void 0;
      this.numIn = void 0;
      this.numOut = void 0;
      this.ptrSize = void 0;
      this.sampleSize = void 0;
      this.outputsTimer = void 0;
      this.inputsItems = void 0;
      this.outputsItems = void 0;
      this.pathTable$ = void 0;
      this.$audioHeap = void 0;
      this.$$audioHeapInputs = void 0;
      this.$$audioHeapOutputs = void 0;
      this.$audioHeapInputs = void 0;
      this.$audioHeapOutputs = void 0;
      this.$dsp = void 0;
      this.factory = void 0;
      this.HEAP = void 0;
      this.HEAP32 = void 0;
      this.HEAPF32 = void 0;
      this.effectMeta = void 0;
      this.$effect = void 0;
      this.$mixing = void 0;
      this.fFreqLabel$ = void 0;
      this.fGateLabel$ = void 0;
      this.fGainLabel$ = void 0;
      this.fDate = void 0;
      this.$$audioHeapMixing = void 0;
      this.$audioHeapMixing = void 0;
      this.mixer = void 0;
      this.effect = void 0;
      this.dspVoices$ = void 0;
      this.dspVoicesState = void 0;
      this.dspVoicesLevel = void 0;
      this.dspVoicesDate = void 0;
      this.kActiveVoice = void 0;
      this.kFreeVoice = void 0;
      this.kReleaseVoice = void 0;
      this.kNoVoice = void 0;
      this.$buffer = void 0;
      this.cachedEvents = void 0;
      this.outputHandler = void 0;
      this.computeHandler = void 0;

      this.handleMessage = e => {
        // use arrow function for binding
        var msg = e.data;
        this.cachedEvents.push({
          type: e.data.type,
          data: e.data.data
        });

        switch (msg.type) {
          // Generic MIDI message
          case "midi":
            this.midiMessage(msg.data);
            break;
          // Typed MIDI message

          case "keyOn":
            this.keyOn(msg.data[0], msg.data[1], msg.data[2]);
            break;

          case "keyOff":
            this.keyOff(msg.data[0], msg.data[1], msg.data[2]);
            break;

          case "ctrlChange":
            this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]);
            break;

          case "pitchWheel":
            this.pitchWheel(msg.data[0], msg.data[1]);
            break;
          // Generic data message

          case "param":
            this.setParamValue(msg.data.path, msg.data.value);
            break;
          // case "patch": this.onpatch(msg.data); break;

          case "destroy":
            {
              this.port.close();
              this.destroyed = true;
              delete this.outputHandler;
              delete this.computeHandler;
              break;
            }

          default:
        }
      };

      var processorOptions = options.processorOptions;
      this.instantiateWasm(processorOptions);
      this.port.onmessage = this.handleMessage; // Naturally binded with arrow function property

      this.destroyed = false;
      this.bufferSize = 128;
      this.voices = processorOptions.voices;
      this.dspMeta = processorOptions.compiledDsp.dspMeta;

      this.outputHandler = (path, value) => this.port.postMessage({
        path,
        value,
        type: "param"
      });

      this.computeHandler = null;
      this.$ins = null;
      this.$outs = null;
      this.dspInChannnels = [];
      this.dspOutChannnels = [];
      this.fPitchwheelLabel = [];
      this.fCtrlLabel = new Array(128).fill(null).map(() => []);
      this.numIn = this.dspMeta.inputs;
      this.numOut = this.dspMeta.outputs; // Memory allocator

      this.ptrSize = 4;
      this.sampleSize = 4; // Create the WASM instance

      this.factory = this.dspInstance.exports;
      this.HEAP = this.voices ? this.memory.buffer : this.factory.memory.buffer;
      this.HEAP32 = new Int32Array(this.HEAP);
      this.HEAPF32 = new Float32Array(this.HEAP); // console.log(this.HEAP);
      // console.log(this.HEAP32);
      // console.log(this.HEAPF32);
      // bargraph

      this.outputsTimer = 5;
      this.outputsItems = []; // input items

      this.inputsItems = []; // Start of HEAP index
      // DSP is placed first with index 0. Audio buffer start at the end of DSP.

      this.$audioHeap = this.voices ? 0 : this.dspMeta.size; // Setup pointers offset

      this.$$audioHeapInputs = this.$audioHeap;
      this.$$audioHeapOutputs = this.$$audioHeapInputs + this.numIn * this.ptrSize; // Setup buffer offset

      this.$audioHeapInputs = this.$$audioHeapOutputs + this.numOut * this.ptrSize;
      this.$audioHeapOutputs = this.$audioHeapInputs + this.numIn * this.bufferSize * this.sampleSize;

      if (this.voices) {
        this.$$audioHeapMixing = this.$$audioHeapOutputs + this.numOut * this.ptrSize; // Setup buffer offset

        this.$audioHeapInputs = this.$$audioHeapMixing + this.numOut * this.ptrSize;
        this.$audioHeapOutputs = this.$audioHeapInputs + this.numIn * this.bufferSize * this.sampleSize;
        this.$audioHeapMixing = this.$audioHeapOutputs + this.numOut * this.bufferSize * this.sampleSize;
        this.$dsp = this.$audioHeapMixing + this.numOut * this.bufferSize * this.sampleSize;
      } else {
        this.$audioHeapInputs = this.$$audioHeapOutputs + this.numOut * this.ptrSize;
        this.$audioHeapOutputs = this.$audioHeapInputs + this.numIn * this.bufferSize * this.sampleSize; // Start of DSP memory : Mono DSP is placed first with index 0

        this.$dsp = 0;
      }

      if (this.voices) {
        this.effectMeta = FaustConst.effectMeta;
        this.$mixing = null;
        this.fFreqLabel$ = [];
        this.fGateLabel$ = [];
        this.fGainLabel$ = [];
        this.fDate = 0;
        this.mixer = this.mixerInstance.exports;
        this.effect = this.effectInstance ? this.effectInstance.exports : null; // Start of DSP memory ('polyphony' DSP voices)

        this.dspVoices$ = [];
        this.dspVoicesState = [];
        this.dspVoicesLevel = [];
        this.dspVoicesDate = [];
        this.kActiveVoice = 0;
        this.kFreeVoice = -1;
        this.kReleaseVoice = -2;
        this.kNoVoice = -3;

        for (var i = 0; i < this.voices; i++) {
          this.dspVoices$[i] = this.$dsp + i * this.dspMeta.size;
          this.dspVoicesState[i] = this.kFreeVoice;
          this.dspVoicesLevel[i] = 0;
          this.dspVoicesDate[i] = 0;
        } // Effect memory starts after last voice


        this.$effect = this.dspVoices$[this.voices - 1] + this.dspMeta.size;
      }

      this.pathTable$ = {};
      this.$buffer = 0;
      this.cachedEvents = []; // Init resulting DSP

      this.setup();
    }

    instantiateWasm(options) {
      var memory = createWasmMemory(options.voices, options.compiledDsp.dspMeta, options.compiledDsp.effectMeta, 128);
      this.memory = memory;
      var imports = createWasmImport(options.voices, memory);
      this.dspInstance = new WebAssembly.Instance(options.compiledDsp.dspModule, imports);

      if (options.compiledDsp.effectModule) {
        this.effectInstance = new WebAssembly.Instance(options.compiledDsp.effectModule, imports);
      }

      if (options.voices) {
        var mixerImports = {
          imports: {
            print: console.log
          },
          memory: {
            memory
          }
        };
        this.mixerInstance = new WebAssembly.Instance(options.mixer32Module, mixerImports);
      }
    }

    updateOutputs() {
      if (this.outputsItems.length > 0 && this.outputHandler && this.outputsTimer-- === 0) {
        this.outputsTimer = 5;
        this.outputsItems.forEach(item => this.outputHandler(item, this.factory.getParamValue(this.$dsp, this.pathTable$[item])));
      }
    }

    parseUI(ui) {
      return FaustAudioWorkletProcessor.parseUI(ui, this, FaustAudioWorkletProcessor.parseItem2);
    }

    parseGroup(group) {
      return FaustAudioWorkletProcessor.parseGroup(group, this, FaustAudioWorkletProcessor.parseItem2);
    }

    parseItems(items) {
      return FaustAudioWorkletProcessor.parseItems(items, this, FaustAudioWorkletProcessor.parseItem2);
    }

    parseItem(item) {
      return FaustAudioWorkletProcessor.parseItem2(item, this, FaustAudioWorkletProcessor.parseItem2);
    }

    setParamValue(path, val) {
      if (this.voices) {
        if (this.effect && findPath(this.effectMeta.ui, path)) this.effect.setParamValue(this.$effect, this.pathTable$[path], val);else this.dspVoices$.forEach($voice => this.factory.setParamValue($voice, this.pathTable$[path], val));
      } else {
        this.factory.setParamValue(this.$dsp, this.pathTable$[path], val);
      }
    }

    getParamValue(path) {
      if (this.voices) {
        if (this.effect && findPath(this.effectMeta.ui, path)) return this.effect.getParamValue(this.$effect, this.pathTable$[path]);
        return this.factory.getParamValue(this.dspVoices$[0], this.pathTable$[path]);
      }

      return this.factory.getParamValue(this.$dsp, this.pathTable$[path]);
    }

    setup() {
      if (this.numIn > 0) {
        this.$ins = this.$$audioHeapInputs;

        for (var i = 0; i < this.numIn; i++) {
          this.HEAP32[(this.$ins >> 2) + i] = this.$audioHeapInputs + this.bufferSize * this.sampleSize * i;
        } // Prepare Ins buffer tables


        var dspInChans = this.HEAP32.subarray(this.$ins >> 2, this.$ins + this.numIn * this.ptrSize >> 2);

        for (var _i = 0; _i < this.numIn; _i++) {
          this.dspInChannnels[_i] = this.HEAPF32.subarray(dspInChans[_i] >> 2, dspInChans[_i] + this.bufferSize * this.sampleSize >> 2);
        }
      }

      if (this.numOut > 0) {
        this.$outs = this.$$audioHeapOutputs;
        if (this.voices) this.$mixing = this.$$audioHeapMixing;

        for (var _i2 = 0; _i2 < this.numOut; _i2++) {
          this.HEAP32[(this.$outs >> 2) + _i2] = this.$audioHeapOutputs + this.bufferSize * this.sampleSize * _i2;
          if (this.voices) this.HEAP32[(this.$mixing >> 2) + _i2] = this.$audioHeapMixing + this.bufferSize * this.sampleSize * _i2;
        } // Prepare Out buffer tables


        var dspOutChans = this.HEAP32.subarray(this.$outs >> 2, this.$outs + this.numOut * this.ptrSize >> 2);

        for (var _i3 = 0; _i3 < this.numOut; _i3++) {
          this.dspOutChannnels[_i3] = this.HEAPF32.subarray(dspOutChans[_i3] >> 2, dspOutChans[_i3] + this.bufferSize * this.sampleSize >> 2);
        }
      } // Parse UI


      this.parseUI(this.dspMeta.ui);
      if (this.effect) this.parseUI(this.effectMeta.ui); // keep 'keyOn/keyOff' labels

      if (this.voices) {
        this.inputsItems.forEach(item => {
          if (item.endsWith("/gate")) this.fGateLabel$.push(this.pathTable$[item]);else if (item.endsWith("/freq")) this.fFreqLabel$.push(this.pathTable$[item]);else if (item.endsWith("/gain")) this.fGainLabel$.push(this.pathTable$[item]);
        }); // Init DSP voices

        this.dspVoices$.forEach($voice => this.factory.init($voice, sampleRate)); // Init effect

        if (this.effect) this.effect.init(this.$effect, sampleRate);
      } else {
        // Init DSP
        this.factory.init(this.$dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope
      }
    } // Poly only methods


    getPlayingVoice(pitch) {
      if (!this.voices) return null;
      var voice = this.kNoVoice;
      var oldestDatePlaying = Number.MAX_VALUE;

      for (var i = 0; i < this.voices; i++) {
        if (this.dspVoicesState[i] === pitch) {
          // Keeps oldest playing voice
          if (this.dspVoicesDate[i] < oldestDatePlaying) {
            oldestDatePlaying = this.dspVoicesDate[i];
            voice = i;
          }
        }
      }

      return voice;
    }

    allocVoice(voice) {
      if (!this.voices) return null; // so that envelop is always re-initialized

      this.factory.instanceClear(this.dspVoices$[voice]);
      this.dspVoicesDate[voice] = this.fDate++;
      this.dspVoicesState[voice] = this.kActiveVoice;
      return voice;
    }

    getFreeVoice() {
      if (!this.voices) return null;

      for (var i = 0; i < this.voices; i++) {
        if (this.dspVoicesState[i] === this.kFreeVoice) return this.allocVoice(i);
      }

      var voiceRelease = this.kNoVoice;
      var voicePlaying = this.kNoVoice;
      var oldestDateRelease = Number.MAX_VALUE;
      var oldestDatePlaying = Number.MAX_VALUE;

      for (var _i4 = 0; _i4 < this.voices; _i4++) {
        // Scan all voices
        // Try to steal a voice in kReleaseVoice mode...
        if (this.dspVoicesState[_i4] === this.kReleaseVoice) {
          // Keeps oldest release voice
          if (this.dspVoicesDate[_i4] < oldestDateRelease) {
            oldestDateRelease = this.dspVoicesDate[_i4];
            voiceRelease = _i4;
          }
        } else if (this.dspVoicesDate[_i4] < oldestDatePlaying) {
          oldestDatePlaying = this.dspVoicesDate[_i4];
          voicePlaying = _i4;
        }
      } // Then decide which one to steal


      if (oldestDateRelease !== Number.MAX_VALUE) {
        // console.log(`Steal release voice : voice_date = ${this.dspVoicesDate[voiceRelease]} cur_date = ${this.fDate} voice = ${voiceRelease}`);
        return this.allocVoice(voiceRelease);
      }

      if (oldestDatePlaying !== Number.MAX_VALUE) {
        // console.log(`Steal playing voice : voice_date = ${this.dspVoicesDate[voicePlaying]} cur_date = ${this.fDate} voice = ${voicePlaying}`);
        return this.allocVoice(voicePlaying);
      }

      return this.kNoVoice;
    }

    keyOn(channel, pitch, velocity) {
      if (!this.voices) return;
      var voice = this.getFreeVoice(); // console.log("keyOn voice " + voice);

      this.fFreqLabel$.forEach($ => this.factory.setParamValue(this.dspVoices$[voice], $, midiToFreq(pitch)));
      this.fGateLabel$.forEach($ => this.factory.setParamValue(this.dspVoices$[voice], $, 1));
      this.fGainLabel$.forEach($ => this.factory.setParamValue(this.dspVoices$[voice], $, velocity / 127));
      this.dspVoicesState[voice] = pitch;
    }

    keyOff(channel, pitch, velocity) {
      if (!this.voices) return;
      var voice = this.getPlayingVoice(pitch);
      if (voice === this.kNoVoice) return; // console.log("Playing voice not found...");
      // console.log("keyOff voice " + voice);

      this.fGateLabel$.forEach($ => this.factory.setParamValue(this.dspVoices$[voice], $, 0)); // No use of velocity for now...

      this.dspVoicesState[voice] = this.kReleaseVoice; // Release voice
    }

    allNotesOff() {
      var _this = this;

      if (!this.voices) return;

      var _loop = function _loop(i) {
        _this.fGateLabel$.forEach($gate => _this.factory.setParamValue(_this.dspVoices$[i], $gate, 0));

        _this.dspVoicesState[i] = _this.kReleaseVoice;
      };

      for (var i = 0; i < this.voices; i++) {
        _loop(i);
      }
    }

    midiMessage(data) {
      var cmd = data[0] >> 4;
      var channel = data[0] & 0xf;
      var data1 = data[1];
      var data2 = data[2];
      if (channel === 9) return;
      if (cmd === 8 || cmd === 9 && data2 === 0) this.keyOff(channel, data1, data2);else if (cmd === 9) this.keyOn(channel, data1, data2);else if (cmd === 11) this.ctrlChange(channel, data1, data2);else if (cmd === 14) this.pitchWheel(channel, data2 * 128.0 + data1);
    }

    ctrlChange(channel, ctrl, value) {
      if (!this.fCtrlLabel[ctrl].length) return;
      this.fCtrlLabel[ctrl].forEach(ctrl => {
        var path = ctrl.path;
        this.setParamValue(path, remap(value, 0, 127, ctrl.min, ctrl.max));
        if (this.outputHandler) this.outputHandler(path, this.getParamValue(path));
      });
    }

    pitchWheel(channel, wheel) {
      this.fPitchwheelLabel.forEach(pw => {
        this.setParamValue(pw.path, remap(wheel, 0, 16383, pw.min, pw.max));
        if (this.outputHandler) this.outputHandler(pw.path, this.getParamValue(pw.path));
      });
    }

    process(inputs, outputs, parameters) {
      if (this.destroyed) return false;
      var input = inputs[0];
      var output = outputs[0]; // Check inputs

      if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
        // console.log("Process input error");
        return true;
      } // Check outputs


      if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
        // console.log("Process output error");
        return true;
      } // Copy inputs


      if (input !== undefined) {
        for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
          var dspInput = this.dspInChannnels[chan];
          dspInput.set(input[chan]);
        }
      } // Update controls (possibly needed for sample accurate control)


      for (var path in parameters) {
        var paramArray = parameters[path];
        this.setParamValue(path, paramArray[0]);
      } // Possibly call an externally given callback (for instance to synchronize playing a MIDIFile...)


      if (this.computeHandler) this.computeHandler(this.bufferSize);

      if (this.voices) {
        this.mixer.clearOutput(this.bufferSize, this.numOut, this.$outs); // First clear the outputs

        for (var i = 0; i < this.voices; i++) {
          // Compute all running voices
          this.factory.compute(this.dspVoices$[i], this.bufferSize, this.$ins, this.$mixing); // Compute voice

          this.mixer.mixVoice(this.bufferSize, this.numOut, this.$mixing, this.$outs); // Mix it in result
        }

        if (this.effect) this.effect.compute(this.$effect, this.bufferSize, this.$outs, this.$outs); // Apply effect. Not a typo, effect is applied on the outs.
      } else {
        this.factory.compute(this.$dsp, this.bufferSize, this.$ins, this.$outs); // Compute
      } // Update bargraph


      this.updateOutputs(); // Copy outputs

      if (output !== undefined) {
        for (var _i5 = 0; _i5 < Math.min(this.numOut, output.length); _i5++) {
          var dspOutput = this.dspOutChannnels[_i5];

          output[_i5].set(dspOutput);
        }

        this.port.postMessage({
          type: "plot",
          value: output,
          index: this.$buffer++,
          events: this.cachedEvents
        });
        this.cachedEvents = [];
      }

      return true;
    }

    printMemory() {
      console.log("============== Memory layout ==============");
      console.log("dspMeta.size: " + this.dspMeta.size);
      console.log("$audioHeap: " + this.$audioHeap);
      console.log("$$audioHeapInputs: " + this.$$audioHeapInputs);
      console.log("$$audioHeapOutputs: " + this.$$audioHeapOutputs);
      console.log("$$audioHeapMixing: " + this.$$audioHeapMixing);
      console.log("$audioHeapInputs: " + this.$audioHeapInputs);
      console.log("$audioHeapOutputs: " + this.$audioHeapOutputs);
      console.log("$audioHeapMixing: " + this.$audioHeapMixing);
      console.log("$dsp: " + this.$dsp);
      if (this.dspVoices$) this.dspVoices$.forEach(($voice, i) => console.log("dspVoices$[" + i + "]: " + $voice));
      console.log("$effect: " + this.$effect);
      console.log("$mixing: " + this.$mixing);
    }

  } // Globals
  // Synchronously compile and instantiate the WASM module


  FaustAudioWorkletProcessor.bufferSize = 128;
  registerProcessor(FaustConst.id || "mydsp", FaustAudioWorkletProcessor);
};

/***/ }),

/***/ "./src/FaustOfflineProcessor.ts":
/*!**************************************!*\
  !*** ./src/FaustOfflineProcessor.ts ***!
  \**************************************/
/*! exports provided: FaustOfflineProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaustOfflineProcessor", function() { return FaustOfflineProcessor; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



/* eslint-disable no-restricted-properties */

/* eslint-disable @typescript-eslint/camelcase */

/* eslint-disable object-property-newline */
class FaustOfflineProcessor {
  constructor() {
    this.bufferSize = 1024;
    this.sampleRate = void 0;
    this.dspMeta = void 0;
    this.$ins = void 0;
    this.$outs = void 0;
    this.dspInChannnels = void 0;
    this.dspOutChannnels = void 0;
    this.numIn = void 0;
    this.numOut = void 0;
    this.ptrSize = void 0;
    this.sampleSize = void 0;
    this.$audioHeap = void 0;
    this.$$audioHeapInputs = void 0;
    this.$$audioHeapOutputs = void 0;
    this.$audioHeapInputs = void 0;
    this.$audioHeapOutputs = void 0;
    this.$dsp = void 0;
    this.factory = void 0;
    this.HEAP = void 0;
    this.HEAP32 = void 0;
    this.HEAPF32 = void 0;
    this.output = void 0;
  }

  static get importObject() {
    return {
      env: {
        memory: undefined,
        memoryBase: 0,
        tableBase: 0,
        _abs: Math.abs,
        // Float version
        _acosf: Math.acos,
        _asinf: Math.asin,
        _atanf: Math.atan,
        _atan2f: Math.atan2,
        _ceilf: Math.ceil,
        _cosf: Math.cos,
        _expf: Math.exp,
        _floorf: Math.floor,
        _fmodf: (x, y) => x % y,
        _logf: Math.log,
        _log10f: Math.log10,
        _max_f: Math.max,
        _min_f: Math.min,
        _remainderf: (x, y) => x - Math.round(x / y) * y,
        _powf: Math.pow,
        _roundf: Math.fround,
        _sinf: Math.sin,
        _sqrtf: Math.sqrt,
        _tanf: Math.tan,
        _acoshf: Math.acosh,
        _asinhf: Math.asinh,
        _atanhf: Math.atanh,
        _coshf: Math.cosh,
        _sinhf: Math.sinh,
        _tanhf: Math.tanh,
        // Double version
        _acos: Math.acos,
        _asin: Math.asin,
        _atan: Math.atan,
        _atan2: Math.atan2,
        _ceil: Math.ceil,
        _cos: Math.cos,
        _exp: Math.exp,
        _floor: Math.floor,
        _fmod: (x, y) => x % y,
        _log: Math.log,
        _log10: Math.log10,
        _max_: Math.max,
        _min_: Math.min,
        _remainder: (x, y) => x - Math.round(x / y) * y,
        _pow: Math.pow,
        _round: Math.fround,
        _sin: Math.sin,
        _sqrt: Math.sqrt,
        _tan: Math.tan,
        _acosh: Math.acosh,
        _asinh: Math.asinh,
        _atanh: Math.atanh,
        _cosh: Math.cosh,
        _sinh: Math.sinh,
        _tanh: Math.tanh,
        table: new WebAssembly.Table({
          initial: 0,
          element: "anyfunc"
        })
      }
    };
  }

  init(options) {
    var _this = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var compiledDsp, dspInstance;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              compiledDsp = options.compiledDsp;

              if (compiledDsp) {
                _context.next = 3;
                break;
              }

              throw new Error("No Dsp input");

            case 3:
              _this.dspMeta = compiledDsp.dspMeta;
              _this.$ins = null;
              _this.$outs = null;
              _this.dspInChannnels = [];
              _this.dspOutChannnels = [];
              _this.numIn = _this.dspMeta.inputs;
              _this.numOut = _this.dspMeta.outputs; // Memory allocator

              _this.ptrSize = 4;
              _this.sampleSize = 4; // Create the WASM instance

              _context.next = 14;
              return WebAssembly.instantiate(compiledDsp.dspModule, FaustOfflineProcessor.importObject);

            case 14:
              dspInstance = _context.sent;
              _this.factory = dspInstance.exports;
              _this.HEAP = _this.factory.memory.buffer;
              _this.HEAP32 = new Int32Array(_this.HEAP);
              _this.HEAPF32 = new Float32Array(_this.HEAP);
              _this.output = new Array(_this.numOut).fill(null).map(() => new Float32Array(_this.bufferSize));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }

  setup(options) {
    if (!this.dspMeta) throw new Error("No Dsp");
    this.sampleRate = options && options.sampleRate || 48000; // DSP is placed first with index 0. Audio buffer start at the end of DSP.

    this.$audioHeap = this.dspMeta.size; // Setup pointers offset

    this.$$audioHeapInputs = this.$audioHeap;
    this.$$audioHeapOutputs = this.$$audioHeapInputs + this.numIn * this.ptrSize; // Setup buffer offset

    this.$audioHeapInputs = this.$$audioHeapOutputs + this.numOut * this.ptrSize;
    this.$audioHeapOutputs = this.$audioHeapInputs + this.numIn * this.bufferSize * this.sampleSize; // Start of DSP memory : Mono DSP is placed first with index 0

    this.$dsp = 0;

    if (this.numIn > 0) {
      this.$ins = this.$$audioHeapInputs;

      for (var i = 0; i < this.numIn; i++) {
        this.HEAP32[(this.$ins >> 2) + i] = this.$audioHeapInputs + this.bufferSize * this.sampleSize * i;
      } // Prepare Ins buffer tables


      var dspInChans = this.HEAP32.subarray(this.$ins >> 2, this.$ins + this.numIn * this.ptrSize >> 2);

      for (var _i = 0; _i < this.numIn; _i++) {
        this.dspInChannnels[_i] = this.HEAPF32.subarray(dspInChans[_i] >> 2, dspInChans[_i] + this.bufferSize * this.sampleSize >> 2);
      }
    }

    if (this.numOut > 0) {
      this.$outs = this.$$audioHeapOutputs;

      for (var _i2 = 0; _i2 < this.numOut; _i2++) {
        this.HEAP32[(this.$outs >> 2) + _i2] = this.$audioHeapOutputs + this.bufferSize * this.sampleSize * _i2;
      } // Prepare Out buffer tables


      var dspOutChans = this.HEAP32.subarray(this.$outs >> 2, this.$outs + this.numOut * this.ptrSize >> 2);

      for (var _i3 = 0; _i3 < this.numOut; _i3++) {
        this.dspOutChannnels[_i3] = this.HEAPF32.subarray(dspOutChans[_i3] >> 2, dspOutChans[_i3] + this.bufferSize * this.sampleSize >> 2);
      }
    } // Init DSP


    this.factory.init(this.$dsp, this.sampleRate);
  }

  compute() {
    if (!this.factory) return this.output;

    for (var i = 0; i < this.numIn; i++) {
      this.dspInChannnels[i].fill(0);
    }

    this.factory.compute(this.$dsp, this.bufferSize, this.$ins, this.$outs); // Compute
    // Copy outputs

    if (this.output !== undefined) {
      for (var _i4 = 0; _i4 < this.numOut; _i4++) {
        this.output[_i4].set(this.dspOutChannnels[_i4]);
      }
    }

    return this.output;
  }

  plot(options) {
    var _this2 = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var size, plotted, i, computed, j;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(options && options.compiledDsp)) {
                _context2.next = 3;
                break;
              }

              _context2.next = 3;
              return _this2.init(options);

            case 3:
              _this2.setup(options);

              size = options && options.size || 128;
              plotted = new Array(_this2.numOut).fill(null).map(() => new Float32Array(size));

              for (i = 0; i < size; i += _this2.bufferSize) {
                computed = _this2.compute();

                for (j = 0; j < plotted.length; j++) {
                  plotted[j].set(size - i > _this2.bufferSize ? computed[j] : computed[j].subarray(0, size - i), i);
                }
              }

              return _context2.abrupt("return", plotted);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }

}

/***/ }),

/***/ "./src/FaustWasmToScriptProcessor.ts":
/*!*******************************************!*\
  !*** ./src/FaustWasmToScriptProcessor.ts ***!
  \*******************************************/
/*! exports provided: FaustWasmToScriptProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaustWasmToScriptProcessor", function() { return FaustWasmToScriptProcessor; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable no-restricted-properties */

/* eslint-disable @typescript-eslint/camelcase */

/* eslint-disable object-property-newline */

/* eslint-disable object-curly-newline */

class FaustWasmToScriptProcessor {
  constructor(faust) {
    this.faust = void 0;
    this.faust = faust;
  }

  initNode(compiledDsp, dspInstance, effectInstance, mixerInstance, audioCtx, bufferSize, memory, voices, plotHandler) {
    var node;
    var dspMeta = compiledDsp.dspMeta;
    var inputs = dspMeta.inputs;
    var outputs = dspMeta.outputs;

    try {
      node = audioCtx.createScriptProcessor(bufferSize, inputs, outputs);
    } catch (e) {
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
    this.faust.log(node.numOut); // Memory allocator

    node.ptrSize = 4;
    node.sampleSize = 4;
    node.factory = dspInstance.exports;
    node.HEAP = node.voices ? memory.buffer : node.factory.memory.buffer;
    node.HEAP32 = new Int32Array(node.HEAP);
    node.HEAPF32 = new Float32Array(node.HEAP);
    this.faust.log(node.HEAP);
    this.faust.log(node.HEAP32);
    this.faust.log(node.HEAPF32); // JSON is as offset 0

    /*
    var HEAPU8 = new Uint8Array(sp.HEAP);
    console.log(this.Heap2Str(HEAPU8));
    */
    // bargraph

    node.outputsTimer = 5;
    node.outputsItems = []; // input items

    node.inputsItems = []; // Start of HEAP index
    // DSP is placed first with index 0. Audio buffer start at the end of DSP.

    node.$audioHeap = node.voices ? 0 : node.dspMeta.size; // Setup pointers offset

    node.$$audioHeapInputs = node.$audioHeap;
    node.$$audioHeapOutputs = node.$$audioHeapInputs + node.numIn * node.ptrSize;

    if (node.voices) {
      node.$$audioHeapMixing = node.$$audioHeapOutputs + node.numOut * node.ptrSize; // Setup buffer offset

      node.$audioHeapInputs = node.$$audioHeapMixing + node.numOut * node.ptrSize;
      node.$audioHeapOutputs = node.$audioHeapInputs + node.numIn * node.bufferSize * node.sampleSize;
      node.$audioHeapMixing = node.$audioHeapOutputs + node.numOut * node.bufferSize * node.sampleSize;
      node.$dsp = node.$audioHeapMixing + node.numOut * node.bufferSize * node.sampleSize;
    } else {
      node.$audioHeapInputs = node.$$audioHeapOutputs + node.numOut * node.ptrSize;
      node.$audioHeapOutputs = node.$audioHeapInputs + node.numIn * node.bufferSize * node.sampleSize; // Start of DSP memory : Mono DSP is placed first with index 0

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
      this.faust.log(node.effect); // Start of DSP memory ('polyphony' DSP voices)

      node.dspVoices$ = [];
      node.dspVoicesState = [];
      node.dspVoicesLevel = [];
      node.dspVoicesDate = [];
      node.kActiveVoice = 0;
      node.kFreeVoice = -1;
      node.kReleaseVoice = -2;
      node.kNoVoice = -3;

      for (var i = 0; i < node.voices; i++) {
        node.dspVoices$[i] = node.$dsp + i * node.dspMeta.size;
        node.dspVoicesState[i] = node.kFreeVoice;
        node.dspVoicesLevel[i] = 0;
        node.dspVoicesDate[i] = 0;
      } // Effect memory starts after last voice


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
    }; // JSON parsing


    node.parseUI = ui => ui.forEach(group => node.parseGroup(group));

    node.parseGroup = group => group.items ? node.parseItems(group.items) : null;

    node.parseItems = items => items.forEach(item => node.parseItem(item));

    node.parseItem = item => {
      if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
        node.parseItems(item.items);
      } else if (item.type === "hbargraph" || item.type === "vbargraph") {
        // Keep bargraph adresses
        node.outputsItems.push(item.address);
        node.pathTable$[item.address] = item.index;
      } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
        // Keep inputs adresses
        node.inputsItems.push(item.address);
        node.pathTable$[item.address] = item.index;
        if (!item.meta) return;
        item.meta.forEach(meta => {
          var midi = meta.midi;
          if (!midi) return;
          var strMidi = midi.trim();

          if (strMidi === "pitchwheel") {
            node.fPitchwheelLabel.push({
              path: item.address,
              min: item.min,
              max: item.max
            });
          } else {
            var matched = strMidi.match(/^ctrl\s(\d+)/);
            if (!matched) return;
            node.fCtrlLabel[parseInt(matched[1])].push({
              path: item.address,
              min: item.min,
              max: item.max
            });
          }
        });
      }
    };

    if (node.voices) {
      node.getPlayingVoice = pitch => {
        var voice = node.kNoVoice;
        var oldestDatePlaying = Number.MAX_VALUE;

        for (var _i = 0; _i < node.voices; _i++) {
          if (node.dspVoicesState[_i] === pitch) {
            // Keeps oldest playing voice
            if (node.dspVoicesDate[_i] < oldestDatePlaying) {
              oldestDatePlaying = node.dspVoicesDate[_i];
              voice = _i;
            }
          }
        }

        return voice;
      }; // Always returns a voice


      node.allocVoice = voice => {
        // so that envelop is always re-initialized
        node.factory.instanceClear(node.dspVoices$[voice]);
        node.dspVoicesDate[voice] = node.fDate++;
        node.dspVoicesState[voice] = node.kActiveVoice;
        return voice;
      };

      node.getFreeVoice = () => {
        for (var _i2 = 0; _i2 < node.voices; _i2++) {
          if (node.dspVoicesState[_i2] === node.kFreeVoice) return node.allocVoice(_i2);
        }

        var voiceRelease = node.kNoVoice;
        var voicePlaying = node.kNoVoice;
        var oldestDateRelease = Number.MAX_VALUE;
        var oldestDatePlaying = Number.MAX_VALUE;

        for (var _i3 = 0; _i3 < node.voices; _i3++) {
          // Scan all voices
          // Try to steal a voice in kReleaseVoice mode...
          if (node.dspVoicesState[_i3] === node.kReleaseVoice) {
            // Keeps oldest release voice
            if (node.dspVoicesDate[_i3] < oldestDateRelease) {
              oldestDateRelease = node.dspVoicesDate[_i3];
              voiceRelease = _i3;
            }
          } else if (node.dspVoicesDate[_i3] < oldestDatePlaying) {
            oldestDatePlaying = node.dspVoicesDate[_i3];
            voicePlaying = _i3;
          }
        } // Then decide which one to steal


        if (oldestDateRelease !== Number.MAX_VALUE) {
          this.faust.log("Steal release voice : voice_date = ".concat(node.dspVoicesDate[voiceRelease], " cur_date = ").concat(node.fDate, " voice = ").concat(voiceRelease));
          return node.allocVoice(voiceRelease);
        }

        if (oldestDatePlaying !== Number.MAX_VALUE) {
          this.faust.log("Steal playing voice : voice_date = ".concat(node.dspVoicesDate[voicePlaying], " cur_date = ").concat(node.fDate, " voice = ").concat(voicePlaying));
          return node.allocVoice(voicePlaying);
        }

        return node.kNoVoice;
      };

      node.keyOn = (channel, pitch, velocity) => {
        node.cachedEvents.push({
          type: "keyOn",
          data: [channel, pitch, velocity]
        });
        var voice = node.getFreeVoice();
        this.faust.log("keyOn voice " + voice);
        node.fFreqLabel$.forEach($ => node.factory.setParamValue(node.dspVoices$[voice], $, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["midiToFreq"])(pitch)));
        node.fGateLabel$.forEach($ => node.factory.setParamValue(node.dspVoices$[voice], $, 1));
        node.fGainLabel$.forEach($ => node.factory.setParamValue(node.dspVoices$[voice], $, velocity / 127));
        node.dspVoicesState[voice] = pitch;
      };

      node.keyOff = (channel, pitch, velocity) => {
        // eslint-disable-line @typescript-eslint/no-unused-vars
        node.cachedEvents.push({
          type: "keyOff",
          data: [channel, pitch, velocity]
        });
        var voice = node.getPlayingVoice(pitch);
        if (voice === node.kNoVoice) return this.faust.log("Playing voice not found...");
        node.fGateLabel$.forEach($ => node.factory.setParamValue(node.dspVoices$[voice], $, 0)); // No use of velocity for now...

        node.dspVoicesState[voice] = node.kReleaseVoice; // Release voice

        return this.faust.log("keyOff voice " + voice);
      };

      node.allNotesOff = () => {
        node.cachedEvents.push({
          type: "ctrlChange",
          data: [0, 123, 0]
        });

        var _loop = function _loop(_i4) {
          node.fGateLabel$.forEach($gate => node.factory.setParamValue(node.dspVoices$[_i4], $gate, 0));
          node.dspVoicesState[_i4] = node.kReleaseVoice;
        };

        for (var _i4 = 0; _i4 < node.voices; _i4++) {
          _loop(_i4);
        }
      };
    }

    node.midiMessage = data => {
      node.cachedEvents.push({
        data,
        type: "midi"
      });
      var cmd = data[0] >> 4;
      var channel = data[0] & 0xf;
      var data1 = data[1];
      var data2 = data[2];
      if (channel === 9) return undefined;

      if (node.voices) {
        if (cmd === 8 || cmd === 9 && data2 === 0) return node.keyOff(channel, data1, data2);
        if (cmd === 9) return node.keyOn(channel, data1, data2);
      }

      if (cmd === 11) return node.ctrlChange(channel, data1, data2);
      if (cmd === 14) return node.pitchWheel(channel, data2 * 128.0 + data1);
      return undefined;
    };

    node.ctrlChange = (channel, ctrl, value) => {
      node.cachedEvents.push({
        type: "ctrlChange",
        data: [channel, ctrl, value]
      });
      if (!node.fCtrlLabel[ctrl].length) return;
      node.fCtrlLabel[ctrl].forEach(ctrl => {
        var path = ctrl.path;
        node.setParamValue(path, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["remap"])(value, 0, 127, ctrl.min, ctrl.max));
        if (node.outputHandler) node.outputHandler(path, node.getParamValue(path));
      });
    };

    node.pitchWheel = (channel, wheel) => {
      node.cachedEvents.push({
        type: "pitchWheel",
        data: [channel, wheel]
      });
      node.fPitchwheelLabel.forEach(pw => {
        node.setParamValue(pw.path, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["remap"])(wheel, 0, 16383, pw.min, pw.max));
        if (node.outputHandler) node.outputHandler(pw.path, node.getParamValue(pw.path));
      });
    };

    node.compute = e => {
      if (node.destroyed) return false;

      for (var _i5 = 0; _i5 < node.numIn; _i5++) {
        // Read inputs
        var input = e.inputBuffer.getChannelData(_i5);
        var dspInput = node.dspInChannnels[_i5];
        dspInput.set(input);
      } // Possibly call an externally given callback (for instance to synchronize playing a MIDIFile...)


      if (node.computeHandler) node.computeHandler(node.bufferSize);

      if (node.voices) {
        node.mixer.clearOutput(node.bufferSize, node.numOut, node.$outs); // First clear the outputs

        for (var _i6 = 0; _i6 < node.voices; _i6++) {
          // Compute all running voices
          node.factory.compute(node.dspVoices$[_i6], node.bufferSize, node.$ins, node.$mixing); // Compute voice

          node.mixer.mixVoice(node.bufferSize, node.numOut, node.$mixing, node.$outs); // Mix it in result
        }

        if (node.effect) node.effect.compute(node.$effect, node.bufferSize, node.$outs, node.$outs); // Apply effect. Not a typo, effect is applied on the outs.
      } else {
        node.factory.compute(node.$dsp, node.bufferSize, node.$ins, node.$outs); // Compute
      }

      node.updateOutputs(); // Update bargraph

      var outputs = new Array(node.numOut).fill(null).map(() => new Float32Array(node.bufferSize));

      for (var _i7 = 0; _i7 < node.numOut; _i7++) {
        // Write outputs
        var output = e.outputBuffer.getChannelData(_i7);
        var dspOutput = node.dspOutChannnels[_i7];
        output.set(dspOutput);

        outputs[_i7].set(dspOutput);
      }

      if (node.plotHandler) node.plotHandler(outputs, node.$buffer++, node.cachedEvents.length ? node.cachedEvents : undefined);
      node.cachedEvents = [];
      return true;
    };

    node.setup = () => {
      // Setup web audio context
      this.faust.log("buffer_size " + node.bufferSize);
      node.onaudioprocess = node.compute;

      if (node.numIn > 0) {
        node.$ins = node.$$audioHeapInputs;

        for (var _i8 = 0; _i8 < node.numIn; _i8++) {
          node.HEAP32[(node.$ins >> 2) + _i8] = node.$audioHeapInputs + node.bufferSize * node.sampleSize * _i8;
        } // Prepare Ins buffer tables


        var dspInChans = node.HEAP32.subarray(node.$ins >> 2, node.$ins + node.numIn * node.ptrSize >> 2);

        for (var _i9 = 0; _i9 < node.numIn; _i9++) {
          node.dspInChannnels[_i9] = node.HEAPF32.subarray(dspInChans[_i9] >> 2, dspInChans[_i9] + node.bufferSize * node.sampleSize >> 2);
        }
      }

      if (node.numOut > 0) {
        node.$outs = node.$$audioHeapOutputs;
        if (node.voices) node.$mixing = node.$$audioHeapMixing;

        for (var _i10 = 0; _i10 < node.numOut; _i10++) {
          node.HEAP32[(node.$outs >> 2) + _i10] = node.$audioHeapOutputs + node.bufferSize * node.sampleSize * _i10;
          if (node.voices) node.HEAP32[(node.$mixing >> 2) + _i10] = node.$audioHeapMixing + node.bufferSize * node.sampleSize * _i10;
        } // Prepare Out buffer tables


        var dspOutChans = node.HEAP32.subarray(node.$outs >> 2, node.$outs + node.numOut * node.ptrSize >> 2);

        for (var _i11 = 0; _i11 < node.numOut; _i11++) {
          node.dspOutChannnels[_i11] = node.HEAPF32.subarray(dspOutChans[_i11] >> 2, dspOutChans[_i11] + node.bufferSize * node.sampleSize >> 2);
        }
      } // Parse JSON UI part


      node.parseUI(node.dspMeta.ui);
      if (node.effect) node.parseUI(node.effectMeta.ui); // keep 'keyOn/keyOff' labels

      if (node.voices) {
        node.inputsItems.forEach(item => {
          if (item.endsWith("/gate")) node.fGateLabel$.push(node.pathTable$[item]);else if (item.endsWith("/freq")) node.fFreqLabel$.push(node.pathTable$[item]);else if (item.endsWith("/gain")) node.fGainLabel$.push(node.pathTable$[item]);
        }); // Init DSP voices

        node.dspVoices$.forEach($voice => node.factory.init($voice, audioCtx.sampleRate)); // Init effect

        if (node.effect) node.effect.init(node.$effect, audioCtx.sampleRate);
      } else {
        // Init DSP
        node.factory.init(node.$dsp, audioCtx.sampleRate);
      }
    };

    node.getSampleRate = () => audioCtx.sampleRate;

    node.getNumInputs = () => node.numIn;

    node.getNumOutputs = () => node.numOut;

    node.init = sampleRate => {
      if (node.voices) node.dspVoices$.forEach($voice => node.factory.init($voice, sampleRate));else node.factory.init(node.$dsp, sampleRate);
    };

    node.instanceInit = sampleRate => {
      if (node.voices) node.dspVoices$.forEach($voice => node.factory.instanceInit($voice, sampleRate));else node.factory.instanceInit(node.$dsp, sampleRate);
    };

    node.instanceConstants = sampleRate => {
      if (node.voices) node.dspVoices$.forEach($voice => node.factory.instanceConstants($voice, sampleRate));else node.factory.instanceConstants(node.$dsp, sampleRate);
    };

    node.instanceResetUserInterface = () => {
      if (node.voices) node.dspVoices$.forEach($voice => node.factory.instanceResetUserInterface($voice));else node.factory.instanceResetUserInterface(node.$dsp);
    };

    node.instanceClear = () => {
      if (node.voices) node.dspVoices$.forEach($voice => node.factory.instanceClear($voice));else node.factory.instanceClear(node.$dsp);
    };

    node.metadata = handler => node.dspMeta.meta ? node.dspMeta.meta.forEach(meta => handler.declare(Object.keys(meta)[0], meta[Object.keys(meta)[0]])) : undefined;

    node.setOutputParamHandler = handler => node.outputHandler = handler;

    node.getOutputParamHandler = () => node.outputHandler;

    node.setComputeHandler = handler => node.computeHandler = handler;

    node.getComputeHandler = () => node.computeHandler;

    var findPath = (o, p) => {
      if (typeof o !== "object") return false;

      if (o.address) {
        if (o.address === p) return true;
        return false;
      }

      for (var k in o) {
        if (findPath(o[k], p)) return true;
      }

      return false;
    };

    node.setParamValue = (path, value) => {
      node.cachedEvents.push({
        type: "param",
        data: {
          path,
          value
        }
      });

      if (node.voices) {
        if (node.effect && findPath(node.effectMeta.ui, path)) node.effect.setParamValue(node.$effect, node.pathTable$[path], value);else node.dspVoices$.forEach($voice => node.factory.setParamValue($voice, node.pathTable$[path], value));
      } else {
        node.factory.setParamValue(node.$dsp, node.pathTable$[path], value);
      }
    };

    node.getParamValue = path => {
      if (node.voices) {
        if (node.effect && findPath(node.effectMeta.ui, path)) return node.effect.getParamValue(node.$effect, node.pathTable$[path]);
        return node.factory.getParamValue(node.dspVoices$[0], node.pathTable$[path]);
      }

      return node.factory.getParamValue(node.$dsp, node.pathTable$[path]);
    };

    node.getParams = () => node.inputsItems;

    node.getJSON = () => {
      if (node.voices) {
        var o = node.dspMeta;
        var e = node.effectMeta;

        var r = _objectSpread({}, o);

        if (e) {
          r.ui = [{
            type: "tgroup",
            label: "Sequencer",
            items: [{
              type: "vgroup",
              label: "Instrument",
              items: o.ui
            }, {
              type: "vgroup",
              label: "Effect",
              items: e.ui
            }]
          }];
        } else {
          r.ui = [{
            type: "tgroup",
            label: "Polyphonic",
            items: [{
              type: "vgroup",
              label: "Voices",
              items: o.ui
            }]
          }];
        }

        return JSON.stringify(r);
      }

      return JSON.stringify(node.dspMeta);
    };

    node.getUI = () => {
      if (node.voices) {
        var o = node.dspMeta;
        var e = node.effectMeta;

        if (e) {
          return [{
            type: "tgroup",
            label: "Sequencer",
            items: [{
              type: "vgroup",
              label: "Instrument",
              items: o.ui
            }, {
              type: "vgroup",
              label: "Effect",
              items: e.ui
            }]
          }];
        }

        return [{
          type: "tgroup",
          label: "Polyphonic",
          items: [{
            type: "vgroup",
            label: "Voices",
            items: o.ui
          }]
        }];
      }

      return node.dspMeta.ui;
    };

    node.destroy = () => {
      node.destroyed = true;
      delete node.outputHandler;
      delete node.computeHandler;
      delete node.plotHandler;
    }; // Init resulting DSP


    node.setup();
    return node;
  }
  /**
   * Create a ScriptProcessorNode Web Audio object
   * by loading and compiling the Faust wasm file
   *
   * @param {TAudioNodeOptions} optionsIn
   * @returns {Promise<FaustScriptProcessorNode>} a Promise for valid WebAudio ScriptProcessorNode object or null
   */


  getNode(optionsIn) {
    var _this = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var compiledDsp, audioCtx, bufferSizeIn, voices, plotHandler, bufferSize, node, effectInstance, mixerInstance, memory, importObject, mixerObject, dspInstance;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              compiledDsp = optionsIn.compiledDsp, audioCtx = optionsIn.audioCtx, bufferSizeIn = optionsIn.bufferSize, voices = optionsIn.voices, plotHandler = optionsIn.plotHandler;
              bufferSize = bufferSizeIn || 512;
              _context.prev = 2;
              memory = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createWasmMemory"])(voices, compiledDsp.dspMeta, compiledDsp.effectMeta, bufferSize);
              importObject = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createWasmImport"])(voices, memory);

              if (!voices) {
                _context.next = 16;
                break;
              }

              mixerObject = {
                imports: {
                  print: console.log
                },
                memory: {
                  memory
                }
              }; // eslint-disable-line no-console

              mixerInstance = new WebAssembly.Instance(_utils__WEBPACK_IMPORTED_MODULE_3__["mixer32Module"], mixerObject);
              _context.prev = 8;
              _context.next = 11;
              return WebAssembly.instantiate(compiledDsp.effectModule, importObject);

            case 11:
              effectInstance = _context.sent;
              _context.next = 16;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](8);

            case 16:
              _context.next = 18;
              return WebAssembly.instantiate(compiledDsp.dspModule, importObject);

            case 18:
              dspInstance = _context.sent;
              node = _this.initNode(compiledDsp, dspInstance, effectInstance, mixerInstance, audioCtx, bufferSize, memory, voices, plotHandler);
              _context.next = 26;
              break;

            case 22:
              _context.prev = 22;
              _context.t1 = _context["catch"](2);

              _this.faust.error("Faust " + compiledDsp.shaKey + " cannot be loaded or compiled");

              throw _context.t1;

            case 26:
              return _context.abrupt("return", node);

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 22], [8, 14]]);
    }))();
  }

}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Faust, FaustAudioWorkletNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Faust__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faust */ "./src/Faust.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Faust", function() { return _Faust__WEBPACK_IMPORTED_MODULE_0__["Faust"]; });

/* harmony import */ var _FaustAudioWorkletNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FaustAudioWorkletNode */ "./src/FaustAudioWorkletNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaustAudioWorkletNode", function() { return _FaustAudioWorkletNode__WEBPACK_IMPORTED_MODULE_1__["FaustAudioWorkletNode"]; });




/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: ab2str, str2ab, atoUint6, atoab, heap2Str, mixer32Module, midiToFreq, remap, findPath, findPathClosure, createWasmImport, createWasmMemory, args2String, argsTbl2String, toArgv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab2str", function() { return ab2str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str2ab", function() { return str2ab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atoUint6", function() { return atoUint6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atoab", function() { return atoab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heap2Str", function() { return heap2Str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixer32Module", function() { return mixer32Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "midiToFreq", function() { return midiToFreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remap", function() { return remap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPath", function() { return findPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPathClosure", function() { return findPathClosure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWasmImport", function() { return createWasmImport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWasmMemory", function() { return createWasmMemory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "args2String", function() { return args2String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argsTbl2String", function() { return argsTbl2String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArgv", function() { return toArgv; });
/* harmony import */ var _wasm_mixer32_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm/mixer32.wasm */ "./src/wasm/mixer32.wasm");
/* eslint-disable @typescript-eslint/camelcase */

/* eslint-disable object-property-newline */

var ab2str = buf => buf ? String.fromCharCode.apply(null, new Uint8Array(buf)) : null;
var str2ab = str => {
  if (!str) return null;
  var buf = new ArrayBuffer(str.length);
  var bufView = new Uint8Array(buf);

  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }

  return buf;
};
var atoUint6 = nChr => {
  // eslint-disable-line arrow-body-style
  return nChr > 64 && nChr < 91 ? nChr - 65 : nChr > 96 && nChr < 123 ? nChr - 71 : nChr > 47 && nChr < 58 ? nChr + 4 : nChr === 43 ? 62 : nChr === 47 ? 63 : 0;
};
var atoab = (sBase64, nBlocksSize) => {
  if (typeof window.atob === "function") return str2ab(atob(sBase64));
  var sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, "");
  var nInLen = sB64Enc.length;
  var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
  var taBytes = new Uint8Array(nOutLen);

  for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
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
var heap2Str = buf => {
  var str = "";
  var i = 0;

  while (buf[i] !== 0) {
    str += String.fromCharCode(buf[i++]);
  }

  return str;
};
var mixer32Module = new WebAssembly.Module(atoab(_wasm_mixer32_wasm__WEBPACK_IMPORTED_MODULE_0__["default"].split(",")[1]));
var midiToFreq = note => 440.0 * Math.pow(2, (note - 69) / 12);
var remap = (v, mn0, mx0, mn1, mx1) => (v - mn0) / (mx0 - mn0) * (mx1 - mn1) + mn1;
var findPath = (o, p) => {
  if (typeof o !== "object") return false;

  if (o.address) {
    return o.address === p;
  }

  for (var k in o) {
    if (findPath(o[k], p)) return true;
  }

  return false;
};
var findPathClosure = () => {
  var findPath = (o, p) => {
    if (typeof o !== "object") return false;

    if (o.address) {
      return o.address === p;
    }

    for (var k in o) {
      if (findPath(o[k], p)) return true;
    }

    return false;
  };

  return findPath;
};
var createWasmImport = (voices, memory) => ({
  env: {
    memory: voices ? memory : undefined,
    memoryBase: 0,
    tableBase: 0,
    _abs: Math.abs,
    // Float version
    _acosf: Math.acos,
    _asinf: Math.asin,
    _atanf: Math.atan,
    _atan2f: Math.atan2,
    _ceilf: Math.ceil,
    _cosf: Math.cos,
    _expf: Math.exp,
    _floorf: Math.floor,
    _fmodf: (x, y) => x % y,
    _logf: Math.log,
    _log10f: Math.log10,
    _max_f: Math.max,
    _min_f: Math.min,
    _remainderf: (x, y) => x - Math.round(x / y) * y,
    _powf: Math.pow,
    _roundf: Math.fround,
    _sinf: Math.sin,
    _sqrtf: Math.sqrt,
    _tanf: Math.tan,
    _acoshf: Math.acosh,
    _asinhf: Math.asinh,
    _atanhf: Math.atanh,
    _coshf: Math.cosh,
    _sinhf: Math.sinh,
    _tanhf: Math.tanh,
    // Double version
    _acos: Math.acos,
    _asin: Math.asin,
    _atan: Math.atan,
    _atan2: Math.atan2,
    _ceil: Math.ceil,
    _cos: Math.cos,
    _exp: Math.exp,
    _floor: Math.floor,
    _fmod: (x, y) => x % y,
    _log: Math.log,
    _log10: Math.log10,
    _max_: Math.max,
    _min_: Math.min,
    _remainder: (x, y) => x - Math.round(x / y) * y,
    _pow: Math.pow,
    _round: Math.fround,
    _sin: Math.sin,
    _sqrt: Math.sqrt,
    _tan: Math.tan,
    _acosh: Math.acosh,
    _asinh: Math.asinh,
    _atanh: Math.atanh,
    _cosh: Math.cosh,
    _sinh: Math.sinh,
    _tanh: Math.tanh,
    table: new WebAssembly.Table({
      initial: 0,
      element: "anyfunc"
    })
  }
});
var createWasmMemory = (voicesIn, dspMeta, effectMeta, bufferSize) => {
  // Hack : at least 4 voices (to avoid weird wasm memory bug?)
  var voices = Math.max(4, voicesIn); // Memory allocator

  var ptrSize = 4;
  var sampleSize = 4;

  var pow2limit = x => {
    var n = 65536; // Minimum = 64 kB

    while (n < x) {
      n *= 2;
    }

    return n;
  };

  var effectSize = effectMeta ? effectMeta.size : 0;
  var memorySize = pow2limit(effectSize + dspMeta.size * voices + (dspMeta.inputs + dspMeta.outputs * 2) * (ptrSize + bufferSize * sampleSize)) / 65536;
  memorySize = Math.max(2, memorySize); // As least 2

  return new WebAssembly.Memory({
    initial: memorySize,
    maximum: memorySize
  });
};
var args2String = args => {
  var argStr = "";

  var _loop = function _loop(key) {
    var arg = args[key];
    if (Array.isArray(arg)) arg.forEach(s => argStr += key + " " + s + " ");else argStr += key + " " + arg + " ";
  };

  for (var key in args) {
    _loop(key);
  }

  return argStr;
};
var argsTbl2String = args => {
  var argStr = "";
  args.forEach(item => {
    argStr += item + " ";
  });
  return argStr;
};
var toArgv = args => {
  var argv = [];

  var _loop2 = function _loop2(key) {
    var arg = args[key];
    if (Array.isArray(arg)) arg.forEach(s => argv.push(key, s));else if (typeof arg === "number") argv.push(key, arg.toString());else argv.push(key, arg);
  };

  for (var key in args) {
    _loop2(key);
  }

  return argv;
};

/***/ }),

/***/ "./src/wasm/mixer32.wasm":
/*!*******************************!*\
  !*** ./src/wasm/mixer32.wasm ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:application/wasm;base64,AGFzbQEAAAABj4CAgAACYAN/f38AYAR/f39/AX0CkoCAgAABBm1lbW9yeQZtZW1vcnkCAAIDg4CAgAACAAEHmoCAgAACC2NsZWFyT3V0cHV0AAAIbWl4Vm9pY2UAAQqKgoCAAALigICAAAEDfwJAQQAhBQNAAkAgAiAFQQJ0aigCACEDQQAhBANAAkAgAyAEQQJ0akMAAAAAOAIAIARBAWohBCAEIABIBEAMAgUMAQsACwsgBUEBaiEFIAUgAUgEQAwCBQwBCwALCwsLnYGAgAACBH8DfQJ9QQAhB0MAAAAAIQgDQAJAQQAhBiACIAdBAnRqKAIAIQQgAyAHQQJ0aigCACEFA0ACQCAEIAZBAnRqKgIAIQkgCCAJi5chCCAFIAZBAnRqKgIAIQogBSAGQQJ0aiAKIAmSOAIAIAZBAWohBiAGIABIBEAMAgUMAQsACwsgB0EBaiEHIAcgAUgEQAwCBQwBCwALCyAIDwsL");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map