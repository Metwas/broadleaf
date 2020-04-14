/*
     MIT License

     Copyright (c) 2020 Metwas

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

/**
 * Creates a unique guid
 * 
 * @public
 * @param {Boolean} random Option to create a random guid or a timestamp based guid
 * @returns {String}
 */
export function createGUID(random: boolean = true): string {

     return (random === true ? require("uuid").v4 : require("uuid").v1)();

};

/**
 * Defines a type for holding cut target and remainder string values
 */
type stringCutSource = { remainder: string, value: string };

/**
 * Cuts a target string value from a source, returning @see stringCutSource
 * 
 * @param {String} target 
 * @param {String} source 
 * @returns {stringCutSource}
 */
export function cut(target: string, source: string): stringCutSource | null {

     /**
      * Validate types
      */
     if (typeof target === "string" && typeof source === "string") {

          const original: string = source.substring(source.indexOf(target), target.length);
          /**
           * Return type @see stringCutSource
           */
          return { value: original, remainder: source.replace(original, "") };

     }

     /**
      * Return an null if we got this far
      */
     return null;

};