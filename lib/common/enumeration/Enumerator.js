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
// import common utilities
const utils = require("../../utils/utils");
//===================== End imports =====================//
/**
 * Represents a base enumeration definition
 */
function Enumerator() { }
exports.Enumerator = Enumerator;
;
/**
 * Provide a validation function on a enumerator
 *
 * @public
 * @param {Number | String}
 * @returns {Boolean}
 */
Enumerator.validate = function (enumerator, value) {
    /**
     * Assign value to the enumerator reference if it matches an enum key type, such as @see String | @see Number
     */
    if (Enumerator.isValidEnumType(enumerator) && utils.isNullOrUndefined(value)) {
        value = enumerator;
    }
    /**
     * Validate instance binding
     */
    const self = utils.isNullOrUndefined(this) ? (Enumerator.isValidEnumType(enumerator) ? {} : enumerator) : this;
    /**
     * This will return false if the provided parameter is not a valid enumeration
     */
    return Enumerator.isValidEnumType(self[value]);
};
/**
 * Creates an enumeration model object
 *
 * @param {Array} values
 * @param {Number} startIndex {Optional}
 * @returns {Enumerator}
 */
Enumerator.create = function (values, startIndex) {
    /**
     * Current enum count
     */
    let _currentIndex = (utils.isNumber(startIndex) && startIndex > -1) ? startIndex : 0;
    /**
     * Create an empty @see Enumerator instance
     */
    const enumerator = Object.create(this);
    /**
     * Validate start position
     */
    if (!utils.isNumber(startIndex) || startIndex < 0) {
        startIndex = 0;
    }
    /**
     * Assigns the enumeration entry to a @see Enumerator instance
     *
     * @param {Enumerator} enumerator
     * @param {String} value
     * @param {Number} index
     * @returns {Enumerator}
     */
    const assign = function (enumerator, value, index) {
        // increment enumeration count
        _currentIndex++;
        /**
         * Flatten value if object literal
         */
        if (utils.isObjectLiteral(value)) {
            value = value["value"];
            index = value["index"];
        }
        /**
         *  ensure value is of @see String type
         */
        value = utils.isString(value) ? value : "";
        // add entry
        return enumerator[enumerator[value] = ((utils.isNumber(index) && index >= _currentIndex) ? index : _currentIndex - 1)] = value;
    };
    /**
     * Iterate through values parameter
     */
    let index = 0;
    const length = utils.isArray(values) ? values.length : 0;
    for (; index < length; index++) {
        assign(enumerator, values[index], 0);
    }
    /**
     * Return @see Enumerator instance
     */
    return enumerator;
};
/**
 * Validates the provided value, ensuring types are matched
 *
 * @public
 * @param {Number | String} value
 * @returns {Boolean}
 */
Enumerator.isValidEnumType = function (value) { return (utils.isString(value) || utils.isNumber(value)); };
/**
 * create minimal prototype
 */
Enumerator.prototype = {
    /**
     * Provide a validation function on a enumerator
     *
     * @param {Number | String}
     * @returns {Boolean}
     */
    validate: function (value) { return Enumerator.validate(this, value); }
};
//===================== End Exports =====================//
