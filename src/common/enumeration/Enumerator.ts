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

//===================== imports =====================//

// import common utilities
import * as utils from "../../utils/utils";

//===================== End imports =====================//

/**
 * Represents a base enumeration definition
 */
function Enumerator() { };

/**
 * Provide a validation function on a enumerator
 * 
 * @public
 * @param {Number | String}
 * @returns {Boolean}
 */
Enumerator.validate = function (enumerator: any, value: any): boolean {

    /**
     * This will return false if the provided parameter is not a valid enumeration
     */
    return Enumerator.isValidEnumType(enumerator[value]);

};

/**
 * Validates the parameter to ensure it is a valid @see Enumerator object
 * 
 * @public
 * @param {Enumerator} enumerator
 * @returns {Boolean}
 */
Enumerator.isEnumerator = function (enumerator: any): boolean {

    if (utils.isNullOrUndefined(enumerator)) { return false; }

    let index: number = 0;
    const keys: Array<any> = Object.keys(enumerator);
    const length: number = keys.length;
    /**
     * Loop through each key within the provided enumerator parameter
     */
    for (; index < length; index++) {

        const key: any = keys[index];
        const property: any = enumerator[key];

        let value = String(enumerator[enumerator[property]]);
        /**
         * Loop property back to index value and ensure a match
         */
        if (String(enumerator[value]) !== key) { return false; }

    }

    /**
     * True if it passed all conditions
     */
    return true;

};

/**
 * Creates an enumeration model object
 * 
 * @param {Array} values
 * @param {Number} startIndex {Optional}
 * @returns {Enumerator}
 */
Enumerator.create = function (values: Array<any>, startIndex: number): Enumerator {

    /**
     * Current enum count
     */
    let _currentIndex: number = (utils.isNumber(startIndex) && startIndex > -1) ? startIndex : 0;

    /**
     * Create an empty @see Enumerator instance
     */
    const enumerator: Enumerator = Object.create(this);

    /**
     * Validate start position
     */
    if (!utils.isNumber(startIndex) || startIndex < 0) { startIndex = 0; }

    /**
     * Assigns the enumeration entry to a @see Enumerator instance
     *  
     * @param {Enumerator} enumerator
     * @param {String} value 
     * @param {Number} index
     * @returns {Enumerator}
     */
    const assign = function (enumerator: any, value: any, index: number): Enumerator {

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
    for (; index < length; index++) { assign(enumerator, values[index], 0); }

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
Enumerator.isValidEnumType = function (value: any) { return (utils.isString(value) || utils.isNumber(value)); };

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
    validate: function (value: any) { return Enumerator.validate(this, value); }

};

//===================== Exports =====================//

export { Enumerator }

//===================== End Exports =====================//
