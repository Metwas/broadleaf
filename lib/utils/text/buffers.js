"use strict";
/*
     MIT License

     Copyright (c) 2020 Metwas

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
var utils_1 = require("../utils");
/**
 * The default ISO8859-1 standard 16-bit charactor @see ArrayBuffer size
 *
 * @param {ArrayBuffer} buffer
 * @returns {Uint16Array}
 */
var createUint16Array = function (buffer) { return new Uint16Array(buffer); };
/**
 * ISO8859-1 standard 8-bit charactor @see ArrayBuffer size
 *
 * @param {ArrayBuffer} buffer
 * @returns {Uint8Array}
 */
var createUint8Array = function (buffer) { return new Uint8Array(buffer); };
/**
 * Gets a @see ArrayBuffer specific to a given encoding iso standard
 *
 * @param {Number} length
 * @param {String} encoding
 * @returns {BufferedView}
 */
var getEncodedBufferView = function (length, encoding) {
    /**
     * Switch on supported encoding standards
     */
    var buffer = new ArrayBuffer(0);
    switch (encoding) {
        case "utf-8":
            buffer = typeof length === "number" ? new ArrayBuffer(length) : (Buffer.isBuffer(length) ? length : buffer);
            return { view: createUint8Array(buffer), buffer: buffer };
        /*
         * Default
         */
        case "iso8859-1":
        case "utf-16":
        default:
            buffer = typeof length === "number" ? new ArrayBuffer(length * 2) : (Buffer.isBuffer(length) ? length : buffer);
            return { view: createUint8Array(buffer), buffer: buffer };
    }
};
/**
 * Converts a given string into a @see Buffer
 *
 * @param {String} value
 * @param {String} encoding Optional charactor encoding definition, defaults to ISO5589-1 (utf-16)
 * @returns {Buffer}
 * @throws {TypeError} if value was not a valid string
 */
function fromString(value, encoding) {
    if (encoding === void 0) { encoding = "iso8859-1"; }
    /**
     * Validate string parameter
     */
    if (!utils_1.isString(value)) {
        throw new TypeError("Value provided was not a valid string type");
    }
    var length = value.length;
    var bufferedView = getEncodedBufferView(length, encoding);
    /**
     * Assign each charactor to the respected position within the buffer
     */
    var index = 0;
    for (; index < length; index++) {
        bufferedView.view[index] = value.charCodeAt(index);
    }
    /**
     * Allocate a @see Buffer from the @see ArrayBuffer
     */
    return Buffer.from(bufferedView.buffer);
}
exports.fromString = fromString;
;
/**
 * Converts a given buffer to its string representation
 *
 * @param {Buffer | ArrayBuffer} buffer
 * @param {String} encoding
 * @returns {String}
 */
function toString(buffer, encoding) {
    return String.fromCharCode.apply(null, getEncodedBufferView(buffer, encoding).view);
}
exports.toString = toString;
;
