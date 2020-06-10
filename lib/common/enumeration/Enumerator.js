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
var utils = require("../../utils/utils");
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
    /** This will return false if the provided parameter is not a valid enumeration */
    return (utils.isNullOrUndefined(value) || utils.isNullOrUndefined(enumerator)) ? false : Enumerator.isValidEnumType(enumerator[value]);
};
/**
 * Validates the parameter to ensure it is a valid @see Enumerator object
 *
 * @public
 * @param {Enumerator} enumerator
 * @returns {Boolean}
 */
Enumerator.isEnumerator = function (enumerator) {
    if (utils.isNullOrUndefined(enumerator)) {
        return false;
    }
    var index = 0;
    var keys = Object.keys(enumerator);
    var length = keys.length;
    /**
     * Loop through each key within the provided enumerator parameter
     */
    for (; index < length; index++) {
        var key = keys[index];
        var property = enumerator[key];
        var value = String(enumerator[enumerator[property]]);
        /**
         * Loop property back to index value and ensure a match
         */
        if (String(enumerator[value]) !== key) {
            return false;
        }
    }
    // True if it passed all conditions
    return true;
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
    var _currentIndex = (utils.isNumber(startIndex) && startIndex > -1) ? startIndex : 0;
    /**
     * Create an empty @see Enumerator instance
     */
    var enumerator = Object.create(this);
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
    var assign = function (enumerator, value, index) {
        // increment enumeration count
        _currentIndex++;
        // Flatten value if object literal
        if (utils.isObjectLiteral(value)) {
            value = value["value"];
            index = value["index"];
        }
        /** Ensure value is of @see String type */
        value = utils.isString(value) ? value : "";
        // add entry
        return enumerator[enumerator[value] = ((utils.isNumber(index) && index >= _currentIndex) ? index : _currentIndex - 1)] = value;
    };
    // Iterate through values parameter
    var index = 0;
    var length = utils.isArray(values) ? values.length : 0;
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
Enumerator.isValidEnumType = function (value) {
    return (utils.isString(value) || utils.isNumber(value));
};
/**
 * Returns the string representation for this enumeration
 *
 * @param {Enumerator} enumeration
 * @param {Number} index
 */
Enumerator.toString = function (enumeration, index) {
    return Enumerator.isEnumerator(enumeration) ? (utils.isNumber(index) ? (enumeration[index] || "") : (enumeration[enumeration[index]]) || "") : "";
};
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
    validate: function (value) {
        return Enumerator.validate(this, value);
    },
    /**
     * Returns the string representation for this enumeration
     *
     * @param {Number} index
     */
    toString: function (index) {
        return Enumerator.toString(this, index);
    }
};
//===================== End Exports =====================//
