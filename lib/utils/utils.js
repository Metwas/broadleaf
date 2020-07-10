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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//===================== imports =====================//
var system = require("./system");
exports.system = system;
var polyfill = require("./polyfill");
exports.polyfill = polyfill;
var decorators_1 = require("./decorators");
//===================== End imports =====================//
/**
 * Lookup table for native JavaScript types and the associated default values
 *
 * @returns {Object}
 */
var DEFAULT_TABLE = (function () {
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
 *
 * @type {Function}
 */
function noop() { }
exports.noop = noop;
;
/**
 * Regular expression for parsing class data types
 *
 * @public
 * @type {RegExp}
 */
exports.CLASS_REG = /\[object (.*?)\]/i;
/**
 * Wraps a string conversion to allow for a object parameter to be expressed as a default string representation
 * e.g '[object String]'
 *
 * @param {Any} value
 * @param {Boolean} classTemplate optional, defaults to true
 * @returns {String}
 */
function toString(value, basic) {
    if (basic === void 0) { basic = false; }
    var type = Object.prototype.toString.call(value);
    /**
     * By default return a class template e.g [object {Type}] else simply return {type} if set to true
     */
    if (basic) {
        var groups = type.match(exports.CLASS_REG);
        // The first group will be the entire match, therefore check for a second argument being a string type
        if (groups && isString(groups[1])) {
            type = groups[1].trim().toLowerCase();
        }
    }
    return type;
}
exports.toString = toString;
;
/**
 * Evaluates the class type on the obj parameter provided
 *
 * @param {Object} obj
 * @param {String} className
 * @returns {Boolean}
 */
function isClassOf(obj, className) {
    return !isNullOrUndefined(obj) && toString(obj) === "[object " + className + "]";
}
exports.isClassOf = isClassOf;
;
/**
 * Validates the provided objects instance type against a defined type
 *
 * @param {Object} obj
 * @param {Any} type
 * @param {Boolean} inherit
 * @returns {Boolean}
 */
function isInstanceOf(obj, type, inherit) {
    if (inherit === void 0) { inherit = true; }
    //  False if incorrect arguments were provided
    if (isNullOrUndefined(type) || isNullOrUndefined(obj)) {
        return false;
    }
    // Check for primitive types
    if (isPrimitive(obj)) {
        return isClassOf(obj, type.name);
    }
    /**
     * Returns false if type is null or undefined
     *
     * v:1.20.2 - Inherit will match constructors equality
     */
    return (obj instanceof type) && (inherit === false ? (obj.__proto__.constructor === type.prototype.constructor) : true);
}
exports.isInstanceOf = isInstanceOf;
;
/**
 * Checks if the provided parameter is one of JavaScript's primitive types
 *
 * @param {Any} value
 * @returns {Boolean}
 */
function isPrimitive(value) {
    return (isNumber(value) || isString(value) || isBoolean(value) || isNullOrUndefined(value));
}
exports.isPrimitive = isPrimitive;
;
/**
 * Checks the value parameter is of type 'String'
 *
 * @param {String} value
 * @returns {Boolean}
 */
function isString(value) {
    return isClassOf(value, "String");
}
exports.isString = isString;
;
/**
 * Checks the string value if it is empty
 *
 * @param {String} value
 * @returns {Boolean}
 */
function isEmptyString(value) {
    return isString(value) && value.length === 0;
}
exports.isEmptyString = isEmptyString;
;
/**
 * Checks the value parameter is of type 'Number'
 *
 * @param {Any} value
 * @returns {Boolean}
 */
function isNumber(value) {
    return isClassOf(value, "Number");
}
exports.isNumber = isNumber;
;
/**
 * Checks the value parameter is of type Object literal
 *
 * @param {Any} value
 * @returns {Boolean}
 */
function isObjectLiteral(value) {
    // ensure value does not have the prototype chain
    return isClassOf(value, "Object") && isNullOrUndefined(value.prototype);
}
exports.isObjectLiteral = isObjectLiteral;
;
/**
 * Checks the value parameter is of type 'Object'
 *
 * @param {Any} value
 * @returns {Boolean}
 */
function isObject(value) {
    return isClassOf(value, "Object");
}
exports.isObject = isObject;
;
/**
 * Checks the value parameter is a valid function
 *
 * @param {Any} value
 * @returns {Boolean}
 */
function isFunction(value) {
    return typeof value === "function" || isClassOf(value, "Function");
}
exports.isFunction = isFunction;
;
/**
 * Checks the value parameter if it is null
 *
 * @param {Any} value
 * @returns {Boolean}
 */
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
;
/**
 * Checks the value parameter if it is undefined
 *
 * @param {Any} value
 * @returns {Boolean}
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
 * @param {Any} value
 * @returns {Boolean}
 */
function isBoolean(value) {
    return value === true || value === false || isClassOf(value, "Boolean");
}
exports.isBoolean = isBoolean;
;
/**
 * Checks the value parameter is of type 'Array'
 *
 * @param {Any} value
 * @returns {Boolean}
 */
function isArray(value) {
    return Array.isArray(value) || isClassOf(value, "Array");
}
exports.isArray = isArray;
;
/**
 * Validates the provided value if it contains similar properties to an array
 *
 * @param {Object} value
 * @returns {Boolean}
 */
function isArrayLike(value) {
    return !isNullOrUndefined(value.length) || Array.isArray(value);
}
exports.isArrayLike = isArrayLike;
;
/**
 * Checks the value parameter is a valid number and finite
 *
 * @param {Any} value
 * @returns {Boolean}
 */
function isFinite(value) {
    return !isNaN(value) && isFinite(value);
}
exports.isFinite = isFinite;
;
/**
 * Checks the value parameter is a valid regular expression
 *
 * @param {Any} value
 * @returns {Boolean}
 */
function isRegExp(value) {
    return isClassOf(value, "RegExp");
}
exports.isRegExp = isRegExp;
;
/**
 * Checks the provided parameter is an instance of type 'Error'
 *
 * @param {Any} value
 * @returns {Boolean}
 */
function isError(value) {
    return value instanceof Error && !isUndefined(value.message);
}
exports.isError = isError;
;
/**
 * Checks the provided parameter is an instance of type 'Date'
 *
 * @param {Any} value
 * @returns {Boolean}
 */
function isDate(value) {
    return isClassOf(value, "Date");
}
exports.isDate = isDate;
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
    var type = typeof obj;
    if (!isObject(obj)) {
        return type;
    }
    if (type === null) {
        return "null";
    }
    // obtain the constructor
    var ctr = obj.constructor;
    var name = isClassOf(ctr, "Function") && ctr.name;
    // ensure name is a valid string, else return an 'object'
    return typeof name === "string" && name.length > 0 ? name : "object";
}
exports.getType = getType;
;
/**
 * Performs a shallow copy on a provided object
 *
 * @param {Object} obj
 * @param {String|Number} property
 * @returns {Object}
 */
function shallowCopy(obj, property) {
    if (isNullOrUndefined(obj) || !(isString(property) || isNumber(property))) {
        return void 0;
    }
    return obj[property];
}
exports.shallowCopy = shallowCopy;
;
/**
 * Performs a deep copy on most native javascript types
 *
 * @param {Object} value
 * @returns {Object} clone object
 */
function deepCopy(value) {
    if (isNullOrUndefined(value)) {
        return void 0;
    }
    var result = void 0;
    // match primitive types
    var types = ["String", "Number", "Boolean"];
    types.forEach(function (type) {
        if (isClassOf(value, type)) {
            // simply set the value, as primitives are already cloned within the arguments
            result = value;
        }
    });
    if (isNullOrUndefined(result)) {
        // search for complex types
        if (isObjectLiteral(value)) {
            result = {};
            // assign each property
            for (var key in value) {
                // filter down each key
                result[key] = deepCopy(value[key]);
            }
        }
        else if (isArray(value)) {
            result = value.slice(0);
        }
        else if (isDate(value)) {
            // create new Date intance
            result = new Date(value);
        }
        else if (isRegExp(value)) {
            // create new regular expression instance
            result = new RegExp(value.source, value.flags);
        }
        else {
            // return reference
            result = value;
        }
    }
    return result;
}
exports.deepCopy = deepCopy;
;
/**
 * Obtains the default value for a given type
 *
 * @param {String} type The type name as a string
 * @returns {any} Returns a default value obtained from the default table lookup
 */
function getTypeDefaults(type) {
    var stringType = "";
    if (type !== "string") {
        // attempt to obtain the type from a helper function
        stringType = getType(type);
    }
    stringType = type.toLowerCase();
    return DEFAULT_TABLE[stringType];
}
exports.getTypeDefaults = getTypeDefaults;
;
/**
 * Have a look at q library https://github.com/kriskowal/q/blob/master/q.js on node npm packages where I got this idea from
 */
var _caller = Function.call;
var function_call = function (fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function () {
        return _caller.apply(fn, args);
    };
};
/**
 * Evaluates javascript code in a defined context
 *
 * @note
 * This approach is preferred over the "evil eval"
 * as code can now be executed within a defined context
 * which is controlled by the developer
 *
 * @example
 *      var test = evaluateFn({ name: "test" });
 *      // the "this" keyword will only reference the context object defined above
 *      test("console.log(this)");
 *      // you can access properties like this:
 *      test("console.log(this.name)");
 * @param {Object} context
 */
var evaluateFn = function (context) {
    var ctx = isObjectLiteral(context) ? context : {};
    // return a function which invokes javascript code in context
    return function (code) {
        // construct arguments
        var args = [];
        var length = isArray(arguments) ? (arguments.length - 1) : 1;
        var index = 1;
        for (; index < length; index++) {
            args.push(arguments[index]);
        }
        // invoke the javascript code with the function wrapper
        return (new Function(code)).apply(ctx, args);
    };
};
var array_slice = function_call(Array.prototype.slice);
var array_splice = function_call(Array.prototype.splice);
/**
 * Clones the provided array
 *
 * @param {Array|any} array The array or object to be cloned
 * @returns {Array} The cloned array or an empty array if the clone procedure failed
 */
function clone(arrayOrObject) {
    if (isArray(arrayOrObject)) {
        return array_slice(arrayOrObject, 0);
    }
    else {
        // default to deep cloning an object
        if (isJSONSupported() && !isNullOrUndefined(arrayOrObject) && !isFunction(arrayOrObject)) {
            return JSON.parse(JSON.stringify(arrayOrObject));
        }
        return deepCopy(arrayOrObject);
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
 * @param {Function} callback
 * @returns {Boolean} Returns whether the element with that property exists in the array
 */
function contains(arrayOrObject, propertyKey, propertyValue, callback) {
    if (callback === void 0) { callback = noop; }
    /**
     * Validate callback argument
     */
    if (!isFunction(callback)) {
        callback = isFunction(propertyValue) ? propertyValue : noop;
    }
    /**
     * Handle Array bound argument
     */
    if (isArray(arrayOrObject)) {
        var index = 0;
        var length_1 = arrayOrObject.length;
        for (; index < length_1; index++) {
            var element = arrayOrObject[index];
            if ((isNullOrUndefined(propertyValue) && !isFunction(propertyValue)) && isString(element) || isNumber(element)) {
                if (element === propertyKey) {
                    callback(element);
                    return true;
                }
            }
            else {
                // Array element must of object type therefore recursively check if the any one of the objects contains the specified property
                if (contains(arrayOrObject[index], propertyKey, propertyValue) === true) {
                    callback(arrayOrObject[index]);
                    return true;
                }
            }
        }
    }
    else {
        /**
         * Treat others as objects
         */
        if (isObject(arrayOrObject)) {
            // attempt to retrieve the specified key
            var value_1 = arrayOrObject[propertyKey];
            if ((isNullOrUndefined(propertyValue) && !isFunction(propertyValue)) && !isNullOrUndefined(value_1)) {
                return true;
            }
            else if (!((isNullOrUndefined(propertyValue) && !isFunction(propertyValue)) && isNullOrUndefined(propertyKey))) {
                // match both the key and the value
                return value_1 === propertyValue;
            }
            else {
                // loop through every key matching the specified property value
                var objKeys = keys(arrayOrObject);
                forEach(objKeys, function (element) {
                    var value = arrayOrObject[element];
                    if (!isNullOrUndefined(value) && propertyKey === value) {
                        callback(value);
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
 * Enumeration for ascending order
 *
 * @type {Number}
 */
exports.SORT_ASCENDING = 0;
/**
 * Enumeration for descending order
 *
 * @type {Number}
 */
exports.SORT_DESCENDING = 1;
/**
 * Sorts the array in a specified direction with the optional property to sort by
 *
 * @param {Array} array
 * @param {Number|String} direction Ascending or descending
 * @param {String} property
 * @returns {Array}
 */
function sort(array, direction, property) {
    if (direction === void 0) { direction = exports.SORT_ASCENDING; }
    if (property === void 0) { property = null; }
    /**
     * Sort algorithm for both number and string types
     *
     * @param {String | Number} a
     * @param {String | Number} b
     */
    var sum = function (a, b) {
        // define a default alogrithm for number types
        var numFn = function (a, b) {
            return a - b;
        };
        var strFn = function (a, b) {
            if (b > a) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            // default to equal
            return 0;
        };
        return (isNumber(a) && isNumber(b)) ? (direction === exports.SORT_ASCENDING ? numFn(a, b) : numFn(b, a)) : (direction === exports.SORT_ASCENDING ? strFn(a, b) : strFn(b, a));
    };
    return array.sort(function (a, b) {
        return (isString(property) && (isObject(a) && isObject(b))) ? (sum(a[property], b[property])) : sum(a, b);
    });
}
exports.sort = sort;
;
/**
 * Checks to see a given target has a reference to a defined type, returning the first result in the callback function
 *
 * @param {Object} arget
 * @param {Object} type
 * @param {Function} callback
 * @returns {Boolean}
 */
function containsType(target, type, callback) {
    // Validate callback
    if (!isFunction(callback)) {
        callback = noop;
    }
    // validate type arguments
    if (isNullOrUndefined(target) || isNullOrUndefined(type)) {
        return false;
    }
    /**
     * Iterate through each key defined by @see target
     */
    var targetKeys = keys(target);
    var length = targetKeys.length;
    var index = 0;
    for (; index < length; index++) {
        var key = targetKeys[index];
        if (isInstanceOf(target[key], type)) {
            callback(target[key]);
            return true;
        }
    }
    // false if we got this far
    return false;
}
exports.containsType = containsType;
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
    if (isArray(array)) {
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
    var parseObjectKeys = function () {
        var objKeys = [];
        if (parseKeys && parseKeys === true) {
            objKeys = keys(obj);
            objKeys = filter(objKeys, function (element, index, array) { return has(obj, element); });
        }
        else {
            objKeys = [obj];
        }
        return objKeys;
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
 * @throws {Error} Throws an error if the target parameter returned null
 * @returns {Object} A new object which has the properties assigned to it
 * @remarks If not supported , it will create a poly fill code.
 * Some good documentation can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // define a polyfill if @see Object.assign does not exist
    var _assign = function (target, source) {
        _assign = Object.assign || polyfill.assignPolyfill;
        // return the result
        return _assign(target, source);
    };
    // return assign to caller
    return _assign(target, args);
}
exports.assign = assign;
;
/**
 * Defines a default property validator
 *
 * @private
 * @param {} value
 * @param property
 * @param target
 */
var defaultPropertyValidator = function (value, property, target) {
    var result = {
        state: false,
        value: value
    };
    // Handle primitive types
    if (isPrimitive(value)) {
        result.state = (value === property);
        result.value = value;
    }
    // Handle array or object types
    if (isArray(value) || isObject(value)) {
        result.state = contains(value, property, null);
        result.value = value[property];
    }
    return result;
};
/**
 * Flattens the base target by filtering out a specified property or validator function
 *
 * @param {Array | Object} target
 * @param {String | Function} key
 * @param {Boolean} retAsKey - Option to return as an array of objects allocated with the @see key parameter
 */
function flatten(target, key, retAsKey) {
    if (retAsKey === void 0) { retAsKey = false; }
    /**
     * Validate target
     */
    if (isNullOrUndefined(target) || isPrimitive(target)) {
        throw new Error("Invalid target type provided");
    }
    var property = void 0;
    var temp = [];
    // filter function
    var validator;
    // Check if key is property and is defined with target value
    if (!isFunction(key)) {
        property = key;
        validator = defaultPropertyValidator;
    }
    else {
        validator = key;
    }
    /**
     * Iterate through the target recursively filtering out with the @see validator function
     */
    tree(target, function (node) {
        /**
         * Pass @see treeNode value to validator
         */
        var result = validator(node.value, property, target);
        if (result.state === true) {
            var value_2 = {};
            if (retAsKey === true) {
                value_2[key] = result.value;
            }
            else {
                value_2 = result.value;
            }
            temp.push(value_2);
        }
    });
    return temp;
}
exports.flatten = flatten;
;
/**
 * Defines a tree node model
 *
 * @private
 */
var treeNode = /** @class */ (function () {
    /**
     * Default constructor
     *
     * @param {Any} value
     * @param {Array<any>} children
     */
    function treeNode(value, children) {
        if (value === void 0) { value = {}; }
        if (children === void 0) { children = []; }
        this.value = value;
        this.children = children;
    }
    Object.defineProperty(treeNode.prototype, "type", {
        /**
         * Gets the base class type for the assigned @see value
         */
        get: function () {
            return toString(this.value, true);
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        decorators_1.enumerable(true)
    ], treeNode.prototype, "type", null);
    return treeNode;
}());
;
/**
 * Iterates over every self declared property within the target structure, recursively creating a branch like structure of information
 *
 * @param {Any} target
 * @param {Function} callback
 */
function tree(target, callback) {
    /**
     * Check if target is of node type, else create an empty tree node structure
     */
    var rootNode = isInstanceOf(target, treeNode) ? target : new treeNode(target);
    if (!isFunction(callback)) {
        callback = noop;
    }
    /**
      * Get all keys from target+
      */
    var targetKeys = keys(rootNode.value);
    var length = targetKeys.length;
    var index = 0;
    for (; index < length; index++) {
        var key = targetKeys[index];
        var value_3 = rootNode.value[key];
        /** create @see treeNode from the iterated result */
        var node = new treeNode(value_3);
        callback(node);
        // Recursively collect property information
        if (isObject(value_3) || isArray(value_3)) {
            node.children.push(tree(value_3, callback));
        }
        rootNode.children.push(node);
    }
    return rootNode;
}
exports.tree = tree;
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
        filterFn = function (key, value, obj) { return true; };
    }
    return keys(obj).map(function (key) {
        var value = obj[key];
        var filterResult = filterFn(key, value, obj);
        if (filterResult === true) {
            if (ownProperty === true) {
                if (has(obj, key)) {
                    return value;
                }
            }
            else {
                return value;
            }
        }
        else {
            // ignore the filter if the return type is not a boolean
            return value;
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
    var filterFn = function (key, value, obj) {
        return key === key;
    };
    var objValues = values(obj, function (objKey, value, obj) { return objKey === key; }, ownProperty);
    return isArray(objValues) && objValues.length > 0 ? objValues[0] : null;
}
exports.value = value;
;
/**
 * Obtains the property keys within the provided object parameter
 *
 * @param {Object} obj The object from which to yield each property
 * @param {Function} callback
 * @throws {Error} Throws an error if the object parameter returned null
 * @returns {Array} An array of property objects
 */
function keys(obj, callback) {
    if (callback === void 0) { callback = noop; }
    if (!(isNullOrUndefined(Object.keys) && isFunction(Object.keys))) {
        // invoke native Object.keys
        return Object.keys(obj);
    }
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
 * Obtains all property keys within the provided object parameter including inheritted keys
 *
 * @param {Object} obj The object from which to yield each property
 * @throws {Error} Throws an error if the object parameter returned null
 * @returns {Array} An array of property objects
 */
function allKeys(obj, callback) {
    if (callback === void 0) { callback = noop; }
    if (isNullOrUndefined(obj)) {
        throw new Error("Object provided cannot be null");
    }
    if (!isFunction(callback)) {
        callback = noop;
    }
    var _tempArray = [];
    for (var key in obj) {
        _tempArray.push(key);
        callback(key);
    }
    return _tempArray;
}
exports.allKeys = allKeys;
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
            var element = enumerable[_index];
            callback(element);
        }
    }
    else {
        // obtain the object's keys
        var objKeys = keys(enumerable);
        forEach(objKeys, callback);
    }
}
exports.forEach = forEach;
;
/**
 * Assigns default values to a given target
 *
 * @param {Object} target
 * @param {Array | Object} source
 */
function defaults(target) {
    var source = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
    }
    if (isNullOrUndefined(target) || isNullOrUndefined(source)) {
        return {};
    }
    var _temp = [];
    _temp.concat(source).forEach(function (obj) {
        var defKeys = keys(obj);
        var length = defKeys.length;
        var index = 0;
        for (; index < length; index++) {
            var key = defKeys[index];
            var value_4 = obj[key];
            var targetValue = target[key];
            if (!isNullOrUndefined(targetValue)) {
                // recursively obtain defaults if both source and target values are object literals
                if (isObjectLiteral(targetValue) && isObjectLiteral(value_4)) {
                    defaults(targetValue, value_4);
                }
            }
            else {
                if (!isNullOrUndefined(value_4)) {
                    // update target value
                    target[key] = value_4;
                }
            }
        }
    });
    return target;
}
exports.defaults = defaults;
;
/**
 * Merges source object with target on the matching keys
 *
 * @param {Object} target
 * @param {Object} source
 * @returns {Object}
 */
function merge(target, source, own) {
    if (own === void 0) { own = false; }
    if (isNullOrUndefined(target)) {
        return {};
    }
    // Iterate through source keys, merging with the target object if defined
    forEach(source, function (key) {
        if (own === true && !has(target, key)) {
            /** do nothing */
        }
        else {
            target[key] = deepCopy(source[key]);
        }
    });
    return target;
}
exports.merge = merge;
;
/**
 * Removes key if defined within the provided array or object parameter
 *
 * @param {Any} key
 * @param {Any} arrayOrObject
 */
function remove(key, arrayOrObject) {
    if (isArray(arrayOrObject)) {
        var index = arrayOrObject.indexOf(key);
        if (index > -1) {
            arrayOrObject.splice(index, 1);
        }
    }
    else {
        if (!isNullOrUndefined(arrayOrObject[key])) {
            delete arrayOrObject[key];
        }
    }
}
exports.remove = remove;
;
