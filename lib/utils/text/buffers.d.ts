/// <reference types="node" />
/**
 * Converts a given string into a @see Buffer
 *
 * @param {String} value
 * @param {String} encoding Optional charactor encoding definition, defaults to ISO5589-1 (utf-16)
 * @returns {Buffer}
 * @throws {TypeError} if value was not a valid string
 */
export declare function fromString(value: string, encoding?: string): Buffer;
/**
 * Converts a given buffer to its string representation
 *
 * @param {Buffer | ArrayBuffer} buffer
 * @param {String} encoding
 * @returns {String}
 */
export declare function toString(buffer: ArrayBuffer | Buffer, encoding: string): string;
