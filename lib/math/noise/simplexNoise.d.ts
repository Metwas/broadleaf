/**
 * Updates the noise level detail by the provided value
 *
 * @public
 * @param {Number} value
 */
export declare function noiseDetail(value: number): void;
/**
 * Creates a simplex octave class which yields the simplex noise function for up to the third-dimension and detailed by @see NOISE_DETAIL
 *
 * @param seed
 * @returns {Function} The noise detail function
 */
export declare function createNoise(seed: number): (x: number, y: number, z: number) => number;
