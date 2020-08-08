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

// simplex octave class
import { Simplex_octave } from "./simplexOctave";
// utilities
import { isNumber } from "../../utils/utils";

//===================== End imports =====================//

/**
 * Level of detail for the simplex noise (number of octaves which defaults to 4)
 * 
 * @type {Number}
 */
let NOISE_DETAIL: number = 4;

/**
 * Updates the noise level detail by the provided value
 * 
 * @public
 * @param {Number} value 
 */
export function noiseDetail(value: number): void {

    if (!isNumber(value) || value <= 0) {
        value = 1;
    }

    NOISE_DETAIL = value;

};

/**
 * Creates a simplex octave class which yields the simplex noise function for up to the third-dimension and detailed by @see NOISE_DETAIL
 * 
 * @param seed
 * @returns {Function} The noise detail function 
 */
export function createNoise(seed: number): (x: number, y: number, z: number) => number {

    const simplex = new Simplex_octave(seed);

    /**
     * Simplex noise function, supports up to the third-dimension
     * 
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @returns {Number}
     */
    return function (x: number, y: number, z: number): number {

        // get 1st octave noise
        let n = simplex.noise(x, y, z);
        let factor = 1;

        for (let i = 2; i <= NOISE_DETAIL; i = (i * 2)) {
            n += (factor = (factor / 2)) * simplex.noise(x * i, y * i, z * i);
        }

        return n;

    };

};