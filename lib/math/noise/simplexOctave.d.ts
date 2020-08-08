/**
 * This class defines noise of various dimensions with customizable gradient and permutations options
 * for a given octave
 *
 * @see https://stackoverflow.com/questions/18279456/any-simplex-noise-tutorials-or-resources
 */
export declare class Simplex_octave {
    /**
     * Default number of swaps to perform
     *
     * @private
     * @type {Number}
     */
    private DEFAULT_SWAP_COUNT;
    /**
     * Get a randomly sorted 8-bit permutation table
     *
     * @private
     * @type {Array<Number>}
     */
    private permutation_table;
    /**
     * Double permutation index wrappers
     *
     * @private
     * @type {Array<Number>}
     */
    private double_permutation_table;
    private double_permutation_table_mod12;
    /**+
     * Initializes this @see Simplex_octave instance from a specified seed. Defaults to a random seed generation
     *
     * @param {Number} seed If set to null or zero , a random seed will be generated
     */
    constructor(seed?: number);
    static F2: number;
    static G2: number;
    static F3: number;
    static G3: number;
    static F4: number;
    static G4: number;
    /**
     * Noise function for one-dimensional noise
     *
     * @public
     * @param {Number} x
     * @returns {Number}
     */
    noise(x: number): number;
    /**
     * 2nd dimensional noise definition
     *
     * @public
     * @param {Number} x
     * @param {Number} y
     * @returns {Number}
     */
    noise(x: number, y: number): number;
    /**
     * 3rd dimensional noise definition
     *
     * @public
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @returns {Number}
     */
    noise(x: number, y: number, z: number): number;
    /**
     * 2nd dimensional noise implementation
     *
     * @public
     * @param {Number} x
     * @param {Number} y
     * @returns {Number}
     */
    private noise2d;
    /**
     * 3rd dimensional noise implementation
     *
     * @public
     * @param {Number} x
     * @param {Number} y
     * @returns {Number}
     */
    noise3d(x: number, y: number, z: number): number;
    /**
     * Gets a permutation table
     *
     * @param {PERMUTATION_OPTIONS} options
     * @returns {Array<number>}
     */
    private getPermutationTable;
}
