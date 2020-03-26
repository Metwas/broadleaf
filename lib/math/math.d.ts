/**
 * Maximum 4 bit size
 *
 * @type {Number}
 */
export declare const MAX_NIBBLE: number;
/**
 * Maximum 8 bit (1 byte) size
 *
 * @type {Number}
 */
export declare const MAX_BYTE: number;
/**
 * Maximum 16 bit (2 bytes) size
 *
 * @type {Number}
 */
export declare const MAX_16BIT: number;
/**
 * Maximum 24 bit (3 bytes) size
 *
 * @type {Number}
 */
export declare const MAX_24BIT: number;
/**
 * Maximum unsigned 32 bit (4 bytes) size
 *
 * @type {Number}
 */
export declare const MAX_UNSIGNED_32BIT: number;
/**
 * 1KB (1 bit << base 10)
 *
 * @type {Number}
 */
export declare const KILOBYTE: number;
/**
 * 1MB (1024 * 1KB)
 *
 * @type {Number}
 */
export declare const MEGABYTE: number;
/**
 * 1GB (1024 * 1MB)
 *
 * @type {Number}
 */
export declare const GIGABYTE: number;
/**
 * 1TB (1024 * 1GB)
 *
 * @type {Number}
 */
export declare const TERABYTE: number;
/**
 * 1PB (1024 * 1TB)
 *
 * @type {Number}
 */
export declare const PETABYTE: number;
/**
 * Positive infinity
 *
 * @type {Number}
 */
export declare const POSITIVE_INFINITY: number;
/**
 * Negative infinity
 *
 * @type {Number}
 */
export declare const NEGATIVE_INFINITY: number;
/**
 * PI constant
 *
 * @type {Number}
 */
export declare const PI: number;
/**
 * Half PI
 *
 * @type {Number}
 */
export declare const HALF_PI: number;
/**
 * Two times PI
 *
 * @type {Number}
 */
export declare const TAU: number;
/**
 * Converts degrees to radians
 *
 * @type {Number}
 */
export declare const DEGTORAD: number;
/**
 * Converts radians to degress
 *
 * @type {Number}
 */
export declare const RADTODEG: number;
/**
 * Linear interpolation allows for points to move to another point in a gradual linear progression
 *
 * @param {Number} x0 A start point
 * @param {Number} x1 The final resting point
 * @param {Number} t The resolution of steps to take to get to the final resting position
 * @remarks Documentation p5.js:https://p5js.org/examples/math-linear-interpolation.html and wiki: https://en.wikipedia.org/wiki/Linear_interpolation
 * @returns {Number} A new point which is a fraction (based off [t]) of the final x1 point
 */
export declare const lerp: (x0: number, x1: number, t: number) => number;
/**
 * Clamps a given value into a minimum and maximum range
 *
 * @param {Number} val The value to be clamped
 * @param {Number} min The minimum range for the value to be over
 * @param {Number} max The maximum range for the value to fall under
 * @returns {Number} A new number which is now clamped between a given minimum and maximum range value
 */
export declare const clamp: (val: number, min: number, max: number) => number;
/**
 * Raises the provided value to the power of 2
 *
 * @param {Number} value The value to be squared
 * @returns {Number} The newly squared value
 */
export declare const square: (value: number) => number;
/**
 * Calculates the distance between two points
 *
 * @param {Number} x0 The start point
 * @param {Number} x1 The end point
 * @returns {Number} The distance between these points
 */
export declare const dist: (x0: number, x1: number) => number;
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
export declare const map: (value: number, minFrom: number, maxFrom: number, minTo: number, maxTo: number) => number;
/**
 * Returns a random number between a minimum and maximum value
 *
 * @param {Number} min A minimum value
 * @param {Number} max A maximum value
 * @param {Boolean} round {optional}
 * @returns {Number} A new random integer which falls between the given ranges
 */
export declare const random: (min: any, max: number, round: number | boolean) => number;
/**
 * Obtains a random array element within a given array
 *
 * @param {Array} array An array
 * @returns {Number} A random element within the array
 */
export declare const randomArray: (array: any[]) => number | null;
/**
 * Gets the specified index position which corresponding to a one dimensional array
 *
 * @param {Number} x The position in a row (0 indexed)
 * @param {Number} y The position in a column (0 indexed)
 * @param {Number} width The total width to calculate over
 * @returns {Number} The index of the corresponding element within a one dimensional array
 */
export declare const getMatrixIndex: (x: number, y: number, width: number) => number;
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
export declare const getMatrixIndexFromArray: (x: number, y: number, width: number, array: any[], border: boolean) => Object | null;
/**
 * Converts a given degree to a radian value
 *
 * @param {Number} degrees A degree value to be converted to radians
 * @returns {Number} The new radian value
 */
export declare const degreesToRadians: (degrees: number) => number;
/**
 * Converts a given radian to a degree value
 *
 * @param {Number} radian A radian value to be converted to degrees
 * @returns {Number} The new degree value
 */
export declare const radiansToDegrees: (radian: number) => number;
export { Vector2 } from "./vectors/vector2";
