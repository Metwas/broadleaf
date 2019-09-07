"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validates a provided object to see if it is null or undefined
 *
 * @param {Object} obj
 * @returns {boolean}
 */
const isNullOrUndefined = function (obj) {
    return obj === null || typeof obj === "undefined";
};
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
 * @param {Array} array The array to be cloned
 * @returns {Array} The cloned array or an empty array if the clone procedure failed
 */
const array_clone = function (array) {
    if (Array.isArray(array)) {
        return array_slice(array, 0);
    }
    return [];
};
/**
 * Searches through an array matching with a desired value or property value on a complex type
 *
 * @param {Array} array An Array
 * @param {String} propertyKey The desired property to match a unique identifier on
 * @param {Object} propertyValue The property value which must be matched to
 * @returns {Boolean} Returns whether the element with that property exists in the array
 */
const array_contains = function (array, propertyKey, propertyValue) {
    if (Array.isArray(array)) {
        var _index = 0;
        var _length = array.length;
        for (; _index < _length; _index++) {
            var _element = array[_index];
            if (isNullOrUndefined(propertyValue) && typeof _element === "string" || typeof _element === "number") {
                if (_element === propertyKey) {
                    return true;
                }
            }
            var _propertyValue = _element[propertyKey];
            if (!isNullOrUndefined(_propertyValue) && _propertyValue === propertyValue) {
                return true;
            }
        }
    }
    // nothing matched if we got this far
    return false;
};
/**
 * filters out elements which match a predicate but retains reference to the existing array
 *
 * @param {Array} array The array to be cloned
 * @param {Function} callback The callback filter function
 * @returns {Array} The filtered referenced array
 */
const array_filter = function (array, callback) {
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
};
/**
 * Validates the object provided to see if it is null or undefined
 *
 * @param {Object} obj The object which contains a matching property
 * @param {Object} property The property which is defined in the provided object
 * @returns {Boolean} returns whether the property does exist and is owned by the provided object
 */
const hasOwnProperty = function (obj, property) {
    if (isNullOrUndefined(obj)) {
        return false;
    }
    return Object.prototype.hasOwnProperty.call(obj, property);
};
/**
 * Polyfill code for Object.assign invocation
 *
 * @param {Object} target obj
 * @param {Array} args arguments to be passed to the object assignment
 * @returns {Object} A new object which has the properties assigned to it
 * @remarks If not supported , it will create a poly fill code.
 * Some good documentation can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
const object_assign = Object.assign || function (target, args) {
    "use scrict;";
    if (isNullOrUndefined(target)) {
        throw new Error("Provided target cannot be null or undefined");
    }
    // convert provided argument 'target' to an object
    var _object = Object(target);
    // copy targeted properties to all provided arguments starting from index 1
    var _index = 0;
    var _length = arguments.length;
    for (; _index < _length; _index++) {
        // the next object within the arguments array
        var _nextObj = arguments[_index];
        if (!isNullOrUndefined(_nextObj)) {
            // iterate through the object to obtain each property
            for (var _key in _nextObj) {
                // ensure the object declares this property
                if (hasOwnProperty(_nextObj, _key)) {
                    _object[_key] = _nextObj[_key];
                }
            }
        }
    }
    return _object;
};
/**
 * Obtains the property keys within the provided object parameter
 *
 * @param {Object} obj The object from which to yield each property
 * @returns {Array} An array of property objects
 */
const object_keys = function (obj, callback) {
    if (isNullOrUndefined(obj)) {
        return [];
    }
    var _tempArray = [];
    for (var key in obj) {
        if (hasOwnProperty(obj, key)) {
            _tempArray.push(key);
        }
        callback(key);
    }
    return _tempArray;
};
/**
 * Loops through a provided array and performs a callback function on each element in the array
 *
 * @param {Array} enumerable An array
 * @param {Function} callback The callback function to be called on each element within the provided array
 */
const forEach = function (enumerable, callback) {
    if (typeof callback !== "function") {
        callback = function () { };
    }
    if (Array.isArray(enumerable)) {
        var _index = 0;
        var _length = enumerable.length;
        for (; _index < _length; _index++) {
            var _element = enumerable[_index];
            callback(_element);
        }
    }
};
exports.default = {
    isNullOrUndefined: isNullOrUndefined,
    has: hasOwnProperty,
    filter: array_filter,
    arrayClone: array_clone,
    contains: array_contains,
    assign: object_assign,
    keys: object_keys,
    forEach: forEach
};
