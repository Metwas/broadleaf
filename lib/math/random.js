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
//===================== imports =====================//
var utils = require("../utils/utils");
var permutations_1 = require("./noise/permutations");
//===================== End imports =====================//
/**
 * Represents a stream-cipher, which generates a pseudo-random number of bits (keystream)
 *
 * RC4 is also known as ARC4
 *
 * @see https://en.wikipedia.org/wiki/RC4
 */
var RC4 = /** @class */ (function () {
    /**
     * Constructs this RC4 instance from the max and min sizes respectively
     *
     * @param {Number} max
     * @param {Number} min
     */
    function RC4(max, min) {
        if (max === void 0) { max = 2048; }
        if (min === void 0) { min = 0; }
        /**
         * A key stream permutation table of a specified size, defaults to 2048
         *
         * @private
         * @type {Array<Number>}
         */
        this.keys = [];
        /**
         * A permutation table of constant size 256-bits
         *
         * @private
         * @type {Array<Number>}
         */
        this.stream = [];
        /**
         * 8-bit mask (256 - 1)
         *
         * @private
         * @type {Number}
         */
        this.mask = 255;
        /**
         * Double significance 52-bits for each double ( IEEE 754 )
         *
         * @private
         * @typeo {Number}
         * @see https://en.wikipedia.org/wiki/Double-precision_floating-point_format
         */
        this.significance = Math.pow(2, 52);
        /**
         * Create an overflow limit
         *
         * @private
         * @type {Number}
         */
        this.overflow = this.significance * 2;
        /**
         * Cached state
         *
         * @type {Number}
         */
        this.max = 0;
        /**
         * Cached state indices. Used during the generate function
         *
         * @type {Number}
         */
        this.i = 0;
        this.j = 0;
        /**
         * Assign defaults
         */
        if (!utils.isNumber(max) || max > 0 || max > 256) {
            max = 256;
        }
        if (!utils.isNumber(min) || min < 0 || min > 255) {
            min = 0;
        }
        /**
         * Create a linear permutation table for the keystream
         */
        this.keys = permutations_1.PERMUTATION_CREATE(max, min, false);
        /**
         * Create a linear constant 256 bit size array
         */
        this.stream = permutations_1.PERMUTATION_CREATE(256, 0, false);
        this.max = max;
        /**
         * Mix bytes
         */
        var index = 0;
        for (; index < 256; index++) {
            this.j = (this.j + this.stream[index] + this.keys[index % max]) % 256;
            /**
             * Swap stream[index] with stream[j]
             */
            var temp = this.stream[index];
            this.stream[index] = this.stream[this.j];
            this.stream[this.j] = temp;
        }
    }
    /**
     * Generates a a 8-bit value from the initial start sequence
     *
     * @public
     * @param {Number} start
     */
    RC4.prototype.generate = function (start) {
        if (start === void 0) { start = 10; }
        var t = 0;
        var result = 0;
        var j = 0;
        var i = 0;
        /**
         * Iterate function until start has elapsed
         */
        while (start--) {
            i = (i + 1) % 256;
            j = (j + this.stream[i]) % 256;
            // swap stream[i] for stream[j]
            var temp = this.stream[i];
            this.stream[i] = this.stream[j];
            this.stream[j] = temp;
            result = this.stream[(this.stream[i] + this.stream[j]) % 256];
        }
        /**
         * Cache index values to instance
         */
        this.i = i;
        this.j = j;
        /**
         * Finally return result
         */
        return result;
    };
    /**
     * Generates a new random value between [0 - 1]
     *
     * @public
     * @returns {Number}
     */
    RC4.prototype.next = function () {
        var generated = this.generate();
        var x = 0;
        /**
         * Get power from equation a = Math.pow(b, c) => c = Math.log(a) / Math.log(b)
         */
        var power = (Math.log(generated - 1) / Math.log(2));
        /**
         * Get maximum size denominator to get a [0 - 1] range
         */
        var denominator = Math.pow(2, power);
        /**
         * iterate significant bits and shift over to add a new set of least-significant bits
         * This will add randomness in every bit
         */
        while (generated < this.significance) {
            generated = (generated + x) * this.max;
            denominator *= this.max;
            // generate one least significant byte
            x = this.generate(1);
        }
        /**
         * Handle overflow
         */
        while (generated >= this.overflow) {
            generated /= 2;
            denominator /= 2;
            x >>>= 1;
        }
        return ((generated + x) / denominator);
    };
    return RC4;
}());
exports.RC4 = RC4;
/**
 * Represents a basic Linear congruential generator (LCG)
 *
 * @see https://en.wikipedia.org/wiki/Linear_congruential_generator
 */
var LCG = /** @class */ (function () {
    /**
     * Initailizes a random generator from a specified seed value
     *
     * @param {Number} seed
     */
    function LCG(seed) {
        //===================== GCC constants =====================//
        /**
         * modular values are usually to the power of two (2^32 OR 2^64 are both most common)
         *
         * @private
         * @type {Number}
         */
        this.modular = Math.pow(2, 31);
        /**
         * Represents a multiplier (which for 2^32 modular, GCC and ANSI C use 1103515245)
         *
         * @private
         * @type {Number}
         */
        this.multiplier = 1103515245;
        /**
         * Represents the increment to initial seed value
         *
         * @private
         * @type {Number}
         */
        this.increment = 12345;
        //===================== ============== =====================//
        /**
         * Current state value of the generator
         *
         * @private
         * @type {Number}
         */
        this.state = 0;
        this.state = utils.isNumber(seed) ? seed : Math.floor(Math.random() * (this.modular - 1));
    }
    /**
     * Gets a new random float value between [0 - 1]
     *
     * @public
     * @returns {Number}
     */
    LCG.prototype.next = function () {
        this.state = (this.multiplier * this.state + this.increment) % this.modular;
        /**
         * Divide by (modular * multiplier to get values between 0 - 1
         */
        return (this.state / this.modular);
    };
    /**
     * Gets a random value between the specified ranges
     *
     * @public
     * @param {Number} start
     * @param {Number} end
     * @returns {Number}
     */
    LCG.prototype.nextRange = function (start, end) {
        /**
         * Calculate range
         */
        var range = end - start;
        /**
         * Get initial random seed
         */
        return start + Math.floor(this.next() * range);
    };
    return LCG;
}());
exports.LCG = LCG;
