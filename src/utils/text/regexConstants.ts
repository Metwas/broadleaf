/*
     MIT License

     Copyright (c) 2019 Metwas

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in all
     copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     SOFTWARE.
*/

import { SeperatorModel } from "./seperatorModel";
import * as utils from "../utils";

/**
 * Matches all words without spaces within a given string
 */
export const MATCH_WORD = /\w+(!\s)?/g;

/**
 * Matches a email format within a given string
 */
export const MATCH_EMAIL = /[a-z0-9]+\.?[a-z0-9]+@[a-z0-9]+\.(?:com|org|live)/gi;

/**
 * Trims any spaces in front of a given string
 */
export const TRIM_START = /(^[\s]*)/;

/**
 * Trims any spaces at end of a given string
 */
export const TRIM_END = /(\s|\n|\r|\t)+$/;

/**
 * Strips out any whitespace within a given string
 */
export const WHITESPACE = /(\b|)[\s]+/g;

export function MATCH_TOKEN(seperator: SeperatorModel, flags?: string): (value: string) => string {

     let token: string = "";
     let start: string = "";
     let end: string = "";
     if (!(seperator instanceof SeperatorModel)) {

          if (utils.isNullOrUndefined(seperator)) {

               return function (value: string): string {

                    return value;

               };

          }

          if (!utils.isString(seperator)) {

               token = String(token);

          } else {

               token = seperator;

          }

     } else {

          token = seperator.token;
          start = seperator.startSequence;
          end = seperator.endSequence;

     }

     const regex: RegExp = new RegExp("", flags);
     return function (value: string): string {

          return "";

     }

};