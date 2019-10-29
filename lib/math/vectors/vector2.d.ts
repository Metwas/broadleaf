/**
 * Vectors use the cartesian x and y coordinates to represent magnitude and direction (Euclidean Vectors)
 *
 * @documentation https://en.wikipedia.org/wiki/Euclidean_vector
 */
export declare class Vector2 {
    /**
     * The coordinate on the x-axis
     */
    x: number;
    /**
     * The coordinate on the y-axis
     */
    y: number;
    /**
     * Default constructor which takes a set of cartesian coordinates
     *
     * @param {number} x The value which falls on the x-axis or direction
     * @param {number} y The value which falls on the y-axis or direction
     */
    constructor(x: number, y: number);
    /**
     * Calculates the magnitude of the vector
     *
     * @returns {Number}
     */
    magnitude(): number;
    /**
     * Calculates the vectors coordinates based from the new magnitude value provided
     *
     * @param {Number} value
     * @returns {Vector2}
     */
    setMagnitude(value: number): Vector2;
    /**
     * Creates a new Vector2 from the current vectors magnitude
     *
     * @returns {Vector2}
     */
    copy(): Vector2;
    /**
     * Linear interpolates from the current vector to a new vector or scaler
     *
     * @param {Vector2 | Number} vector A Vector2 or Scaler
     * @param {Number} step The step value from 0 - 1 (1 being the final vector coordinates)
     * @returns {Vector2}
     */
    lerp(vector: Vector2, step: number): Vector2;
    /**
     * Calculates the Euclidean distance from the current Vector2 instance and another Vector2 parameter
     *
     * @param {Vector2} vector
     */
    distance(vector: Vector2): number;
    /**
     * Sets the x property on this vector to the value provided
     *
     * @param {number} scaler
     */
    setX(scaler: number): void;
    /**
     * Sets the y property on this vector to the value provided
     *
     * @param {number} scaler
     */
    setY(scaler: number): void;
    /**
     * Adds the provided value to the x property on this vector
     *
     * @param {number} scaler
     * @returns {Vector2}
     */
    setVector(vector: Vector2): Vector2;
    /**
     * Adds the provided value to the x property on this vector
     *
     * @param {number} scaler
     * @returns {Vector2}
     */
    setScaler(scaler: number): Vector2;
    /**
     * Adds the provided value to the x property on this vector
     *
     * @param {number} scaler
     */
    addX(scaler: number): void;
    /**
     * Adds the provided value to the y property on this vector
     *
     * @param {number} scaler
     */
    addY(scaler: number): void;
    /**
     * Adds the provided vector to this current vector object
     *
     * @param {Vector2 | Number} vector A valid Vector2 object or a scaler
     * @returns {Vector2}
     */
    addVector(vector: Vector2): Vector2;
    /**
     * Adds a scaler value to the current vector object
     *
     * @param {Scaler} scaler
     * @returns {Vector2}
     */
    addScaler(scaler: number): Vector2;
    /**
     * Subtracts the provided value from the x property on this vector
     *
     * @param {number} scaler
     */
    subX(scaler: number): void;
    /**
     * Subtracts the provided value from the y property on this vector
     *
     * @param {number} scaler
     */
    subY(scaler: number): void;
    /**
     * Subtracts the provided vector from this current vector object
     *
     * @param {Vector2} vector A valid Vector2 object
     * @returns {Vector2}
     */
    subVector(vector: Vector2): Vector2;
    /**
     * Subtracts a scaler value from the current vector object
     *
     * @param {Scaler} scaler
     * @returns {Vector2}
     */
    subScaler(scaler: number): Vector2;
    /**
     * Multiplies the vectors x value to the provided multiplier
     *
     * @param {number} scaler A multiplier scaler
     */
    multiplyX(scaler: number): void;
    /**
     * Multiplies the vectors y value to the provided multiplier
     *
     * @param {number} scaler The multiplier scaler
     */
    multiplyY(scaler: number): void;
    /**
     * Multiplies the vectors x and y value to the provided vector object
     *
     * @param {Vector2} vector A valid Vector2 object
     * @returns {Vector2}
     */
    multiplyVector(vector: Vector2): Vector2;
    /**
     * Multiplies the vectors x and y value to the provided scaler value
     *
     * @param {Scaler} scaler
     * @returns {Vector2}
     */
    multiplyScaler(scaler: number): Vector2;
    /**
     * Normalizes the current vector's length to 1
     *
     * @returns {Vector2}
     */
    normalize(): Vector2;
    /**
     * Limits the vectors magnitude by a set maximum parameter
     */
    limit(max: number): Vector2;
    /**
     * Calculates the current vectors rotational angle
     *
     * @returns {Number} The angle in radians
     */
    heading(): number;
    /**
     * Rotates the current vector by a given angle
     *
     * @param {Number} angle
     * @returns {Vector2}
     */
    rotate(angle: number): Vector2;
}
