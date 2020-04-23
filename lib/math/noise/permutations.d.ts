/**
 * A permutation table consists of all numbers from 0 - 255 in a non-orderly way
 */
export declare const PERMUTATION_FIXED_256: Array<number>;
/**
 * Creates a new permutation table
 *
 * @param {Number} max
 * @param {Number} min
 * @param {Number} clampedSize A defined resolution to map linearly
 * @param {Boolean} randomSeed
 */
export declare function PERMUTATION_CREATE(max: number, min: number, clampedSize?: any, randomSeed?: boolean): number[];
/**
 * Defines permutation creatation options
 *
 * @public
 * @type {Object}
 */
export declare type PERMUTATION_OPTIONS = {
    fixed?: boolean;
    max: number;
    min: number;
    resolution?: number;
};
