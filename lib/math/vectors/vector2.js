"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
//===================== imports =====================//
var utils = require("../../utils/utils");
var math = require("../math");
//===================== End imports =====================//
/**
 * Vectors use the cartesian x and y coordinates to represent magnitude and direction (Euclidean Vectors)
 *
 * @documentation https://en.wikipedia.org/wiki/Euclidean_vector
 */
var Vector2 = /** @class */ (function () {
    /**
     * Default constructor which takes a set of cartesian coordinates
     *
     * @param {number} x The value which falls on the x-axis or direction
     * @param {number} y The value which falls on the y-axis or direction
     */
    function Vector2(x, y) {
        this.x = utils.isNumber(x) ? x : 0;
        this.y = utils.isNumber(y) ? y : 0;
    }
    /**
     * Creates a new @see Vector2 instance from the given angle and length
     *
     * @param {Number} angle - in degrees
     * @param {Number} length
     * @returns {Vector2}
     */
    Vector2.fromAngle = function (angle, length) {
        if (length === void 0) { length = 1; }
        // ensure length is valid
        length = utils.isNumber(length) ? length : 1;
        return new Vector2(length * Math.cos(angle), length * Math.sin(angle));
    };
    /**
     * Creates a @see Vector2 instance with a random heading set (magnitude is set to 1)
     *
     * @returns {Vector2}
     */
    Vector2.random = function () {
        return Vector2.fromAngle(Math.random() * math.TAU, 1);
    };
    /**
     * Calculates the magnitude of the vector
     *
     * @returns {Number}
     */
    Vector2.prototype.magnitude = function () {
        return Math.sqrt((this.x + this.y) * (this.x + this.y));
    };
    /**
     * Calculates the magnitude squared of the vector
     *
     * @returns {Number}
     */
    Vector2.prototype.magnitudeSquared = function () {
        return this.x * this.x + this.y * this.y;
    };
    /**
     * Calculates the vectors coordinates based from the new magnitude value provided
     *
     * @param {Number} value
     * @returns {Vector2}
     */
    Vector2.prototype.setMagnitude = function (value) {
        if (!utils.isNumber(value)) {
            console.warn("Invalid argument provided: magnitude must be of number type");
            return this;
        }
        // get current heading
        var angle = this.heading();
        // calculate the coordinates against the angle multiplied by the new magnitude value
        this.x = Math.cos(angle) * value;
        this.y = Math.sin(angle) * value;
        // return current vector for chaining
        return this;
    };
    /**
     * Calculates the dot product between the current @see Vector2 and the vector or vector coordiates provided
     *
     * @see https://en.wikipedia.org/wiki/Dot_product
     * @public
     * @param {Number | Vector2} x
     * @param {Number} y
     * @returns {Vector2}
     */
    Vector2.prototype.dot = function (x, y) {
        if (y === void 0) { y = 0; }
        /** Flatten the @see Vector2 */
        if (x instanceof Vector2) {
            return this.dot(x.x, x.y);
        }
        // Calculate dot product
        this.x * (x || 0) + this.y * (y || 0);
        return this;
    };
    /**
     * Creates a new Vector2 from the current vectors magnitude
     *
     * @returns {Vector2}
     */
    Vector2.prototype.copy = function () {
        return new Vector2(this.x, this.y);
    };
    /**
     * Linear interpolates from the current vector to a new vector or scaler
     *
     * @param {Vector2 | Number} vector A Vector2 or Scaler
     * @param {Number} step The step value from 0 - 1 (1 being the final vector coordinates)
     * @returns {Vector2}
     */
    Vector2.prototype.lerp = function (vector, step) {
        if (vector instanceof Vector2) {
            this.setMagnitude(math.lerp(this.magnitude(), vector.magnitude(), step));
        }
        else if (utils.isNumber(vector)) {
            this.setMagnitude(math.lerp(this.magnitude(), vector, step));
        }
        return this;
    };
    /**
     * Calculates the Euclidean distance from the current Vector2 instance and another Vector2 parameter
     *
     * @param {Vector2} vector
     * @returns {Number}
     */
    Vector2.prototype.distance = function (vector) {
        if (!(vector instanceof Vector2)) {
            console.warn("Invalid argument provided: must be a Vector2 instance");
            return 0;
        }
        // clone the current instance first, magnitude is the distance calculation after the subtraction
        return this.copy().subVector(vector).magnitude();
    };
    /**
     * Sets the x property on this vector to the value provided
     *
     * @param {number} scaler
     */
    Vector2.prototype.setX = function (scaler) {
        this.x = scaler;
    };
    /**
     * Sets the y property on this vector to the value provided
     *
     * @param {number} scaler
     */
    Vector2.prototype.setY = function (scaler) {
        this.y = scaler;
    };
    /**
     * Adds the provided value to the x property on this vector
     *
     * @param {number} scaler
     * @returns {Vector2}
     */
    Vector2.prototype.setVector = function (vector) {
        if (vector instanceof Vector2) {
            this.setX(vector.x);
            this.setY(vector.y);
        }
        else if (utils.isNumber(vector)) {
            return this.multiplyScaler(vector);
        }
        return this;
    };
    /**
     * Adds the provided value to the x property on this vector
     *
     * @param {number} scaler
     * @returns {Vector2}
     */
    Vector2.prototype.setScaler = function (scaler) {
        if (!utils.isNumber(scaler)) {
            console.warn("Invalid argument provided: scalers must of number type");
            return this;
        }
        this.setX(scaler);
        this.setY(scaler);
        return this;
    };
    /**
     * Adds the provided value to the x property on this vector
     *
     * @param {number} scaler
     */
    Vector2.prototype.addX = function (scaler) {
        this.x += scaler;
    };
    /**
     * Adds the provided value to the y property on this vector
     *
     * @param {number} scaler
     */
    Vector2.prototype.addY = function (scaler) {
        this.y += scaler;
    };
    /**
     * Adds the provided vector to this current vector object
     *
     * @param {Vector2 | Number} vector A valid Vector2 object or a scaler
     * @returns {Vector2}
     */
    Vector2.prototype.addVector = function (vector) {
        if (vector instanceof Vector2) {
            this.addX(vector.x);
            this.addY(vector.y);
        }
        else if (utils.isNumber(vector)) {
            return this.multiplyScaler(vector);
        }
        return this;
    };
    /**
     * Adds a scaler value to the current vector object
     *
     * @param {Scaler} scaler
     * @returns {Vector2}
     */
    Vector2.prototype.addScaler = function (scaler) {
        if (!utils.isNumber(scaler)) {
            console.warn("Invalid argument provided: scalers must of number type");
            return this;
        }
        this.addX(scaler);
        this.addY(scaler);
        return this;
    };
    /**
     * Subtracts the provided value from the x property on this vector
     *
     * @param {number} scaler
     */
    Vector2.prototype.subX = function (scaler) {
        this.x -= scaler;
    };
    /**
     * Subtracts the provided value from the y property on this vector
     *
     * @param {number} scaler
     */
    Vector2.prototype.subY = function (scaler) {
        this.y -= scaler;
    };
    /**
     * Subtracts the provided vector from this current vector object
     *
     * @param {Vector2} vector A valid Vector2 object
     * @returns {Vector2}
     */
    Vector2.prototype.subVector = function (vector) {
        if (vector instanceof Vector2) {
            this.subX(vector.x);
            this.subY(vector.y);
        }
        else if (utils.isNumber(vector)) {
            return this.multiplyScaler(vector);
        }
        return this;
    };
    /**
     * Subtracts a scaler value from the current vector object
     *
     * @param {Scaler} scaler
     * @returns {Vector2}
     */
    Vector2.prototype.subScaler = function (scaler) {
        if (!utils.isNumber(scaler)) {
            console.warn("Invalid argument provided: scalers must of number type");
            return this;
        }
        this.subX(scaler);
        this.subY(scaler);
        return this;
    };
    /**
     * Multiplies the vectors x value to the provided multiplier
     *
     * @param {number} scaler A multiplier scaler
     */
    Vector2.prototype.multiplyX = function (scaler) {
        this.x *= scaler;
    };
    /**
     * Multiplies the vectors y value to the provided multiplier
     *
     * @param {number} scaler The multiplier scaler
     */
    Vector2.prototype.multiplyY = function (scaler) {
        this.y *= scaler;
    };
    /**
     * Multiplies the vectors x and y value to the provided vector object
     *
     * @param {Vector2} vector A valid Vector2 object
     * @returns {Vector2}
     */
    Vector2.prototype.multiplyVector = function (vector) {
        if (vector instanceof Vector2) {
            this.multiplyX(vector.x);
            this.multiplyY(vector.y);
        }
        else if (utils.isNumber(vector)) {
            return this.multiplyScaler(vector);
        }
        return this;
    };
    /**
     * Multiplies the vectors x and y value to the provided scaler value
     *
     * @param {Scaler} scaler
     * @returns {Vector2}
     */
    Vector2.prototype.multiplyScaler = function (scaler) {
        if (!utils.isNumber(scaler)) {
            console.warn("Invalid argument provided: scalers must of number type");
            return this;
        }
        this.multiplyX(scaler);
        this.multiplyY(scaler);
        return this;
    };
    /**
     * Normalizes the current vector's length to 1
     *
     * @returns {Vector2}
     */
    Vector2.prototype.normalize = function () {
        var mag = this.magnitude();
        if (mag > 0) {
            return this.multiplyScaler(1 / mag);
        }
        return this;
    };
    /**
     * Limits the vectors magnitude by a set maximum parameter
     */
    Vector2.prototype.limit = function (max) {
        var magnitude = this.magnitude();
        // ensure magnitude is less than the magnitude of the maximum parameter value
        if (magnitude > math.square(max)) {
            // normalize first, then multiple scaler to get the highest possible magnitude set
            return this.normalize().multiplyScaler(max);
        }
        // dont do anything, simple return current vector instance
        return this;
    };
    /**
     * Calculates the current vectors rotational angle
     *
     * @returns {Number} The angle in radians
     */
    Vector2.prototype.heading = function () {
        return Math.atan2(this.y, this.x);
    };
    /**
     * Rotates the current vector by a given angle
     *
     * @param {Number} angle
     * @returns {Vector2}
     */
    Vector2.prototype.rotate = function (angle) {
        var mag = this.magnitude();
        var newAngle = this.heading() + angle;
        // update the position based from the angle and magnitude
        this.x = Math.cos(newAngle) * mag;
        this.y = Math.sin(newAngle) * mag;
        // return the vector to allow for chaining
        return this;
    };
    return Vector2;
}());
exports.Vector2 = Vector2;
