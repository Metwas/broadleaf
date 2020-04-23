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

import { random, XOR_SWAP } from "../math";
import { isNumber, isBoolean } from "../../utils/utils";

//===================== End imports =====================//

/**
 * A permutation table consists of all numbers from 0 - 255 in a non-orderly way
 */
export const PERMUTATION_FIXED_256: Array<number> = [151, 160, 137, 91, 90, 15,
    131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
    190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
    88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166,
    77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
    102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
    135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123,
    5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
    223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
    129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
    251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
    49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
    138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180
];

/**
 * Creates a new permutation table
 * 
 * @param {Number} max 
 * @param {Number} min 
 * @param {Number} clampedSize A defined resolution to map linearly
 * @param {Boolean} randomSeed 
 */
export function PERMUTATION_CREATE(max: number, min: number, clampedSize: any = null, randomSeed: boolean = true) {

    /**
     * Default to 8 bit
     */
    if (!isNumber(max)) { max = 255; }
    /**
     * Default to zero
     */
    if (!isNumber(min)) { min = 0; }
    /**
     * Swap if min is creater than max
     */
    if (min > max) {

        const result = XOR_SWAP(min, max);
        min = result.x;
        max = result.y;

    }

    let diff = max - min;
    /**
     * Validate clampedSize
     */
    let scale: number = 1;
    if (isNumber(clampedSize)) {

        scale = diff / clampedSize;
        diff = clampedSize;

    }
    /**
     * else set randonSeed
     */
    else if (isBoolean(clampedSize)) { randomSeed = clampedSize; }

    /**
     * Create an empty array filled with 0
     */
    const temp: Array<number> = new Array(diff).fill((min - 1));
    /**
     * Iterate until each unit has been allocated a random, but unique, value
     */
    let value: number = max;
    let iterator: number = temp.length - 1;
    while (iterator >= 0) {

        /**
         * Create a random value between min and max
         */
        const index: number = randomSeed === true ? random(0, temp.length, true) : iterator;
        
        /**
         * Validate uniqueness before assigning
         */
        if (temp[index] === (min - 1)) {

            value -= scale;
            temp[index] = Math.abs(Math.ceil(value));
            iterator--;

        }

    }

    return temp;

};

/**
 * Defines permutation creatation options
 * 
 * @public
 * @type {Object}
 */
export type PERMUTATION_OPTIONS = { fixed?: boolean, max: number, min: number, resolution?: number };