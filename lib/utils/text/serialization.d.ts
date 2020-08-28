/**
 * Creates a unique guid
 *
 * @public
 * @param {Boolean} random Option to create a random guid or a timestamp based guid
 * @returns {String}
 */
export declare function createGUID(random?: boolean): string;
/**
 * Defines a type for holding cut target and remainder string values
 */
declare type stringCutSource = {
    remainder: string;
    value: string;
};
/**
 * Cuts a target string value from a source, returning @see stringCutSource
 *
 * @param {String} target
 * @param {String} source
 * @returns {stringCutSource}
 */
export declare function cut(target: string, source: string): stringCutSource | null;
/**
 * Regular expression for matching GUIDs
 *
 * @type {RegExp}
 */
export declare const GUID_REGEX: RegExp;
/**
 * Attempts get all guids within a string
 *
 * @param {String} value
 */
export declare function getGuid(value: string): RegExpMatchArray | null;
export {};
