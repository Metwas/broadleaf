"use strict";
/*
     MIT License

     Copyright (c) 2019 Metwas

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in all
     copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("./utils");
/**
 * Object.keys polyfill code
 *
 * @returns {Function}
 */
function keysPolyfill() {
    // create local reference hasOwnProperty
    const has = utils.has;
    /**
     * Iterates through the provided parameter object
     *
     * @param {Any} obj
     * @returns {Array} Array of object defined keys
     */
    return function (obj) {
        if (!utils.isFunction(obj) && (utils.isNullOrUndefined(obj) || !utils.isObject(obj))) {
            console.error("Attempted to get keys from a non-object parameter!");
            return [];
        }
        // Container to store object keys
        const results = [];
        // iterate through the object keys
        for (let key in obj) {
            // validate ownership of the key
            if (has(obj, key)) {
                results.push(key);
            }
        }
        // return keys
        return results;
    };
}
exports.keysPolyfill = keysPolyfill;
;
/**
 * Polyfill code for Object.assign invocation
 *
 * @param {Object} target obj
 * @throws {Error} Throws an error if the target parameter returned null
 * @returns {Object} A new object which has the properties assigned to it
 * @remarks If not supported , it will create a poly fill code.
 * Some good documentation can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
function assignPolyfill(target, ...args) {
    "use scrict;";
    if (utils.isNullOrUndefined(target)) {
        throw new Error("Provided target cannot be null or undefined");
    }
    // convert provided argument 'target' to an object
    var _object = Object(target);
    // copy targeted properties to all provided arguments starting from index 1
    var index = 1;
    var length = utils.isArrayLike(args) ? arguments.length : 0;
    for (; index < length; index++) {
        // the next object within the arguments array
        var obj = arguments[index];
        if (!utils.isNullOrUndefined(obj)) {
            // iterate through the object to obtain each property
            for (var _key in obj) {
                // ensure the object declares this property
                if (utils.has(obj, _key)) {
                    _object[_key] = obj[_key];
                }
            }
        }
    }
    return _object;
}
exports.assignPolyfill = assignPolyfill;
;
