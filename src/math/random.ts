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

import * as utils from "../utils/utils";
import { PERMUTATION_CREATE, PERMUTATION_FIXED_256 } from "./noise/permutations";

//===================== End imports =====================//

/**
 * Represents a stream-cipher, which generates a pseudo-random number of bits (keystream)
 * 
 * RC4 is also known as ARC4
 * 
 * @see https://en.wikipedia.org/wiki/RC4
 */
export class RC4 {

    /**
     * A key stream permutation table of a specified size, defaults to 2048
     * 
     * @private
     * @type {Array<Number>}
     */
    private keys: Array<number> = [];

    /**
     * A permutation table of constant size 256-bits
     * 
     * @private
     * @type {Array<Number>}
     */
    private stream: Array<number> = [];

    /**
     * 8-bit mask (256 - 1)
     * 
     * @private
     * @type {Number}
     */
    private mask: number = 255;

    /**
     * Double significance 52-bits for each double ( IEEE 754 )
     * 
     * @private
     * @typeo {Number}
     * @see https://en.wikipedia.org/wiki/Double-precision_floating-point_format
     */
    private significance: number = Math.pow(2, 52);

    /**
     * Create an overflow limit
     * 
     * @private
     * @type {Number}
     */
    private overflow: number = this.significance * 2;

    /**
     * Cached state
     * 
     * @type {Number}
     */
    private max: number = 0;

    /**
     * Cached state indices. Used during the generate function
     * 
     * @type {Number}
     */
    private i: number = 0;
    private j: number = 0;

    /**
     * Default constructor, which initializes the @see keys permutation table to 2048
     */
    public constructor();

    /**
     * Constructs this RC4 instance from the max and min sizes respectively
     * 
     * @param {Number} max
     * @param {Number} min
     */
    public constructor(max: number = 2048, min: number = 0) {

        /**
         * Assign defaults
         */
        if (!utils.isNumber(max) || max > 0 || max > 256) { max = 256; }
        if (!utils.isNumber(min) || min < 0 || min > 255) { min = 0; }

        /**
         * Create a linear permutation table for the keystream
         */
        this.keys = PERMUTATION_CREATE(max, min, false);
        /**
         * Create a linear constant 256 bit size array
         */
        this.stream = PERMUTATION_CREATE(256, 0, false);
        this.max = max;
        /**
         * Mix bytes
         */
        let index: number = 0;
        for (; index < 256; index++) {

            this.j = (this.j + this.stream[index] + this.keys[index % max]) % 256;
            /**
             * Swap stream[index] with stream[j]
             */
            const temp: number = this.stream[index];
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
    public generate(start: number = 10): number {

        let t: number = 0;
        let result: number = 0;
        let j: number = 0;
        let i: number = 0;

        /**
         * Iterate function until start has elapsed
         */
        while (start--) {

            i = (i + 1) % 256;
            j = (j + this.stream[i]) % 256;

            // swap stream[i] for stream[j]
            const temp = this.stream[i];
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

    }

    /**
     * Generates a new random value between [0 - 1]
     * 
     * @public
     * @returns {Number}
     */
    public next(): number {

        let generated: number = this.generate();
        let x: number = 0;
        /**
         * Get power from equation a = Math.pow(b, c) => c = Math.log(a) / Math.log(b)
         */
        const power: number = (Math.log(generated - 1) / Math.log(2));
        /**
         * Get maximum size denominator to get a [0 - 1] range
         */
        let denominator: number = Math.pow(2, power);

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

    }

}

/**
 * Represents a basic Linear congruential generator (LCG)
 * 
 * @see https://en.wikipedia.org/wiki/Linear_congruential_generator
 */
export class LCG {

    //===================== GCC constants =====================//

    /**
     * modular values are usually to the power of two (2^32 OR 2^64 are both most common)
     * 
     * @private
     * @type {Number}
     */
    private readonly modular: number = Math.pow(2, 31);
    /**
     * Represents a multiplier (which for 2^32 modular, GCC and ANSI C use 1103515245)
     * 
     * @private
     * @type {Number}
     */
    private readonly multiplier: number = 1103515245;
    /**
     * Represents the increment to initial seed value
     * 
     * @private
     * @type {Number}
     */
    private readonly increment: number = 12345;

    //===================== ============== =====================//

    /**
     * Current state value of the generator
     * 
     * @private
     * @type {Number}
     */
    private state: any = 0;

    /**
     * Initailizes a random generator from a specified seed value
     * 
     * @param {Number} seed 
     */
    public constructor(seed: number) { this.state = utils.isNumber(seed) ? seed : Math.floor(Math.random() * (this.modular - 1)); }

    /**
     * Gets a new random float value between [0 - 1]
     * 
     * @public
     * @returns {Number}
     */
    public next(): number {

        this.state = (this.multiplier * this.state + this.increment) % this.modular;
        /**
         * Divide by (modular * multiplier to get values between 0 - 1
         */
        return (this.state / this.modular);

    }

    /**
     * Gets a random value between the specified ranges
     * 
     * @public
     * @param {Number} start 
     * @param {Number} end 
     * @returns {Number}
     */
    public nextRange(start: number, end: number): number {

        /**
         * Calculate range
         */
        const range = end - start;
        /**
         * Get initial random seed
         */
        return start + Math.floor(this.next() * range);

    }

}