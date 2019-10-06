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

/**
 * Converts a decimal value into its hexidecimal format
 *
 * @param {Number} value
 * @param {Number} baseFactor The base factor size for the return value
 * @returns {String} The string hexidecimal version for the provided number
 */
export function toHexidecimal(value: number, baseFactor: number): string {

     if (isNaN(value) || !isFinite(value)) {

          value = 0;

     }

     var _hexString = "#";
     var _value = value.toString(16);
     var _length = baseFactor;

     for (var i = 0; i < _length; i++) {

          _hexString += "0";

     }

     return _hexString + _value;

};

/**
 * Converts a provided number to its binary string representation
 *
 * @param {Number} value The number to be converted to a binary string
 * @returns {String} Returns a binary string representation for the provided value
 */
export function toBinary(value: number): string {

     var _bin = "";

     if (typeof value !== "number") {

          return "";

     }

     while (value > 0) {

          _bin = (value & 1) + _bin;
          value = value >> 1;
     }

     return padLeft(_bin, "0", 8);

};

/**
 * Prepends a charactor over a provided iteration count to the current string instance
 *
 * @param {String} char The charactor to prepend to the current string instance
 * @param {Number} count The length of padding to prepend
 * @returns {String} returns a readable string format of the current system time, e.g: 11:48:20
 */
export function padLeft(value: string, char: string, count: number): string {

     var _char = "";
     var _lengthToAttach = 0;

     if (value.length < count) {

          _lengthToAttach = count - value.length;

          for (var i = 0; i < _lengthToAttach; i++) {

               _char += char;

          }

          value = _char.concat(value);
     }

     return value;

};
