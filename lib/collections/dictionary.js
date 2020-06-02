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
var utils = require("../utils/utils");
var typeGuard = function (obj, constructor) { return utils.isInstanceOf(obj, constructor); };
/**
 * Default truthy predicate
 *
 * @private
 * @param {Any} arg
 */
var defaultPredicate = function (arg) { return true; };
/**
 * Base Dictionary implementation which is strongly typed
 */
var Dictionary = /** @class */ (function () {
    /**
     * Constructs a @see Dictionary instance from an @see Array
     *
     * @param {IKeyValuePair<T> | null} enumerable
     * @param {Function} predicate
     */
    function Dictionary(enumerable, predicate) {
        if (enumerable === void 0) { enumerable = null; }
        if (predicate === void 0) { predicate = defaultPredicate; }
        /**
         * Underlying container for the dictionary elements
         *
         * @type {Object}
         */
        this._source = {};
        if (enumerable !== null && enumerable !== void 0) {
            if (utils.isInstanceOf(enumerable, Dictionary)) {
                /** Get contents of the @see Dictionary as an @see Array */
                enumerable = enumerable.list();
            }
            if (utils.isArray(enumerable) || utils.isInstanceOf(enumerable, Dictionary)) {
                this.addRange(enumerable, predicate);
            }
        }
    }
    /**
     * Adds an entry to the underlying collection
     *
     * @public
     * @param {String} name
     * @param {T} arg
     * @param {Function} predicate
     */
    Dictionary.prototype.add = function (name, arg, predicate) {
        if (predicate === void 0) { predicate = defaultPredicate; }
        // validate type instance
        if (utils.isNullOrUndefined(arg)) {
            throw new Error("Invalid type requested to be added to this dictionary instance");
        }
        // validate predicate condition
        if (predicate(arg) && !this.contains(name)) {
            this._source[name] = arg;
        }
    };
    /**
     * Adds an array of @see IKeyValuePair entries to this @see Dictionary instance
     *
     * @public
     * @param {Array<IKeyValuePair<T>>}
     * @param {Function} predicate
     */
    Dictionary.prototype.addRange = function (array, predicate) {
        if (predicate === void 0) { predicate = defaultPredicate; }
        // flatten array if dictionary type
        array = utils.isInstanceOf(array, Dictionary) ? array.list() : array;
        var length = utils.isArray(array) ? array.length : 0;
        var index = 0;
        for (; index < length; index++) {
            var element = array[index];
            var name_1 = utils.isString(element.key) ? element.key : String(index);
            // add key pair element
            this.add(name_1, element.value, predicate);
        }
    };
    /**
     * Removes and returns the @see T element specified by name
     *
     * @public
     * @param {String} name
     * @returns {T | null}
     */
    Dictionary.prototype.remove = function (name) {
        // Check if value exists
        if (this.contains(name) === true) {
            var source = this._source[name];
            delete this._source[name];
            return source;
        }
        return null;
    };
    /**
     * Gets a specified element by name
     *
     * @param {String} name
     */
    Dictionary.prototype.get = function (name) { return this.contains(name) === true ? this._source[name] : null; };
    /**
     * Checks if a specific @see T element exists within the dictionary
     *
     * @public
     * @param {String} name
     * @returns {Boolean}
     */
    Dictionary.prototype.contains = function (name) { return (name in this._source); };
    /**
     * Gets the total count of entries within this @see IDictionary instance
     *
     * @returns {Number}
     */
    Dictionary.prototype.count = function () { return Object.keys(this._source).length || 0; };
    /**
     * Returns the dictionary elements as a @see Array
     *
     * @param {Boolean | Function} sort An optional argument to use a default sort or custom compare function
     * @returns {Array<IKeyValuePair<T>>}
     */
    Dictionary.prototype.list = function (sort) {
        if (sort === void 0) { sort = null; }
        var arr = [];
        var keys = Object.keys(this._source);
        var length = keys.length;
        var index = 0;
        for (; index < length; index++) {
            /**
             * Map each dictionary element to a @see IKeyValuePair object
             */
            var key = keys[index];
            var value = this._source[key];
            arr.push({ key: key, value: value });
        }
        return typeof sort === "function" ? arr.sort(sort) : arr;
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
