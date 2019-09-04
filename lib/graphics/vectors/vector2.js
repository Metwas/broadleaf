"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Vectors hold two distinct values (x, y) to represent either distance or velocity in a given direction (Such as Euclidean distance)
 *
 * @documentation https://en.wikipedia.org/wiki/Euclidean_vector
 */
class Vector2 {
    /**
     * Default constructor which takes a set of cartesian coordinates
     *
     * @param {number} x The value which falls on the x-axis or direction
     * @param {number} y The value which falls on the y-axis or direction
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this._height = 0;
        this._width = 0;
    }
    /**
     * Gets the width for this vector
     */
    get Width() {
        return this._width || 0;
    }
    /**
     * Sets this vectors width
     *
     * @param {number} value The value to be set
     */
    set Width(value) {
        if (value == null || typeof (value) !== "undefined") {
            this._width = value;
        }
    }
    /**
     * Gets the height for this vector
     */
    get Height() {
        return this._height || 0;
    }
    /**
     * Sets this vectors height
     *
     * @param {number} value
     */
    set Height(value) {
        if (value == null || typeof (value) !== "undefined") {
            this._height = value;
        }
    }
    /**
     * Sets the x property on this vector to the value provided
     *
     * @param {number} scaler
     */
    setX(scaler) {
        this.x = scaler;
    }
    /**
     * Sets the y property on this vector to the value provided
     *
     * @param {number} scaler
     */
    setY(scaler) {
        this.y = scaler;
    }
    /**
     * Adds the provided value to the x property on this vector
     *
     * @param {number} scaler
     */
    setVector(vector) {
        this.setX(vector.x);
        this.setY(vector.y);
        return this;
    }
    /**
     * Adds the provided value to the x property on this vector
     *
     * @param {number} scaler
     */
    setScaler(scaler) {
        this.setX(scaler);
        this.setY(scaler);
        return this;
    }
    /**
     * Adds the provided value to the x property on this vector
     *
     * @param {number} scaler
     */
    addX(scaler) {
        this.x += scaler;
    }
    /**
     * Adds the provided value to the y property on this vector
     *
     * @param {number} scaler
     */
    addY(scaler) {
        this.y += scaler;
    }
    /**
     * Adds the provided vector to this current vector object
     *
     * @param {Vector2} vector A valid Vector2 object
     */
    addVector(vector) {
        this.addX(vector.x);
        this.addY(vector.y);
        return this;
    }
    /**
     * Adds a scaler value to the current vector object
     *
     * @param {Scaler} scaler
     */
    addScaler(scaler) {
        this.addX(scaler);
        this.addY(scaler);
        return this;
    }
    /**
     * Subtracts the provided value from the x property on this vector
     *
     * @param {number} scaler
     */
    subX(scaler) {
        this.x -= scaler;
    }
    /**
     * Subtracts the provided value from the y property on this vector
     *
     * @param {number} scaler
     */
    subY(scaler) {
        this.y -= scaler;
    }
    /**
     * Subtracts the provided vector from this current vector object
     *
     * @param {Vector2} vector A valid Vector2 object
     */
    subVector(vector) {
        this.subX(vector.x);
        this.subY(vector.y);
        return this;
    }
    /**
     * Subtracts a scaler value from the current vector object
     *
     * @param {Scaler} scaler
     */
    subScaler(scaler) {
        this.subX(scaler);
        this.subY(scaler);
        return this;
    }
    /**
     * Multiplies the vectors x value to the provided multiplier
     *
     * @param {number} scaler A multiplier scaler
     */
    multiplyX(scaler) {
        this.x *= scaler;
    }
    /**
     * Multiplies the vectors y value to the provided multiplier
     *
     * @param {number} scaler The multiplier scaler
     */
    multiplyY(scaler) {
        this.y *= scaler;
    }
    /**
     * Multiplies the vectors x and y value to the provided vector object
     *
     * @param {Vector2} vector A valid Vector2 object
     */
    multiplyVector(vector) {
        this.multiplyX(vector.x);
        this.multiplyY(vector.y);
        return this;
    }
    /**
     * Multiplies the vectors x and y value to the provided scaler value
     *
     * @param {Scaler} scaler
     */
    multiplyScaler(scaler) {
        this.multiplyX(scaler);
        this.multiplyY(scaler);
        return this;
    }
}
exports.default = Vector2;
