"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vector2_1 = require("./vectors/vector2");
const utils_1 = require("../utils/utils");
const MAX_NIBBLE = 1 << 4;
const MAX_BYTE = 1 << 8;
const MAX_16BIT = 1 << 16;
const MAX_24BIT = 1 << 24;
const MAX_32BIT = 1 << 32;
const INFINITY = (function () {
    return Number.POSITIVE_INFINITY;
})();
const PI = Math.PI;
const HALF_PI = PI / 2;
const TAU = PI * 2;
const DEGTORAD = Math.PI / 180;
const RADTODEG = 180 / Math.PI;
/**
 * Linear interpolation allows for points to move to another point in a gradual linear progression
 *
 * @param {Number} x0 A start point
 * @param {Number} x1 The final resting point
 * @param {Number} t The resolution of steps to take to get to the final resting position
 * @remarks Documentation p5.js:https://p5js.org/examples/math-linear-interpolation.html and wiki: https://en.wikipedia.org/wiki/Linear_interpolation
 * @returns {Number} A new point which is a fraction (based off [t]) of the final x1 point
 */
const lerp = function (x0, x1, t) {
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
const clamp = function (val, min, max) {
    return Math.max(min, Math.min(max, val));
};
/**
 * Raises the provided value to the power of 2
 *
 * @param {Number} value The value to be squared
 * @returns {Number} The newly squared value
 */
const square = function (value) {
    return Math.pow(value, 2);
};
/**
 * Calculates the distance between two points
 *
 * @param {Number} x0 The start point
 * @param {Number} x1 The end point
 * @returns {Number} The distance between these points
 */
const dist = function (x0, x1) {
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
const distVector = function (vector0, vector1) {
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
const normalizeVectors = function (vector0, vector1) {
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
 * Maps a value to a range between a specifed maximum and minimum
 *
 * @param {Number} value The arbitrary number to be mapped
 * @param {Number} minFrom The minimum value to start
 * @param {Number} maxFrom The maximum value to start
 * @param {Number} minTo The minimum end value
 * @param {Number} maxTo The maximum end value
 * @returns {Number} a new value thats mapped correspondingly between the provided parameters
 */
const map = function (value, minFrom, maxFrom, minTo, maxTo) {
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
const random = function (min, max) {
    var rand = Math.random();
    if (typeof min === "undefined") {
        return rand;
    }
    else if (typeof max === "undefined") {
        return Math.floor(rand * min);
    }
    else {
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
const randomArray = function (array) {
    var rand = Math.random();
    if (utils_1.default.isNullOrUndefined(array) || !Array.isArray(array)) {
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
const getMatrixIndex2D = function (x, y, width) {
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
const getMatrixIndex = function (x, y, width, array, border) {
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
const degreesToRadians = function (degrees) {
    return degrees * DEGTORAD;
};
/**
 * Converts a given radian to a degree value
 *
 * @param {Number} radian A radian value to be converted to degrees
 * @returns {Number} The new degree value
 */
const radiansToDegrees = function (radian) {
    return radian * RADTODEG;
};
exports.default = {
    PI: PI,
    HALF_PI: HALF_PI,
    TAU: TAU,
    MAX_NIBBLE: MAX_NIBBLE,
    MAX_BYTE: MAX_BYTE,
    MAX_16BIT: MAX_16BIT,
    MAX_24BIT: MAX_24BIT,
    MAX_32BIT: MAX_32BIT,
    INFINITY: INFINITY,
    DEGTORAD: DEGTORAD,
    RADTODEG: RADTODEG,
    vector2: vector2_1.default,
    degreesToRadians: degreesToRadians,
    radiansToDegrees: radiansToDegrees,
    lerp: lerp,
    map: map,
    square: square,
    clamp: clamp,
    distVector: distVector,
    dist: dist,
    random: random,
    randomArray: randomArray,
    normalizeVectors: normalizeVectors,
    getMatrixIndex2D: getMatrixIndex2D,
    getMatrixIndex: getMatrixIndex
};
