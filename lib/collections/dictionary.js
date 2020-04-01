"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
//===================== imports =====================//
// import utilities
const utils = require("../utils/utils");
const typeGuard = function (obj, constructor) { return utils.isInstanceOf(obj, constructor); };
/**
 * Base Dictionary implementation which is strongly typed
 */
class Dictionary {
    /**
     * Constructs a @see Dictionary instance from an @see Array
     *
     * @param {IKeyValuePair<T> | null} enumerable
     */
    constructor(enumerable = null) {
        /**
         * Underlying container for the dictionary elements
         *
         * @type {Object}
         */
        this._source = {};
        if (enumerable !== null && enumerable !== void 0) {
            if (utils.isInstanceOf(enumerable, Dictionary)) {
                /**
                 * Get contents of the @see Dictionary as an @see Array
                 */
                enumerable = enumerable.list();
            }
            if (utils.isArray(enumerable)) {
                /**
                 * The key within the dictionary will be the indexes of the array
                 */
                const keys = Object.keys(enumerable);
                const length = keys.length;
                let index = 0;
                for (; index < length; index++) {
                    const key = keys[index];
                    const value = enumerable[index];
                    /**
                     * Add to underlying source
                     */
                    this.add(key, value);
                }
            }
        }
    }
    /**
     * Adds an entry to the underlying collection
     *
     * @public
     * @param {String} name
     * @param {T} arg
     */
    add(name, arg) {
        if (utils.isNullOrUndefined(arg)) {
            throw new Error("Dictionary does not accept null or undefined values to be added");
        }
        /**
         * Only add if not already defined
         */
        if (!this.contains(name) === true) {
            this._source[name] = arg;
        }
    }
    /**
     * Removes and returns the @see T element specified by name
     *
     * @public
     * @param {String} name
     * @returns {T | null}
     */
    remove(name) {
        /**
         * Check if value exists
         */
        if (!this.contains(name) === true) {
            const source = this._source[name];
            delete this._source[name];
            return source;
        }
        return null;
    }
    /**
     * Gets a specified element by name
     *
     * @param {String} name
     */
    get(name) {
        if (this.contains(name) === true) {
            return this._source[name];
        }
        /**
         * No element
         */
        return null;
    }
    /**
     * Checks if a specific @see T element exists within the dictionary
     *
     * @public
     * @param {String} name
     * @returns {Boolean}
     */
    contains(name) { return (name in this._source); }
    /**
     * Returns the dictionary elements as a @see Array
     *
     * @param {Boolean | Function} sort An optional argument to use a default sort or custom compare function
     * @returns {Array<IKeyValuePair<T>>}
     */
    list(sort) {
        const arr = [];
        const keys = Object.keys(this._source);
        const length = keys.length;
        let index = 0;
        for (; index < length; index++) {
            /**
             * Map each dictionary element to a @see IKeyValuePair object
             */
            const key = keys[index];
            const value = this._source[key];
            arr.push({ key: key, value: value });
        }
        return arr;
    }
}
exports.Dictionary = Dictionary;
