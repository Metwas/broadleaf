import { Vector2 } from "./vectors/vector2";
export declare const MAX_NIBBLE: number;
export declare const MAX_BYTE: number;
export declare const MAX_16BIT: number;
export declare const MAX_24BIT: number;
export declare const MAX_UNSIGNED_32BIT: number;
export declare const POSITIVE_INFINITY: number;
export declare const NEGATIVE_INFINITY: number;
export declare const PI: number;
export declare const HALF_PI: number;
export declare const TAU: number;
export declare const DEGTORAD: number;
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
 * Calculates the distance between two vector points
 *
 * @param {Number} vectorX0 The x start point
 * @param {Number} vectorX1 The x end point
 * @param {Number} y0 The y start point
 * @param {Number} y1 The y end point
 * @returns {Number} The distance between these two vectors
 */
export declare const distVector: (vector0: Vector2, vector1: Vector2) => object;
/**
 * Ensures the provided vectors are in-order
 *
 * @param {Vector2} vector0 The first vector
 * @param {Vector2} vector1 The second vector
 * @returns {Object} returns a object containing the vectors in a normailized manor
 */
export declare const normalizeVectors: (vector0: Vector2, vector1: Vector2) => {
    vector0: Vector2;
    vector1: Vector2;
};
/**
 * Gets the component values within a line graph formulae, such as gradient and y-intercept from the two provided vectors
 *
 * @param {Vector2} from The start positional vector
 * @param {Vector2} to The end positional vector
 * @remarks The line graph formulae goes as follows: y = f(x) = mx + c
 * @returns {Object} The values for each component in the formulae
 */
export declare const getlineGraphComponents: (from: Vector2, to: Vector2) => Object;
/**
* Creates simple oscillation motion
*
* @param {Number} angle The angle value
* @param {Number} amplitude
* @returns {Number} a value thats mapped from the padding and amplitude to values between -1 to 1
*/
export declare const oscillate: (angle: number, amplitude: number) => number;
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
 * @returns {Number} A new random integer which falls between the given ranges
 */
export declare const random: (min: number, max: number) => number;
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
export declare const getMatrixIndex2D: (x: number, y: number, width: number) => number;
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
export declare const getMatrixIndex: (x: number, y: number, width: number, array: any[], border: boolean) => Object | null;
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
