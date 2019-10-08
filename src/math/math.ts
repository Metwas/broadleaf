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


import * as utils from "../utils/utils";
import { Vector2 } from "./vectors/vector2";

// maximum 4 bit size
export const MAX_NIBBLE = (1 << 4) - 1;

// maximum 8 bit (1 byte) size
export const MAX_BYTE = (1 << 8) - 1;

// maximum 16 bit (2 bytes) size
export const MAX_16BIT = (1 << 16) - 1;

// maximum 24 bit (3 bytes) size
export const MAX_24BIT = (1 << 24) - 1;

// maximum unsigned 32 bit (4 bytes) size
export const MAX_UNSIGNED_32BIT = ((1 << 31) >>> 0) * 2 - 1;

// positive infinity
export const POSITIVE_INFINITY = (function () {

     return Number.POSITIVE_INFINITY;

})();

// negative infinity
export const NEGATIVE_INFINITY = (function () {

     return Number.NEGATIVE_INFINITY;

})();

// PI constant
export const PI = Math.PI;

// half PI
export const HALF_PI = PI / 2;

// two times PI
export const TAU = PI * 2;

// Converts degrees to radians
export const DEGTORAD = Math.PI / 180;

// converts radians to degress
export const RADTODEG = 180 / Math.PI;

/**
 * Linear interpolation allows for points to move to another point in a gradual linear progression
 *
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
 * @param {Number} value The value to be squared
 * @returns {Number} The newly squared value
 */
export const square = function (value: number): number {

     return Math.pow(value, 2);

};

/**
 * Calculates the distance between two points
 *
 * @param {Number} x0 The start point
 * @param {Number} x1 The end point
 * @returns {Number} The distance between these points
 */
export const dist = function (x0: number, x1: number): number {

     return Math.sqrt((x0 - x1) * (x0 - x1));

};

/**
 * Calculates the distance between two vector points
 *
 * @param {Number} vectorX0 The x start point
 * @param {Number} vectorX1 The x end point
 * @param {Number} y0 The y start point
 * @param {Number} y1 The y end point
 * @returns {Number} The distance between these two vectors
 */
export const distVector = function (vector0: Vector2, vector1: Vector2): object {

     var _x = Math.sqrt((vector1.x - vector0.x) * (vector1.x - vector0.x));
     var _y = Math.sqrt((vector1.y - vector0.y) * (vector1.y - vector0.y));

     return {

          x: _x,
          y: _y

     };

};

/**
 * Ensures the provided vectors are in-order
 *
 * @param {Vector2} vector0 The first vector
 * @param {Vector2} vector1 The second vector
 * @returns {Object} returns a object containing the vectors in a normailized manor
 */
export const normalizeVectors = function (vector0: Vector2, vector1: Vector2) {

     var _delta0 = vector0.x + vector0.y;
     var _delta1 = vector1.x + vector1.y;

     if (_delta0 >= _delta1) {

          // swap the vectors
          var _temp = vector0;
          vector0 = vector1;
          vector1 = _temp;

     }

     return {

          vector0: vector0,
          vector1: vector1

     };

};

/**
 * Gets the component values within a line graph formulae, such as gradient and y-intercept from the two provided vectors
 *
 * @param {Vector2} from The start positional vector
 * @param {Vector2} to The end positional vector
 * @remarks The line graph formulae goes as follows: y = f(x) = mx + c
 * @returns {Object} The values for each component in the formulae
 */
export const getlineGraphComponents = function (from: Vector2, to: Vector2): Object {

     let _gradient = 0;
     let _yIntercept = 0;

     const _solve = function () {

          /*
              To solve for m (the gradient) the formulae is as follows:
              m = (y2 - y1) / (x2 - x1)
          */
          var _deltaX = to.x - from.x;
          var _deltaY = to.y - from.y;

          if (_deltaX === 0) {

               _gradient = 0;

          } else {

               _gradient = _deltaY / _deltaX;

          }

          /*
              To solve for c (the y-intercept) the formulae is as follows:
              c = ( y - (m * x) )
          */
          var _gradientFn = _gradient * from.x;
          return from.y - _gradientFn;

     };

     const _distance = distVector(from, to);
     _yIntercept = _solve();

     return {

          gradient: _gradient,
          yIntercept: _yIntercept,
          distance: _distance

     };

};

/**
* Creates simple oscillation motion
*
* @param {Number} angle The angle value
* @param {Number} amplitude
* @returns {Number} a value thats mapped from the padding and amplitude to values between -1 to 1
*/
export const oscillate = function (angle: number, amplitude: number): number {

     return map(Math.sin(angle), -1, 1, -amplitude, amplitude);

};

/**
 * Maps a value to a range between a specifed maximum and minimum
 *
 * @param {Number} value The arbitrary number to be mapped
 * @param {Number} minFrom The minimum value to start
 * @param {Number} maxFrom The maximum value to start
 * @param {Number} minTo The minimum end value
 * @param {Number} maxTo The maximum end value
 * @returns {Number} a new value thats mapped correspondingly between the provided parameters
 */
export const map = function (value: number, minFrom: number, maxFrom: number, minTo: number, maxTo: number): number {

     if (!(isNaN(value) && isFinite(value)) || typeof value === "undefined") {

          return -1;

     }

     return (value - minFrom) * (maxTo - minTo) / (maxFrom - minFrom) + minTo;

};

/**
 * Returns a random number between a minimum and maximum value
 *
 * @param {Number} min A minimum value
 * @param {Number} max A maximum value
 * @returns {Number} A new random integer which falls between the given ranges
 */
export const random = function (min: number, max: number): number {

     var rand = Math.random();

     if (typeof min === "undefined") {

          return rand;

     } else if (typeof max === "undefined") {

          return Math.floor(rand * min);

     } else {

          // get the highest of the two supplied values
          if (min > max) {

               // swap the values
               var temp = min;
               min = max;
               max = temp;

          }

          return rand * (max - min) + min;

     }

};

/**
 * Obtains a random array element within a given array
 *
 * @param {Array} array An array
 * @returns {Number} A random element within the array
 */
export const randomArray = function (array: Array<any>): number | null {

     var rand = Math.random();

     if (utils.isNullOrUndefined(array) || !Array.isArray(array)) {

          return null;

     }

     return array[Math.floor(rand * array.length)];

};


/**
 * Gets the specified index position which corresponding to a one dimensional array
 *
 * @param {Number} x The position in a row (0 indexed)
 * @param {Number} y The position in a column (0 indexed)
 * @param {Number} width The total width to calculate over
 * @returns {Number} The index of the corresponding element within a one dimensional array
 */
export const getMatrixIndex2D = function (x: number, y: number, width: number): number {

     return y * width + x;

};

/**
 * Gets the specified element at the computed index
 *
 * @param {Number} x The position in a row (0 indexed)
 * @param {Number} y The position in a column (0 indexed)
 * @param {Number} width The total width to calculate over
 * @param {Array} array The array to be indexed
 * @param {Boolean} border Option to loop back if a coordinate is greater than the dimension
 * @returns {Object} The element at the calculate index
 */
export const getMatrixIndex = function (x: number, y: number, width: number, array: Array<any>, border: boolean): Object | null {

     if (array === null || !Array.isArray(array)) {

          return null;

     }

     border = !!border;

     if (border && (x < 0 || x >= width)) {

          return -1;

     }

     var _index = getMatrixIndex2D(x, y, width);

     if (_index > array.length) {

          // avoid index out of bounds error
          _index = 0;

     }

     return array[_index];

};

/**
 * Converts a given degree to a radian value
 *
 * @param {Number} degrees A degree value to be converted to radians
 * @returns {Number} The new radian value
 */
export const degreesToRadians = function (degrees: number): number {

     return degrees * DEGTORAD;

};

/**
 * Converts a given radian to a degree value
 *
 * @param {Number} radian A radian value to be converted to degrees
 * @returns {Number} The new degree value
 */
export const radiansToDegrees = function (radian: number): number {

     return radian * RADTODEG;

};

export { Vector2 } from "./vectors/vector2";