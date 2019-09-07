/**
 * Vectors hold two distinct values (x, y) to represent either distance or velocity in a given direction (Such as Euclidean distance)
 *
 * @documentation https://en.wikipedia.org/wiki/Euclidean_vector
 */
declare class Vector2 {
    private _width;
    private _height;
    x: number;
    y: number;
    /**
     * Default constructor which takes a set of cartesian coordinates
     *
     * @param {number} x The value which falls on the x-axis or direction
     * @param {number} y The value which falls on the y-axis or direction
     */
    constructor(x: number, y: number);
    /**
     * Gets the width for this vector
     */
    /**
    * Sets this vectors width
    *
    * @param {number} value The value to be set
    */
    Width: number;
    /**
     * Gets the height for this vector
     */
    /**
    * Sets this vectors height
    *
    * @param {number} value
    */
    Height: number;
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
     */
    setVector(vector: Vector2): Vector2;
    /**
     * Adds the provided value to the x property on this vector
     *
     * @param {number} scaler
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
     * @param {Vector2} vector A valid Vector2 object
     */
    addVector(vector: Vector2): Vector2;
    /**
     * Adds a scaler value to the current vector object
     *
     * @param {Scaler} scaler
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
     */
    subVector(vector: Vector2): Vector2;
    /**
     * Subtracts a scaler value from the current vector object
     *
     * @param {Scaler} scaler
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
     */
    multiplyVector(vector: Vector2): Vector2;
    /**
     * Multiplies the vectors x and y value to the provided scaler value
     *
     * @param {Scaler} scaler
     */
    multiplyScaler(scaler: number): Vector2;
}
export default Vector2;
