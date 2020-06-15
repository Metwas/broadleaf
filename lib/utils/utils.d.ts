import * as system from "./system";
import * as polyfill from "./polyfill";
/**
 * No operation function
 *
 * @type {Function}
 */
export declare function noop(): void;
/**
 * Regular expression for parsing class data types
 *
 * @public
 * @type {RegExp}
 */
export declare const CLASS_REG: RegExp;
/**
 * Wraps a string conversion to allow for a object parameter to be expressed as a default string representation
 * e.g '[object String]'
 *
 * @param {Any} value
 * @param {Boolean} classTemplate optional, defaults to true
 * @returns {String}
 */
export declare function toString(value: any, basic?: boolean): string;
/**
 * Evaluates the class type on the obj parameter provided
 *
 * @param {Object} obj
 * @param {String} className
 * @returns {Boolean}
 */
export declare function isClassOf(obj: object, className: string): boolean;
/**
 * Validates the provided objects instance type against a defined type
 *
 * @param {Object} obj
 * @param {Any} type
 * @param {Boolean} inherit
 * @returns {Boolean}
 */
export declare function isInstanceOf(obj: any, type: any, inherit?: boolean): boolean;
/**
 * Checks if the provided parameter is one of JavaScript's primitive types
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export declare function isPrimitive(value: any): boolean;
/**
 * Checks the value parameter is of type 'String'
 *
 * @param {String} value
 * @returns {Boolean}
 */
export declare function isString(value: any): boolean;
/**
 * Checks the string value if it is empty
 *
 * @param {String} value
 * @returns {Boolean}
 */
export declare function isEmptyString(value: any): boolean;
/**
 * Checks the value parameter is of type 'Number'
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export declare function isNumber(value: any): boolean;
/**
 * Checks the value parameter is of type Object literal
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export declare function isObjectLiteral(value: any): boolean;
/**
 * Checks the value parameter is of type 'Object'
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export declare function isObject(value: any): boolean;
/**
 * Checks the value parameter is a valid function
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export declare function isFunction(value: any): boolean;
/**
 * Checks the value parameter if it is null
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export declare function isNull(value: any): boolean;
/**
 * Checks the value parameter if it is undefined
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export declare function isUndefined(value: any): boolean;
/**
 * Validates a provided object to see if it is null or undefined
 *
 * @param {Object} value
 * @returns {boolean}
 */
export declare function isNullOrUndefined(value: any): boolean;
/**
 * Checks the value parameter is of type 'Boolean'
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export declare function isBoolean(value: any): boolean;
/**
 * Checks the value parameter is of type 'Array'
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export declare function isArray(value: any): boolean;
/**
 * Validates the provided value if it contains similar properties to an array
 *
 * @param {Object} value
 * @returns {Boolean}
 */
export declare function isArrayLike(value: any): boolean;
/**
 * Checks the value parameter is a valid number and finite
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export declare function isFinite(value: any): boolean;
/**
 * Checks the value parameter is a valid regular expression
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export declare function isRegExp(value: any): boolean;
/**
 * Checks the provided parameter is an instance of type 'Error'
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export declare function isError(value: any): boolean;
/**
 * Checks the provided parameter is an instance of type 'Date'
 *
 * @param {Any} value
 * @returns {Boolean}
 */
export declare function isDate(value: any): boolean;
/**
 * Checks for native JSON support
 *
 * @returns {Boolean}
 */
export declare function isJSONSupported(): boolean;
/**
 * Obtains the base type for the given object parameter
 *
 * @param {Object} obj
 * @returns {String} The type evaluated as a string
 */
export declare function getType(obj: any): string;
/**
 * Performs a shallow copy on a provided object
 *
 * @param {Object} obj
 * @param {String|Number} property
 * @returns {Object}
 */
export declare function shallowCopy(obj: any, property: string): any;
/**
 * Performs a deep copy on most native javascript types
 *
 * @param {Object} value
 * @returns {Object} clone object
 */
export declare function deepCopy(value: any): any;
/**
 * Obtains the default value for a given type
 *
 * @param {String} type The type name as a string
 * @returns {any} Returns a default value obtained from the default table lookup
 */
export declare function getTypeDefaults(type: string): any;
/**
 * Clones the provided array
 *
 * @param {Array|any} array The array or object to be cloned
 * @returns {Array} The cloned array or an empty array if the clone procedure failed
 */
export declare function clone(arrayOrObject: Array<any> | any): Array<any> | any;
/**
 * Searches through an array matching with a desired value or property value on a complex type
 *
 * @param {Array | Object} arrayOrObject An Array or object to iterate through
 * @param {String} propertyKey The desired property to match a unique identifier on
 * @param {Object} propertyValue The property value which must be matched to
 * @param {Function} callback
 * @returns {Boolean} Returns whether the element with that property exists in the array
 */
export declare function contains(arrayOrObject: Array<any> | any, propertyKey: any, propertyValue: any, callback?: (ret: any) => void): boolean;
/**
 * Enumeration for ascending order
 *
 * @type {Number}
 */
export declare const SORT_ASCENDING: number;
/**
 * Enumeration for descending order
 *
 * @type {Number}
 */
export declare const SORT_DESCENDING: number;
/**
 * Sorts the array in a specified direction with the optional property to sort by
 *
 * @param {Array} array
 * @param {Number|String} direction Ascending or descending
 * @param {String} property
 * @returns {Array}
 */
export declare function sort(array: Array<any>, direction?: number | string, property?: any): Array<any>;
/**
 * Checks to see a given target has a reference to a defined type, returning the first result in the callback function
 *
 * @param {Object} arget
 * @param {Object} type
 * @param {Function} callback
 * @returns {Boolean}
 */
export declare function containsType(target: any, type: any, callback: (ref: any) => void): boolean;
/**
 * filters out elements which match a predicate but retains reference to the existing array
 *
 * @param {Array} array The array to be cloned
 * @param {Function} callback The callback filter function
 * @returns {Array} The filtered referenced array
 */
export declare function filter(array: Array<any>, callback: (element: any, index: number, array: Array<any>) => boolean): Array<any>;
/**
 * Converts an object to an array
 *
 * @param {Object} obj
 * @param {Boolean} parseKeys Option to parse each key within the object into an array
 * @throws {Error} Throws an error if the object parameter returned null
 * @returns {Array}
 */
export declare function toArray(obj: Object, parseKeys?: boolean): Array<any>;
/**
 * Validates the object provided to see if it is null or undefined
 *
 * @param {Object} obj The object which contains a matching property
 * @param {Object} property The property which is defined in the provided object
 * @returns {Boolean} returns whether the property does exist and is owned by the provided object
 */
export declare function has(obj: Object, property: string): boolean;
/**
 * Polyfill code for Object.assign invocation
 *
 * @param {Object} target obj
 * @throws {Error} Throws an error if the target parameter returned null
 * @returns {Object} A new object which has the properties assigned to it
 * @remarks If not supported , it will create a poly fill code.
 * Some good documentation can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
export declare function assign(target: any, ...args: Array<any>): any;
/**
 * Flattens the base target by filtering out a specified property or validator function
 *
 * @param {Array | Object} target
 * @param {String | Function} key
 * @param {Boolean} retAsKey - Option to return as an array of objects allocated with the @see key parameter
 */
export declare function flatten(target: any, key: any, retAsKey?: boolean): Array<any>;
/**
 * Defines a tree node model
 *
 * @private
 */
declare class treeNode {
    value: any;
    children: treeNode[];
    /**
     * Default constructor
     *
     * @param {Any} value
     * @param {Array<any>} children
     */
    constructor(value?: any, children?: treeNode[]);
    /**
     * Gets the base class type for the assigned @see value
     */
    readonly type: string;
}
/**
 * Iterates over every self declared property within the target structure, recursively creating a branch like structure of information
 *
 * @param {Any} target
 * @param {Function} callback
 */
export declare function tree(target: any, callback: (value: treeNode) => void): treeNode;
/**
 * Obtains the property keys from a provided object parameter
 *
 * @param {Object} obj
 * @param {Boolean} ownProperty The option to only retrieve declared properties by the provided object
 * @returns {Array}
 */
export declare function values(obj: any, filterFn: (key: string, value: any, obj: any) => boolean, ownProperty?: boolean): Array<any>;
/**
 * Obtains a property value on a given object
 *
 * @param {Object} obj
 * @param {String} key
 * @param {Boolean} ownProperty The option to only retrieve declared properties by the provided object
 * @returns {Array}
 */
export declare function value(obj: any, key: string, ownProperty?: boolean): any;
/**
 * Obtains the property keys within the provided object parameter
 *
 * @param {Object} obj The object from which to yield each property
 * @param {Function} callback
 * @throws {Error} Throws an error if the object parameter returned null
 * @returns {Array} An array of property objects
 */
export declare function keys(obj: Object, callback?: (key: string) => void): Array<any>;
/**
 * Obtains all property keys within the provided object parameter including inheritted keys
 *
 * @param {Object} obj The object from which to yield each property
 * @throws {Error} Throws an error if the object parameter returned null
 * @returns {Array} An array of property objects
 */
export declare function allKeys(obj: Object, callback?: (key: string) => void): Array<any>;
/**
 * Loops through a provided array and performs a callback function on each element in the array
 *
 * @param {Array | Object} enumerable An array
 * @param {Function} callback The callback function to be called on each element within the provided array
 */
export declare function forEach(enumerable: Array<any> | Object, callback: (element: any) => void): void;
/**
 * Assigns default values to a given target
 *
 * @param {Object} target
 * @param {Array | Object} source
 */
export declare function defaults(target: any, ...source: Array<any>): any;
/**
 * Merges source object with target on the matching keys
 *
 * @param {Object} target
 * @param {Object} source
 * @returns {Object}
 */
export declare function merge(target: any, source: any, own?: boolean): any;
/**
 * Removes key if defined within the provided array or object parameter
 *
 * @param {Any} key
 * @param {Any} arrayOrObject
 */
export declare function remove(key: any, arrayOrObject: any): void;
export { system };
export { polyfill };
