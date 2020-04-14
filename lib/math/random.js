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
//===================== End imports =====================//
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
        if (seed === void 0) { seed = null; }
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
     * Gets a new random float value between 0 - 1
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
