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

//===================== imports =====================//

import { LCG } from "../random";
import { GRAD_3D, GRAD_4D, gradient } from "./gradients";
import { isNullOrUndefined, clone, isNumber } from "../../utils/utils";
import { PERMUTATION_FIXED_256, PERMUTATION_CREATE, PERMUTATION_OPTIONS } from "./permutations";

//===================== End imports =====================//

/**
 * This class defines noise of various dimensions with customizable gradient and permutations options
 * for a given octave
 * 
 * @see https://stackoverflow.com/questions/18279456/any-simplex-noise-tutorials-or-resources
 */
export class Simplex_octave {

    /**
     * Default number of swaps to perform
     * 
     * @private
     * @type {Number}
     */
    private DEFAULT_SWAP_COUNT: number = 400;

    /**
     * Get a randomly sorted 8-bit permutation table
     * 
     * @private
     * @type {Array<Number>}
     */
    private permutation_table: Array<number> = this.getPermutationTable();

    /**
     * Double permutation index wrappers
     * 
     * @private
     * @type {Array<Number>}
     */
    private double_permutation_table: Array<number> = new Array<number>(512);
    private double_permutation_table_mod12: Array<number> = new Array<number>(512);

    /**+
     * Initializes this @see Simplex_octave instance from a specified seed. Defaults to a random seed generation
     * 
     * @param {Number} seed If set to null or zero , a random seed will be generated
     */
    public constructor(seed: number = 0) {

        // Generate a default seed value
        if (isNullOrUndefined(seed) || seed <= 0) {
            seed = Math.random();
        }

        // Create seeded random number generator
        const random = new LCG(seed);

        /** Perform swaps configured from the @see DEFAULT_SWAP_COUNT */
        let index: number = 0;
        for (; index < this.DEFAULT_SWAP_COUNT; index++) {

            let x0: number = random.nextRange(0, this.permutation_table.length);
            let x1: number = random.nextRange(0, this.permutation_table.length);
            /**
             * Swap @see permutation_table index values
             */
            const temp: number = this.permutation_table[x0];
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

    //===================== Skewing factors =====================//

    static F2: number = 0.5 * (Math.sqrt(3.0) - 1.0);
    static G2: number = (3.0 - Math.sqrt(3.0)) / 6.0;
    static F3: number = 1.0 / 3.0;
    static G3: number = 1.0 / 6.0;
    static F4: number = (Math.sqrt(5.0) - 1.0) / 4.0;
    static G4: number = (5.0 - Math.sqrt(5.0)) / 20.0;

    //===================== End Skewing factors =====================//

    //===================== Functions =====================//

    /**
     * Noise function for one-dimensional noise
     * 
     * @public
     * @param {Number} x 
     * @returns {Number}
     */
    public noise(x: number): number;

    /**
     * 2nd dimensional noise definition
     * 
     * @public
     * @param {Number} x
     * @param {Number} y
     * @returns {Number}
     */
    public noise(x: number, y: number): number

    /**
     * 3rd dimensional noise definition
     * 
     * @public
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @returns {Number}
     */
    public noise(x: number, y: number, z: number): number

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
    public noise(x: number = 0, y: number = 0, z: number = 0, w: number = 0): number {

        // 2d noise
        if (arguments.length <= 2) {
            return this.noise2d(x, y);
        }
        // 3d noise
        else if (arguments.length === 3) {
            return this.noise3d(x, y, z);
        }

        return 0;

    }

    /**
     * 2nd dimensional noise implementation
     * 
     * @public
     * @param {Number} x
     * @param {Number} y
     * @returns {Number}
     */
    private noise2d(x: number, y: number): number {

        /**
         * Get the noise contribution triangle corners (dimension + 1)
         */
        let n0: number = 0;
        let n1: number = 0;
        let n2: number = 0;

        // skew space to get cell space
        let s: number = (x + y) * Simplex_octave.F2;
        let i: number = Math.floor(x + s);
        let j: number = Math.floor(y + s);
        let t: number = (i + j) * Simplex_octave.G2;

        // skew back to x,y space
        let X0: number = i - t;
        let Y0: number = j - t;

        // distance from cell origin
        let x0: number = x - X0;
        let y0: number = y - Y0;

        // create triangle offsets
        let i1: number = 0;
        let j1: number = 1;
        if (x0 > y0) {
            i1 = 1; j1 = 0;
        }

        let x1: number = x0 - i1 + Simplex_octave.G2;
        let y1: number = y0 - j1 + Simplex_octave.G2;
        let x2: number = x0 - 1.0 + 2.0 * Simplex_octave.G2;
        let y2: number = y0 - 1.0 + 2.0 * Simplex_octave.G2;

        // calculate hashed gradient indices
        let ii: number = i & 255;
        let jj: number = j & 255;
        let gi0: number = this.double_permutation_table_mod12[ii + this.double_permutation_table_mod12[jj]] % 12;
        let gi1: number = this.double_permutation_table_mod12[ii + i1 + this.double_permutation_table_mod12[jj + j1]] % 12;
        let gi2: number = this.double_permutation_table_mod12[ii + 1 + this.double_permutation_table_mod12[jj + 1]] % 12;

        /**
         * Calculate contribution from the three corners
         */

        /** Corner 1 */
        let t0: number = 0.5 - (x0 * x0) - (y0 * y0);
        if (t0 < 0) {
            n0 = 0;
        }
        else {

            t0 *= t0;
            n0 = t0 * t0 * GRAD_3D[gi0].dot(x0, y0);

        }
        /**
         * Corner 2
         */
        let t1: number = 0.5 - (x1 * x1) - (y1 * y1);
        if (t1 < 0) {
            n1 = 0;
        }
        else {

            t1 *= t1;
            n1 = t1 * t1 * GRAD_3D[gi1].dot(x1, y1);

        }
        /**
         * Corner 3
         */
        let t2 = 0.5 - (x2 * x2) - (y2 * y2);
        if (t2 < 0) {
            n2 = 0;
        }
        else {

            t2 *= t2;
            n2 = t2 * t2 * GRAD_3D[gi2].dot(x2, y2);

        }

        // finally, add constributions to get a final noise value between [-1,1]
        return 70 * (n0 + n1 + n2);

    }

    /**
     * 3rd dimensional noise implementation
     * 
     * @public
     * @param {Number} x
     * @param {Number} y
     * @returns {Number}
     */
    public noise3d(x: number, y: number, z: number): number {

        /**
         * Get the noise contribution triangle corners (dimension + 1)
         */
        let n0: number = 0;
        let n1: number = 0;
        let n2: number = 0;
        let n3: number = 0;

        // skew factor
        let s = (x + y + z) * Simplex_octave.F3;
        let i = Math.floor(x + s);
        let j = Math.floor(y + s);
        let k = Math.floor(z + s);

        // unskew
        let t = (i + j + k) * Simplex_octave.G3;
        let X0 = i - t;
        let Y0 = j - t;
        let Z0 = k - t;
        // x,y,z distance from cell origin
        let x0 = x - X0;
        let y0 = y - Y0;
        let z0 = z - Z0;

        // second corner offset
        let i1: number = 0;
        let j1: number = 0;
        let k1: number = 0;
        // third corner offset
        let i2: number = 0;
        let j2: number = 0;
        let k2: number = 0;

        // get simplex within the 3d shape
        if (x0 >= y0) {

            if (y0 >= z0) {

                // x, y, z order
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;

            } else if (x0 >= z0) {

                // x, z, y order
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 0;
                k2 = 1;

            }
            else {

                // y, x, z order
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 1;
                j2 = 0;
                k2 = 1;

            }

        } else {

            if (y0 < z0) {

                // z, y, x order
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 0;
                j2 = 1;
                k2 = 1;

            } else if (x0 < z0) {

                // y, z, x order
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 0;
                j2 = 1;
                k2 = 1;

            } else {

                // y, x, z order
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;

            }

        }

        // second corner offset
        let x1 = x0 - i1 + Simplex_octave.G3;
        let y1 = y0 - j1 + Simplex_octave.G3;
        let z1 = z0 - k1 + Simplex_octave.G3;
        // third corner offset
        let x2 = x0 - i2 + 2.0 * Simplex_octave.G3;
        let y2 = y0 - j2 + 2.0 * Simplex_octave.G3;
        let z2 = z0 - k2 + 2.0 * Simplex_octave.G3;
        // final offset
        let x3 = x0 - 1.0 + 3.0 * Simplex_octave.G3;
        let y3 = y0 - 1.0 + 3.0 * Simplex_octave.G3;
        let z3 = z0 - 1.0 + 3.0 * Simplex_octave.G3;

        // gradients
        let ii = i & 255;
        let jj = j & 255;
        let kk = k & 255;
        let gi0 = this.double_permutation_table_mod12[ii + this.double_permutation_table[jj + this.double_permutation_table[kk]]] % 12;
        let gi1 = this.double_permutation_table_mod12[ii + i1 + this.double_permutation_table[jj + j1 + this.double_permutation_table[kk + k1]]] % 12;
        let gi2 = this.double_permutation_table_mod12[ii + i2 + this.double_permutation_table[jj + j2 + this.double_permutation_table[kk + k2]]] % 12;
        let gi3 = this.double_permutation_table_mod12[ii + 1 + this.double_permutation_table[jj + 1 + this.double_permutation_table[kk + 1]]] % 12;

        // corner contributions
        let t0 = 0.5 - x0 * x0 - y0 * y0 - z0 * z0;
        if (t0 < 0) {
            n0 = 0.0;
        } else {
            t0 *= t0;
            n0 = t0 * t0 * GRAD_3D[gi0].dot(x0, y0, z0);
        }

        let t1 = 0.5 - x1 * x1 - y1 * y1 - z1 * z1;
        if (t1 < 0) {
            n1 = 0.0;
        } else {
            t1 *= t1;
            n1 = t1 * t1 * GRAD_3D[gi1].dot(x1, y1, z1);
        }

        let t2 = 0.5 - x2 * x2 - y2 * y2 - z2 * z2;
        if (t2 < 0) {
            n2 = 0.0;
        } else {
            t2 *= t2;
            n2 = t2 * t2 * GRAD_3D[gi2].dot(x2, y2, z2);
        }

        let t3 = 0.5 - x3 * x3 - y3 * y3 - z3 * z3;
        if (t3 < 0) {
            n3 = 0.0;
        } else {
            t3 *= t3;
            n3 = t3 * t3 * GRAD_3D[gi3].dot(x3, y3, z3);
        }

        // sum up the contributions (results between [-1, 1])
        return 32.0 * (n0 + n1 + n2 + n3);

    }

    /**
     * Gets a permutation table
     * 
     * @param {PERMUTATION_OPTIONS} options 
     * @returns {Array<number>}
     */
    private getPermutationTable(options?: PERMUTATION_OPTIONS): Array<number> {

        // Create a permutation table from the options specified
        if (typeof options !== "undefined") {
            return PERMUTATION_CREATE(options.max, options.min, options.resolution, isNullOrUndefined(options.fixed) ? true : (!options.fixed));
        }

        // By default, return a pre-defined random 8-bit table
        return PERMUTATION_FIXED_256;

    };


    //===================== End Functions =====================//


};