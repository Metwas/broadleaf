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
var random_1 = require("../random");
var gradients_1 = require("./gradients");
var utils_1 = require("../../utils/utils");
var permutations_1 = require("./permutations");
//===================== End imports =====================//
/**
 * This class defines noise of various dimensions with customizable gradient and permutations options
 * for a given octave
 *
 * @see https://stackoverflow.com/questions/18279456/any-simplex-noise-tutorials-or-resources
 */
var Simplex_octave = /** @class */ (function () {
    /**+
     * Initializes this @see Simplex_octave instance from a specified seed. Defaults to a random seed generation
     *
     * @param {Number} seed If set to null or zero , a random seed will be generated
     */
    function Simplex_octave(seed) {
        if (seed === void 0) { seed = 0; }
        /**
         * Default number of swaps to perform
         *
         * @private
         * @type {Number}
         */
        this.DEFAULT_SWAP_COUNT = 400;
        /**
         * Get a randomly sorted 8-bit permutation table
         *
         * @private
         * @type {Array<Number>}
         */
        this.permutation_table = this.getPermutationTable();
        /**
         * Double permutation index wrappers
         *
         * @private
         * @type {Array<Number>}
         */
        this.double_permutation_table = new Array(512);
        this.double_permutation_table_mod12 = new Array(512);
        /**
         * Generate a default seed value
         */
        if (utils_1.isNullOrUndefined(seed) || seed <= 0) {
            seed = Math.random();
        }
        /**
         * Create seeded random number generator
         */
        var random = new random_1.LCG(seed);
        /**
         * Perform swaps configured from the @see DEFAULT_SWAP_COUNT
         */
        var index = 0;
        for (; index < this.DEFAULT_SWAP_COUNT; index++) {
            var x0 = random.nextRange(0, this.permutation_table.length);
            var x1 = random.nextRange(0, this.permutation_table.length);
            /**
             * Swap @see permutation_table index values
             */
            var temp = this.permutation_table[x0];
            this.permutation_table[x0] = this.permutation_table[x1];
            this.permutation_table[x1] = temp;
        }
        /**
         * Handle double permutations
         */
        index = 0;
        for (; index < 512; index++) {
            this.double_permutation_table[index] = this.permutation_table[index % 255];
            this.double_permutation_table_mod12[index] = (this.double_permutation_table[index] % 12);
        }
    }
    /**
     * 4th dimensional noise definition
     *
     * @public
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @param {Number} w
     * @returns {Number}
     */
    Simplex_octave.prototype.noise = function (x, y, z, w) {
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (w === void 0) { w = 0; }
        /**
         * Only supporting 2d noise for now
         */
        if (utils_1.isNumber(x) && utils_1.isNumber(y)) {
            return this.noise2d(x, y);
        }
        /**
         * else return 0
         */
        else {
            return 0;
        }
    };
    /**
     * 2nd dimensional noise implementation
     *
     * @public
     * @param {Number} x
     * @param {Number} y
     * @returns {Number}
     */
    Simplex_octave.prototype.noise2d = function (x, y) {
        /**
         * Get the noise contribution triangle corners (dimension + 1)
         */
        var n0 = 0;
        var n1 = 0;
        var n2 = 0;
        // skew space to get cell space
        var s = (x + y) * Simplex_octave.F2;
        var i = Math.floor(x + s);
        var j = Math.floor(y + s);
        var t = (i + j) * Simplex_octave.G2;
        // skew back to x,y space
        var X0 = i - t;
        var Y0 = j - t;
        // distance from cell origin
        var x0 = x - X0;
        var y0 = x - Y0;
        // create triangle offsets
        var i1 = 0;
        var j1 = 1;
        if (x0 > y0) {
            i1 = 1;
            j1 = 0;
        }
        var x1 = x0 - i1 + Simplex_octave.G2;
        var y1 = y0 - j1 + Simplex_octave.G2;
        var x2 = x0 - 1.0 + 2.0 * Simplex_octave.G2;
        var y2 = y0 - 1.0 + 2.0 * Simplex_octave.G2;
        // calculate hashed gradient indices
        var ii = i & 255;
        var jj = j & 255;
        var gi0 = this.double_permutation_table_mod12[ii + this.double_permutation_table_mod12[jj]];
        var gi1 = this.double_permutation_table_mod12[ii + i1 + this.double_permutation_table_mod12[jj + j1]];
        var gi2 = this.double_permutation_table_mod12[ii + 1 + this.double_permutation_table_mod12[jj + 1]];
        /**
         * Calculate contribution from the three corners
         */
        /**
         * Corner 1
         */
        var t0 = 0.5 - (x0 * x0) - (y0 * y0);
        if (t0 < 0) {
            n0 = 0;
        }
        else {
            t0 *= t0;
            n0 = t0 * t0 * gradients_1.GRAD_3D[gi0].dot(x0, y0);
        }
        /**
         * Corner 2
         */
        var t1 = 0.5 - (x1 * x1) - (y1 * y1);
        if (t1 < 0) {
            n1 = 0;
        }
        else {
            t1 *= t1;
            n1 = t1 * t1 * gradients_1.GRAD_3D[gi1].dot(x1, y1);
        }
        /**
         * Corner 3
         */
        var t2 = 0.5 - (x2 * x2) - (y2 * y2);
        if (t2 < 0) {
            n2 = 0;
        }
        else {
            t2 *= t2;
            n2 = t2 * t2 * gradients_1.GRAD_3D[gi2].dot(x2, y2);
        }
        // finally, add constributions to get a final noise value between [-1,1]
        return 70 * (n0 + n1 + n2);
    };
    /**
     * Gets a permutation table
     *
     * @param {PERMUTATION_OPTIONS} options
     * @returns {Array<number>}
     */
    Simplex_octave.prototype.getPermutationTable = function (options) {
        /**
         * Create a permutation table from the options specified
         */
        if (typeof options !== "undefined") {
            return permutations_1.PERMUTATION_CREATE(options.max, options.min, options.resolution, utils_1.isNullOrUndefined(options.fixed) ? true : (!options.fixed));
        }
        /**
         * By default, return a pre-defined random 8-bit table
         */
        return permutations_1.PERMUTATION_FIXED_256;
    };
    ;
    //===================== Skewing factors =====================//
    Simplex_octave.F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
    Simplex_octave.G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
    Simplex_octave.F3 = 1.0 / 3.0;
    Simplex_octave.G3 = 1.0 / 6.0;
    Simplex_octave.F4 = (Math.sqrt(5.0) - 1.0) / 4.0;
    Simplex_octave.G4 = (5.0 - Math.sqrt(5.0)) / 20.0;
    return Simplex_octave;
}());
exports.Simplex_octave = Simplex_octave;
;