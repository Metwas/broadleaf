import { SeperatorModel } from "./SeperatorModel";
/**
 * Matches all words without spaces within a given string
 */
export declare const MATCH_WORD: RegExp;
/**
 * Matches a email format within a given string
 */
export declare const MATCH_EMAIL: RegExp;
/**
 * Trims any spaces in front of a given string
 */
export declare const TRIM_START: RegExp;
/**
 * Trims any spaces at end of a given string
 */
export declare const TRIM_END: RegExp;
/**
 * Strips out any whitespace within a given string
 */
export declare const WHITESPACE: RegExp;
export declare function MATCH_TOKEN(seperator: SeperatorModel, flags?: string): (value: string) => string;
