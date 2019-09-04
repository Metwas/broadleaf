"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("../graphics/drawing/colors/color");
const utils_1 = require("../utils/utils");
/**
 * Provides static mathematical helper functions
 */
var math = {
    DEGTORAD: Math.PI / 180,
    RADTODEG: 180 / Math.PI,
    /**
     * Linear interpolation allows for points to move to another point in a gradual linear progression
     *
     * @param {Number} x0 A start point
     * @param {Number} x1 The final resting point
     * @param {Number} t The resolution of steps to take to get to the final resting position
     * @remarks Documentation p5.js:https://p5js.org/examples/math-linear-interpolation.html and wiki: https://en.wikipedia.org/wiki/Linear_interpolation
     * @returns {Number} A new point which is a fraction (based off t) of the final x1 point
     */
    lerp: function (x0, x1, t) {
        return (1 - t) * x0 + t * x1;
    },
    /**
     * Linear interpolates a hexidecimal color value, this allows for a fade effect transition between each steps of colors
     *
     * @param {Object} obj An object which will yield the result of each interpolation
     * @param {Number} beginColor The initial color value
     * @param {Number} endColor The final color to transition to
     * @param {Number} iterations The resolution of steps to take to get to the final color
     * @param {Number} duration How long each step should take (micro-stepping)
     * @remarks Have a look at this project, where I got inspiration from http://jsfiddle.net/At3Zm/
     */
    lerpColor: function (obj, beginColor, endColor, iterations, duration) {
        var _steps = 1.0 / (duration / iterations);
        var _i = 0;
        var _timer = setInterval(function () {
            if (_i >= _steps) {
                clearInterval(_timer);
            }
            var _r = parseInt(String(math.lerp(beginColor.red, endColor.red, _i)));
            var _g = parseInt(String(math.lerp(beginColor.green, endColor.green, _i)));
            var _b = parseInt(String(math.lerp(beginColor.blue, endColor.blue, _i)));
            // convert the color values to hex string;
            var _hex = "#" + _r.toString(16) + _g.toString(16) + _b.toString(16);
            _i += _steps;
        }, iterations);
    },
    /**
     * Clamps a given value into a minimum and maximum range
     *
     * @param {Number} val The value to be clamped
     * @param {Number} min The minimum range for the value to be over
     * @param {Number} max The maximum range for the value to fall under
     * @returns {Number} A new number which is now clamped between a given minimum and maximum range value
     */
    clamp: function (val, min, max) {
        return Math.max(min, Math.min(max, val));
    },
    /**
     * Raises the provided value to the power of 2
     *
     * @param {Number} value The value to be squared
     * @returns {Number} The newly squared value
     */
    square: function (value) {
        return Math.pow(value, 2);
    },
    /**
     * Calculates the distance between two points
     *
     * @param {Number} x0 The start point
     * @param {Number} x1 The end point
     * @returns {Number} The distance between these points
     */
    dist: function (x0, x1) {
        return Math.sqrt((x0 - x1) * (x0 - x1));
    },
    /**
     * Calculates the distance between two vector points
     *
     * @param {Number} vectorX0 The x start point
     * @param {Number} vectorX1 The x end point
     * @param {Number} y0 The y start point
     * @param {Number} y1 The y end point
     * @returns {Number} The distance between these two vectors
     */
    distVector: function (vector0, vector1) {
        var _x = Math.sqrt((vector1.x - vector0.x) * (vector1.x - vector0.x));
        var _y = Math.sqrt((vector1.y - vector0.y) * (vector1.y - vector0.y));
        return {
            x: _x,
            y: _y
        };
    },
    /**
     * Ensures the provided vectors are in-order
     *
     * @param {Vector2} vector0 The first vector
     * @param {Vector2} vector1 The second vector
     * @returns {Object} returns a object containing the vectors in a normailized manor
     */
    normalizeVectors: function (vector0, vector1) {
        var _delta0 = vector0.x + vector0.y;
        var _delta1 = vector1.x + vector1.y;
        if (_delta0 >= _delta1) {
            // swap the vectors
            var _temp = vector0;
            vector0 = vector1;
            vector1 = _temp;
        }
        return {
            coordinate0: vector0,
            coordinate1: vector1
        };
    },
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
    map: function (value, minFrom, maxFrom, minTo, maxTo) {
        if (utils_1.default.isNullOrUndefined(value)) {
            return -1;
        }
        return (value - minFrom) * (maxTo - minTo) / (maxFrom - minFrom) + minTo;
    },
    /**
     * Returns a random number between a minimum and maximum value
     *
     * @param {Number} min A minimum value
     * @param {Number} max A maximum value
     * @returns {Number} A new random integer which falls between the given ranges
     */
    rand: function (min, max) {
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
    },
    /**
     * Converts a hexidecimal number or string format to an object containing the RGB values
     *
     * @param {Number | String} hex The hexidecimal number or string e.g can be prefix with '#' #ffffff
     * @returns {Object} returns an object containing the parsed red, green, blue values respectively
     */
    HexToRGB: function (hex) {
        // ensure hex is a hex string
        hex = hex.toString(16).replace("0x", "#");
        hex = hex.indexOf("#") > -1 ? hex : "#" + hex;
        // shorthand initialization #fff -> #ffffff
        var _shorthandHex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(_shorthandHex, function (m, r, g, b) {
            return "#" + r + r + g + g + b + b;
        });
        var hexMatch = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        // parse the hexidecimal value to an integer
        let color = null;
        if (hexMatch) {
            const red = parseInt(hexMatch[1], 16);
            const green = parseInt(hexMatch[2], 16);
            const blue = parseInt(hexMatch[3], 16);
            return color_1.default.fromRGB(red, green, blue);
        }
        // return black
        return color_1.default.fromRGB(0, 0, 0);
    },
    /**
     * Gets the component values within a line graph formulae, such as gradient and y-intercept from the two provided coordinates
     *
     * @param {Number} red The red channel
     * @param {Number} green The green channel
     * @param {Number} blue The blue channel
     * @returns {String} The gexidecimal format from the mixin color channels provided
     */
    RGBToHex: function (red, green, blue) {
        return "#" + ((red << 16) + (green << 8) + blue).toString(16);
    },
    /**
     * Converts a decimal value into its hexidecimal format
     *
     * @param {Number} value
     * @param {Number} baseFactor The base factor size for the return value
     * @returns {String} The string hexidecimal version for the provided number
     */
    toHex: function (value, baseFactor) {
        if (isNaN(value) || !isFinite(value)) {
            value = 0;
        }
        var _hexString = "#";
        var _value = value.toString(16);
        var _length = baseFactor;
        for (var i = 0; i < _length; i++) {
            _hexString += "0";
        }
        return _hexString + _value;
    },
    /**
     * Converts a provided number to its binary string representation
     *
     * @param {Number} value The number to be converted to a binary string
     * @returns {String} Returns a binary string representation for the provided value
     */
    getBinaryString: function (value) {
        var _bin = "";
        if (typeof value !== "number") {
            return "";
        }
        while (value > 0) {
            _bin = (value & 1) + _bin;
            value = value >> 1;
        }
        return utils_1.default.padLeft(_bin, "0", 8);
    },
    /**
     * Gets the component values within a line graph formulae, such as gradient and y-intercept from the two provided coordinates
     *
     * @param {Vector2} from The start positional vector
     * @param {Vector2} to The end positional vector
     * @remarks The line graph formulae goes as follows: y = f(x) = mx + c
     * @returns {Object} The values for each component in the formulae
     */
    getlineGraphComponents: function (from, to) {
        let _gradient = 0;
        let _yIntercept = 0;
        var _solve = function () {
            /*
                To solve for m (the gradient) the formulae is as follows:
                m = (y2 - y1) / (x2 - x1)
            */
            var _deltaX = to.x - from.x;
            var _deltaY = to.y - from.y;
            if (_deltaX === 0) {
                _gradient = 0;
            }
            else {
                _gradient = _deltaY / _deltaX;
            }
            /*
                To solve for c (the y-intercept) the formulae is as follows:
                c = ( y - (m * x) )
            */
            var _gradientFn = _gradient * from.x;
            return from.y - _gradientFn;
        };
        const _distance = math.distVector(from, to);
        _yIntercept = _solve();
        return {
            gradient: _gradient,
            yIntercept: _yIntercept,
            distance: _distance
        };
    },
    /**
     * Gets the specified index position which corresponding to a one dimensional array
     *
     * @param {Number} x The position in a row (0 indexed)
     * @param {Number} y The position in a column (0 indexed)
     * @param {Number} width The total width to calculate over
     * @returns {Number} The index of the corresponding element within a one dimensional array
     */
    getMatrixIndex2D: function (x, y, width) {
        return y * width + x;
    },
    /**
     * Creates simple oscillation motion
     *
     * @param {Number} angle The angle value
     * @param {Number} height The maximum oscillating distance
     * @returns {Number} a value thats mapped from the padding and amplitude to values between -1 to 1
     */
    oscillate: function (angle, height) {
        return math.map(Math.sin(angle), -1, 1, -height, height);
    },
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
    getMatricesIndex: function (x, y, width, array, border) {
        if (array === null || !Array.isArray(array)) {
            return null;
        }
        border = !!border;
        if (border && (x < 0 || x >= width)) {
            return -1;
        }
        var _index = math.getMatrixIndex2D(x, y, width);
        if (_index > array.length) {
            // avoid index out of bounds error
            _index = 0;
        }
        return array[_index];
    },
    /**
     * Obtains a random array element within a given array
     *
     * @param {Array} array An array
     * @returns {Number} A random element within the array
     */
    randArray: function (array) {
        var rand = Math.random();
        if (utils_1.default.isNullOrUndefined(array) || !Array.isArray(array)) {
            return null;
        }
        return array[Math.floor(rand * array.length)];
    },
    /**
     * Converts a given degree to a radian value
     *
     * @param {Number} degrees A degree value to be converted to radians
     * @returns {Number} The new radian value
     */
    degreesToRadians: function (degrees) {
        return degrees * math.DEGTORAD;
    },
    /**
     * Converts a given radian to a degree value
     *
     * @param {Number} radian A radian value to be converted to degrees
     * @returns {Number} The new degree value
     */
    radiansToDegrees: function (radian) {
        return radian * math.RADTODEG;
    }
};
exports.default = math;
