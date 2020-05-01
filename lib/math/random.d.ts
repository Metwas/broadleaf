/**
 * Represents a stream-cipher, which generates a pseudo-random number of bits (keystream)
 *
 * RC4 is also known as ARC4
 *
 * @see https://en.wikipedia.org/wiki/RC4
 */
export declare class RC4 {
    /**
     * A key stream permutation table of a specified size, defaults to 2048
     *
     * @private
     * @type {Array<Number>}
     */
    private keys;
    /**
     * A permutation table of constant size 256-bits
     *
     * @private
     * @type {Array<Number>}
     */
    private stream;
    /**
     * 8-bit mask (256 - 1)
     *
     * @private
     * @type {Number}
     */
    private mask;
    /**
     * Double significance 52-bits for each double ( IEEE 754 )
     *
     * @private
     * @typeo {Number}
     * @see https://en.wikipedia.org/wiki/Double-precision_floating-point_format
     */
    private significance;
    /**
     * Create an overflow limit
     *
     * @private
     * @type {Number}
     */
    private overflow;
    /**
     * Cached state
     *
     * @type {Number}
     */
    private max;
    /**
     * Cached state indices. Used during the generate function
     *
     * @type {Number}
     */
    private i;
    private j;
    /**
     * Default constructor, which initializes the @see keys permutation table to 2048
     */
    constructor();
    /**
     * Generates a a 8-bit value from the initial start sequence
     *
     * @public
     * @param {Number} start
     */
    generate(start?: number): number;
    /**
     * Generates a new random value between [0 - 1]
     *
     * @public
     * @returns {Number}
     */
    next(): number;
}
/**
 * Represents a basic Linear congruential generator (LCG)
 *
 * @see https://en.wikipedia.org/wiki/Linear_congruential_generator
 */
export declare class LCG {
    /**
     * modular values are usually to the power of two (2^32 OR 2^64 are both most common)
     *
     * @private
     * @type {Number}
     */
    private readonly modular;
    /**
     * Represents a multiplier (which for 2^32 modular, GCC and ANSI C use 1103515245)
     *
     * @private
     * @type {Number}
     */
    private readonly multiplier;
    /**
     * Represents the increment to initial seed value
     *
     * @private
     * @type {Number}
     */
    private readonly increment;
    /**
     * Current state value of the generator
     *
     * @private
     * @type {Number}
     */
    private state;
    /**
     * Initailizes a random generator from a specified seed value
     *
     * @param {Number} seed
     */
    constructor(seed: number);
    /**
     * Gets a new random float value between [0 - 1]
     *
     * @public
     * @returns {Number}
     */
    next(): number;
    /**
     * Gets a random value between the specified ranges
     *
     * @public
     * @param {Number} start
     * @param {Number} end
     * @returns {Number}
     */
    nextRange(start: number, end: number): number;
}
