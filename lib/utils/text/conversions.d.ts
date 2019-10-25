/**
 * Converts a decimal value into its hexidecimal format
 *
 * @param {Number} value
 * @param {Number} baseFactor The base factor size for the return value
 * @returns {String} The string hexidecimal version for the provided number
 */
export declare function toHexidecimal(value: number, baseFactor: number): string;
/**
 * Converts a provided number to its binary string representation
 *
 * @param {Number} value The number to be converted to a binary string
 * @returns {String} Returns a binary string representation for the provided value
 */
export declare function toBinary(value: number): string;
/**
 * Prepends a charactor over a provided iteration count to the current string instance
 *
 * @param {String} char The charactor to prepend to the current string instance
 * @param {Number} count The length of padding to prepend
 * @returns {String} returns a readable string format of the current system time, e.g: 11:48:20
 */
export declare function padLeft(value: string, char: string, count: number): string;