"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const polyfill = require("./polyfill");
exports.polyfill = polyfill;
const system = require("./system");
exports.system = system;
/**
 * Lookup table for native JavaScript types and the associated default values
 *
 * @returns {Object}
 */
const DEFAULT_TABLE = (function () {
    return {
        number: 0,
        string: "",
        object: {},
        symbol: Symbol(),
        undefined: void 0,
        function: function () { },
        boolean: false,
        null: null
    };
})();
/**
 * No operation function
 */
function noop() { }
exports.noop = noop;
;
/**
 * Wraps a string conversion to allow for a object parameter to be expressed as a default string representation
 * e.g '[object String]'
 *
 * @param value
 */
function toString(value) {
    return Object.prototype.toString.call(value);
}
exports.toString = toString;
;
/**
 * Evaluates the class type on the obj parameter provided
 *
 * @param {Object} obj
 * @param {String} className
 */
function isClassOf(obj, className) {
    return !isNullOrUndefined(obj) && toString(obj) === `[object ${className}]`;
}
exports.isClassOf = isClassOf;
/**
 * Checks the value parameter is of type 'String'
 *
 * @param value
 */
function isString(value) {
    return isClassOf(value, "String");
}
exports.isString = isString;
;
/**
 * Checks the value parameter is of type 'Number'
 *
 * @param value
 */
function isNumber(value) {
    return isClassOf(value, "Number");
}
exports.isNumber = isNumber;
;
/**
 * Checks the value parameter is of type 'Object'
 *
 * @param value
 */
function isObject(value) {
    return isClassOf(value, "Object");
}
exports.isObject = isObject;
;
/**
 * Checks the value parameter is a valid function
 *
 * @param value
 */
function isFunction(value) {
    return typeof value === "function" || isClassOf(value, "Function");
}
exports.isFunction = isFunction;
;
/**
 * Checks the value parameter if it is null
 *
 * @param value
 */
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
;
/**
 * Checks the value parameter if it is undefined
 *
 * @param value
 */
function isUndefined(value) {
    return value === void 0;
}
exports.isUndefined = isUndefined;
;
/**
 * Validates a provided object to see if it is null or undefined
 *
 * @param {Object} value
 * @returns {boolean}
 */
function isNullOrUndefined(value) {
    return isNull(value) || isUndefined(value);
}
exports.isNullOrUndefined = isNullOrUndefined;
;
/**
 * Checks the value parameter is of type 'Boolean'
 *
 * @param value
 */
function isBoolean(value) {
    return value === true || value === false || isClassOf(value, "Boolean");
}
exports.isBoolean = isBoolean;
;
/**
 * Checks the value parameter is of type 'Array'
 *
 * @param value
 */
function isArray(value) {
    return isClassOf(value, "Array");
}
exports.isArray = isArray;
;
/**
 * Checks the value parameter is a valid number and finite
 *
 * @param value
 */
function isFinite(value) {
    return !isNaN(value) && isFinite(value);
}
exports.isFinite = isFinite;
;
/**
 * Checks the value parameter is a valid regular expression
 *
 * @param value
 */
function isRegExp(value) {
    return isClassOf(value, "RegExp");
}
exports.isRegExp = isRegExp;
;
/**
 * Checks the provided parameter is an instance of type 'Error'
 *
 * @param value
 */
function isError(value) {
    return value instanceof Error && !isUndefined(value.message);
}
exports.isError = isError;
;
/**
 * Checks for native JSON support
 *
 * @returns {Boolean}
 */
function isJSONSupported() {
    return (JSON && isFunction(JSON.parse) && isFunction(JSON.stringify));
}
exports.isJSONSupported = isJSONSupported;
;
/**
 * Obtains the base type for the given object parameter
 *
 * @param {Object} obj
 * @returns {String} The type evaluated as a string
 */
function getType(obj) {
    const type = typeof obj;
    if (!isObject(obj)) {
        return type;
    }
    if (type === null) {
        return "null";
    }
    // obtain the constructor
    const ctr = obj.constructor;
    const name = isClassOf(ctr, "Function") && ctr.name;
    // ensure name is a valid string, else return an 'object'
    return typeof name === "string" && name.length > 0 ? name : "object";
}
exports.getType = getType;
;
/**
 * Obtains the default value for a given type
 *
 * @param {String} type The type name as a string
 * @returns {any} Returns a default value obtained from the default table lookup
 */
function __default(type) {
    let stringType = "";
    if (type !== "string") {
        // attempt to obtain the type from a helper function
        stringType = getType(type);
    }
    stringType = type.toLowerCase();
    return DEFAULT_TABLE[stringType];
}
exports.__default = __default;
;
/**
 * Have a look at q library https://github.com/kriskowal/q/blob/master/q.js on node npm packages where I got this idea from
 */
const _caller = Function.call;
const function_call = function (fn, ...args) {
    return function () {
        return _caller.apply(fn, args);
    };
};
const array_slice = function_call(Array.prototype.slice);
const array_splice = function_call(Array.prototype.splice);
/**
 * Clones the provided array
 *
 * @param {Array|any} array The array or object to be cloned
 * @returns {Array} The cloned array or an empty array if the clone procedure failed
 */
function clone(arrayOrObject) {
    if (Array.isArray(arrayOrObject)) {
        return array_slice(arrayOrObject, 0);
    }
    else {
        // default to deep cloning an object
        if (isJSONSupported()) {
            return JSON.parse(JSON.stringify(arrayOrObject));
        }
    }
    return null;
}
exports.clone = clone;
;
/**
 * Searches through an array matching with a desired value or property value on a complex type
 *
 * @param {Array | Object} arrayOrObject An Array or object to iterate through
 * @param {String} propertyKey The desired property to match a unique identifier on
 * @param {Object} propertyValue The property value which must be matched to
 * @returns {Boolean} Returns whether the element with that property exists in the array
 */
function contains(arrayOrObject, propertyKey, propertyValue) {
    if (isArray(arrayOrObject)) {
        var _index = 0;
        var _length = arrayOrObject.length;
        for (; _index < _length; _index++) {
            var _element = arrayOrObject[_index];
            if (isNullOrUndefined(propertyValue) && isString(_element) || isNumber(_element)) {
                if (_element === propertyKey) {
                    return true;
                }
            }
        }
    }
    else {
        if (isObject(arrayOrObject)) {
            // attempt to retrieve the specified key
            const value = arrayOrObject[propertyKey];
            if (isNullOrUndefined(propertyValue) && !isNullOrUndefined(value)) {
                return true;
            }
            else if (!(isNullOrUndefined(propertyValue) && isNullOrUndefined(propertyKey))) {
                // match both the key and the value
                return value === propertyValue;
            }
            else {
                // loop through every key matching the specified property value
                const keys = Object.keys(arrayOrObject);
                forEach(keys, (element) => {
                    const value = arrayOrObject[element];
                    if (!isNullOrUndefined(value) && propertyKey === value) {
                        return true;
                    }
                });
            }
        }
    }
    // nothing matched if we got this far
    return false;
}
exports.contains = contains;
;
/**
 * filters out elements which match a predicate but retains reference to the existing array
 *
 * @param {Array} array The array to be cloned
 * @param {Function} callback The callback filter function
 * @returns {Array} The filtered referenced array
 */
function filter(array, callback) {
    if (typeof callback !== "function") {
        callback = function (element, index, array) { return true; };
    }
    if (Array.isArray(array)) {
        var _length = array.length;
        var _index = 0;
        for (; _index < _length; _index++) {
            var _element = array[_index];
            var _result = callback(_element, _index, array);
            if (!_result) {
                array_splice(_index, 1);
            }
        }
    }
    return array;
}
exports.filter = filter;
;
/**
 * Converts an object to an array
 *
 * @param {Object} obj
 * @param {Boolean} parseKeys Option to parse each key within the object into an array
 * @throws {Error} Throws an error if the object parameter returned null
 * @returns {Array}
 */
function toArray(obj, parseKeys) {
    if (isNullOrUndefined(obj)) {
        throw new Error("Provided object cannot be null or undefined");
    }
    const parseObjectKeys = function () {
        let keys = [];
        if (parseKeys && parseKeys === true) {
            const objKeys = Object.keys(obj);
            keys = filter(objKeys, (element, index, array) => { return has(obj, element); });
        }
        else {
            keys = [obj];
        }
        return keys;
    };
    return Array.isArray(obj) ? obj : parseObjectKeys();
}
exports.toArray = toArray;
;
/**
 * Validates the object provided to see if it is null or undefined
 *
 * @param {Object} obj The object which contains a matching property
 * @param {Object} property The property which is defined in the provided object
 * @returns {Boolean} returns whether the property does exist and is owned by the provided object
 */
function has(obj, property) {
    if (isNullOrUndefined(obj)) {
        return false;
    }
    return Object.prototype.hasOwnProperty.call(obj, property);
}
exports.has = has;
;
/**
 * Polyfill code for Object.assign invocation
 *
 * @param {Object} target obj
 * @param {Array} args arguments to be passed to the object assignment
 * @throws {Error} Throws an error if the target parameter returned null
 * @returns {Object} A new object which has the properties assigned to it
 * @remarks If not supported , it will create a poly fill code.
 * Some good documentation can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
function assign() {
    if (Object.assign && isFunction(Object.assign)) {
        return Object.assign;
    }
    else {
        return polyfill.assignPolyfill;
    }
}
exports.assign = assign;
;
/**
 * Obtains the property keys from a provided object parameter
 *
 * @param {Object} obj
 * @param {Boolean} ownProperty The option to only retrieve declared properties by the provided object
 * @returns {Array}
 */
function values(obj, filterFn, ownProperty) {
    if (isNullOrUndefined(obj)) {
        return [];
    }
    if (typeof filterFn !== "function") {
        filterFn = (key, value, obj) => { return true; };
    }
    return Object.keys(obj).map(function (key) {
        const value = obj[key];
        const filterResult = filterFn(key, value, obj);
        // ignore the filter if the return type is not a boolean
        if (typeof filterResult !== "boolean") {
            return value;
        }
        if (filterResult) {
            if (ownProperty === true) {
                if (has(obj, key)) {
                    return value;
                }
            }
            else {
                return value;
            }
        }
    });
}
exports.values = values;
;
/**
 * Obtains a property value on a given object
 *
 * @param {Object} obj
 * @param {String} key
 * @param {Boolean} ownProperty The option to only retrieve declared properties by the provided object
 * @returns {Array}
 */
function value(obj, key, ownProperty) {
    const filterFn = function (key, value, obj) {
        return key === key;
    };
    const objValues = values(obj, (objKey, value, obj) => { return objKey === key; }, ownProperty);
    return Array.isArray(objValues) && objValues.length > 0 ? objValues[0] : null;
}
exports.value = value;
;
/**
 * Obtains the property keys within the provided object parameter
 *
 * @param {Object} obj The object from which to yield each property
 * @throws {Error} Throws an error if the object parameter returned null
 * @returns {Array} An array of property objects
 */
function keys(obj, callback = noop) {
    if (isNullOrUndefined(obj)) {
        throw new Error("Object provided cannot be null");
    }
    if (!isFunction(callback)) {
        callback = noop;
    }
    var _tempArray = [];
    for (var key in obj) {
        if (has(obj, key)) {
            _tempArray.push(key);
            callback(key);
        }
    }
    return _tempArray;
}
exports.keys = keys;
;
/**
 * Loops through a provided array and performs a callback function on each element in the array
 *
 * @param {Array | Object} enumerable An array
 * @param {Function} callback The callback function to be called on each element within the provided array
 */
function forEach(enumerable, callback) {
    if (isNullOrUndefined(enumerable)) {
        return;
    }
    if (typeof callback !== "function") {
        callback = function () { };
    }
    if (Array.isArray(enumerable)) {
        var _index = 0;
        var _length = enumerable.length;
        for (; _index < _length; _index++) {
            let element = enumerable[_index];
            callback(element);
        }
    }
    else {
        // obtain the object's keys
        const keys = Object.keys(enumerable);
        forEach(keys, callback);
    }
}
exports.forEach = forEach;
;
