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
     * Default constructor which initializes a random generator from a random seed using @see Math.random
     */
    constructor();
    /**
     * Gets a new random integer
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
