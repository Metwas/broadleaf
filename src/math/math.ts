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

//===================== Imports =====================//

import * as utils from "../utils/utils";
// simplex noise detail function
import * as simplexNoise from "./noise/simplexNoise";

//===================== End Imports =====================//

/**
 * Maximum 4 bit size
 * 
 * @public
 * @type {Number}
 */
export const MAX_NIBBLE = (1 << 4) - 1;

/**
 * Maximum 8 bit (1 byte) size
 * 
 * @public
 * @type {Number}
 */
export const MAX_BYTE = (1 << 8) - 1;

/**
 * Maximum 16 bit (2 bytes) size
 * 
 * @public
 * @type {Number}
 */
export const MAX_16BIT = (1 << 16) - 1;

/**
 * Maximum 24 bit (3 bytes) size
 * 
 * @type {Number}
 */
export const MAX_24BIT = (1 << 24) - 1;

/**
 * Maximum unsigned 32 bit (4 bytes) size
 * 
 * @public
 * @type {Number}
 */
export const MAX_UNSIGNED_32BIT = ((1 << 31) >>> 0) * 2 - 1;

/**
 * 1KB (1 bit << base 10)
 * 
 * @public
 * @type {Number}
 */
export const KILOBYTE = Math.pow(2, 10);

/**
 * 1MB (1024 * 1KB)
 * 
 * @public
 * @type {Number}
 */
export const MEGABYTE = Math.pow(2, 20);

/**
 * 1GB (1024 * 1MB)
 * 
 * @public
 * @type {Number}
 */
export const GIGABYTE = Math.pow(2, 30);

/**
 * 1TB (1024 * 1GB)
 * 
 * @public
 * @type {Number}
 */
export const TERABYTE = Math.pow(2, 40);

/**
 * 1PB (1024 * 1TB)
 * 
 * @public
 * @type {Number}
 */
export const PETABYTE = Math.pow(2, 50);

/**
 * Positive infinity
 * 
 * @public
 * @type {Number}
 */
export const POSITIVE_INFINITY = (function () { return Number.POSITIVE_INFINITY; })();

/**
 * Negative infinity
 * 
 * @public
 * @type {Number}
 */
export const NEGATIVE_INFINITY = (function () { return Number.NEGATIVE_INFINITY; })();

/**
 * PI constant
 * 
 * @public
 * @type {Number}
 */
export const PI = Math.PI;

/**
 * Half PI
 * 
 * @public
 * @type {Number}
 */
export const HALF_PI = PI / 2;

/**
 * Two times PI
 * 
 * @public
 * @type {Number}
 */
export const TAU = PI * 2;

/**
 * Converts degrees to radians
 * 
 * @public
 * @type {Number}
 */
export const DEGTORAD = Math.PI / 180;

/**
 * Converts radians to degress
 * 
 * @public
 * @type {Number}
 */
export const RADTODEG = 180 / Math.PI;

/**
 * Swaps values using the exclusive OR method
 * 
 * @public
 * @param {Number} x
 * @param {Number} y
 * @returns {Object}
 */
export const XOR_SWAP = function (x: number, y: number) {

     if (x != y) {
          x ^= y; y ^= x; x ^= y;
     }

     return { x: x, y: y };

};

/**
 * Logistics map (Sigmoid function)
 * 
 * @param {Number} e
 * @param {Number} x
 * @returns {Number}
 */
export const logistics_f = function (e: number = 1, x: number = 0): number {
     const p = Math.pow(e, x);
     return (p / (p + 1));
};

/**
 * Gets all prime numbers between a given min and max values
 * 
 * @param {Number} min
 * @param {Number} max
 * @returns {Array<Number>}
 */
export const getPrimeNumbers = function (min: number, max: number): Array<Number> {

     const min_x: number = Math.max(min, 2);
     const results: Array<Number> = [];

     for (let x = min_x; x < max; x++) {

          const y_length: number = Math.sqrt(x) + 1;
          let hasFactor: boolean = false;

          for (let y = 2; y < y_length; y++) {

               if (x % y === 0) {
                    hasFactor = true;
                    break;
               }

          }

          if (!hasFactor) {
               results.push(x);
          }

     }

     return results;

};

/**
 * Linear interpolation allows for points to move to another point in a gradual linear progression
 *
 * @public
 * @param {Number} x0 A start point
 * @param {Number} x1 The final resting point
 * @param {Number} t The resolution of steps to take to get to the final resting position
 * @remarks Documentation p5.js:https://p5js.org/examples/math-linear-interpolation.html and wiki: https://en.wikipedia.org/wiki/Linear_interpolation
 * @returns {Number} A new point which is a fraction (based off [t]) of the final x1 point
 */
export const lerp = function (x0: number, x1: number, t: number): number {
     return (1 - t) * x0 + t * x1;
};

/**
 * Clamps a given value into a minimum and maximum range
 *
 * @param {Number} val The value to be clamped
 * @param {Number} min The minimum range for the value to be over
 * @param {Number} max The maximum range for the value to fall under
 * @returns {Number} A new number which is now clamped between a given minimum and maximum range value
 */
export const clamp = function (val: number, min: number, max: number): number {
     return Math.max(min, Math.min(max, val));
};

/**
 * Raises the provided value to the power of 2
 *
 * @public
 * @param {Number} value The value to be squared
 * @returns {Number} The newly squared value
 */
export const square = function (value: number): number {
     return Math.pow(value, 2);
};

/**
 * Calculates the average result of a set of values
 * 
 * @public
 * @param {Array} values 
 * @param {String} property optional if the values array contains objects
 */
export const average = function (values: Array<any>, property: any): number {

     let result: number = 0;
     if (utils.isArray(values)) {

          /** Keep a track of valid @see Number type arguments, to avoid a miss count at the end */
          let totalValidArguments: number = 0;
          for (const value in values) {

               const normalized: number = utils.isObject(values[value]) ? values[value][property] : values[value];
               /**
                * Ensure sum is of number type
                */
               if (utils.isNumber(normalized)) {

                    totalValidArguments++;
                    result += normalized;

               }

          }

          /**
           * Get average
           */
          result = result / totalValidArguments;

     }

     return result;

};

/**
 * Calculates the distance between two points
 *
 * @public
 * @param {Number} x0 The start point
 * @param {Number} x1 The end point
 * @returns {Number} The distance between these points
 */
export const dist = function (x0: number, x1: number): number {
     return Math.sqrt((x0 - x1) * (x0 - x1));
};

/**
 * Maps a value to a range between a specifed maximum and minimum
 *
 * @public
 * @param {Number} value The arbitrary number to be mapped
 * @param {Number} minFrom The minimum value to start
 * @param {Number} maxFrom The maximum value to start
 * @param {Number} minTo The minimum end value
 * @param {Number} maxTo The maximum end value
 * @returns {Number} a new value thats mapped correspondingly between the provided parameters
 */
export const map = function (value: number, minFrom: number, maxFrom: number, minTo: number, maxTo: number): number {

     if (!utils.isNumber(value)) {
          return -1;
     }

     return (value - minFrom) * (maxTo - minTo) / (maxFrom - minFrom) + minTo;

};

/**
 * Returns a random number between a minimum and maximum value
 *
 * @public
 * @param {Number} min A minimum value
 * @param {Number} max A maximum value
 * @param {Boolean} round {optional}
 * @returns {Number} A new random integer which falls between the given ranges
 */
export const random = function (min: any, max: number, round: boolean | number = false): number {

     const rand: number = Math.random();
     let rnd: number = 0;

     if (!utils.isNumber(min)) {

          /** if min is of @see Boolean type, update refence */
          if (utils.isBoolean(min)) {
               round = min;
          }

          rnd = rand;

     } else if (!utils.isNumber(max)) {
          rnd = rand * min;
     } else {

          // get the highest of the two supplied values
          if (min > max) {

               // swap the values
               const temp = min;
               min = max;
               max = temp;

          }

          rnd = rand * (max - min) + min;

     }

     /**
      * Round if parameter set to true
      */
     if (round === true) {
          rnd = Math.round(rnd);
     }

     return rnd;

};

/**
 * Obtains a random array element within a given array
 *
 * @public
 * @param {Array} array An array
 * @returns {Number} A random element within the array
 */
export const randomArray = function (array: Array<any>): number | null {

     const rand = Math.random();
     if (!utils.isArray(array)) {
          return null;
     }

     return array[Math.floor(rand * array.length)];

};


/**
 * Gets the specified index position which corresponding to a one dimensional array
 *
 * @public
 * @param {Number} x The position in a row (0 indexed)
 * @param {Number} y The position in a column (0 indexed)
 * @param {Number} width The total width to calculate over
 * @returns {Number} The index of the corresponding element within a one dimensional array
 */
export const getMatrixIndex = function (x: number, y: number, width: number): number {
     return y * width + x;
};

/**
 * Gets the specified element at the computed index
 *
 * @public
 * @param {Number} x The position in a row (0 indexed)
 * @param {Number} y The position in a column (0 indexed)
 * @param {Number} width The total width to calculate over
 * @param {Array} array The array to be indexed
 * @param {Boolean} border Option to loop back if a coordinate is greater than the dimension
 * @returns {Object} The element at the calculate index
 */
export const getMatrixIndexFromArray = function (x: number, y: number, width: number, array: Array<any>, border: boolean): Object | null {

     if (!utils.isArray(array)) {
          return null;
     }

     border = !!border;
     if (border && (x < 0 || x >= width)) {
          return -1;
     }

     let index = getMatrixIndex(x, y, width);
     if (index > array.length) {
          // avoid index out of bounds error
          index = 0;
     }

     return array[index];

};

/**
 * Converts a given degree to a radian value
 *
 * @public
 * @param {Number} degrees A degree value to be converted to radians
 * @returns {Number} The new radian value
 */
export const degreesToRadians = function (degrees: number): number {
     return degrees * DEGTORAD;
};

/**
 * Converts a given radian to a degree value
 *
 * @public
 * @param {Number} radian A radian value to be converted to degrees
 * @returns {Number} The new degree value
 */
export const radiansToDegrees = function (radian: number): number {
     return radian * RADTODEG;
};

/**
 * Simplex noise creator function
 * 
 * @param {Number} seed
 * @param {Number} detail
 * @returns {Function} The noise detail function
 */
export const createNoise = function (seed: number, detail: number): (x: number, y: number, z: number) => number {

     const simplex = require("./noise/simplexNoise");
     // update detail
     simplex.noiseDetail(detail);
     // return noise detail function
     return simplex.createNoise(seed);

};

//===================== Exports =====================//

export const simplex = simplexNoise;
export { Vector2 } from "./vectors/vector2";
export { LCG, RC4 } from "./random";

//===================== End Exports =====================//