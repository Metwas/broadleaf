/**
 * Dimensional gradientient helper function
 */
export declare class gradient {
    x: number;
    y: number;
    z: number;
    w: number;
    /**
     * Default 1 dimensional contructor setup
     */
    constructor(x: number);
    /**
     * Default 2 dimensional contructor setup
     */
    constructor(x: number, y: number);
    /**
     * Default 3 dimensional constructor setup
     */
    constructor(x: number, y: number, z: number);
    /**
     * Default 4 dimensional constructor setup
     */
    constructor(x: number, y: number, z: number, w: number);
    /**
     * Calculates the dot product for points upto the 4th dimension
     *
     * @public
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @param {Number} w
     * @returns {Number}
     */
    dot(x?: number, y?: number, z?: number, w?: number): number;
}
/**
 * 3rd dimensional gradient definitions
 *
 * @type {Array<gradient>}
 */
export declare const GRAD_3D: Array<any>;
/**
 * 4th dimensional gradient definitions
 *
 * @type {Array<gradient>}
 */
export declare const GRAD_4D: Array<any>;
