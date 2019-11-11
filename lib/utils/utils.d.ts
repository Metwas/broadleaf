import * as polyfill from "./polyfill";
import * as system from "./system";
/**
 * No operation function
 */
export declare function noop(): void;
/**
 * Wraps a string conversion to allow for a object parameter to be expressed as a default string representation
 * e.g '[object String]'
 *
 * @param value
 */
export declare function toString(value: any): string;
/**
 * Evaluates the class type on the obj parameter provided
 *
 * @param {Object} obj
 * @param {String} className
 */
export declare function isClassOf(obj: object, className: string): boolean;
/**
 * Checks the value parameter is of type 'String'
 *
 * @param value
 */
export declare function isString(value: any): boolean;
/**
 * Checks the value parameter is of type 'Number'
 *
 * @param value
 */
export declare function isNumber(value: any): boolean;
/**
 * Checks the value parameter is of type 'Object'
 *
 * @param value
 */
export declare function isObject(value: any): boolean;
/**
 * Checks the value parameter is a valid function
 *
 * @param value
 */
export declare function isFunction(value: any): boolean;
/**
 * Checks the value parameter if it is null
 *
 * @param value
 */
export declare function isNull(value: any): boolean;
/**
 * Checks the value parameter if it is undefined
 *
 * @param value
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
 * @param value
 */
export declare function isBoolean(value: any): boolean;
/**
 * Checks the value parameter is of type 'Array'
 *
 * @param value
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
 * @param value
 */
export declare function isFinite(value: any): boolean;
/**
 * Checks the value parameter is a valid regular expression
 *
 * @param value
 */
export declare function isRegExp(value: any): boolean;
/**
 * Checks the provided parameter is an instance of type 'Error'
 *
 * @param value
 */
export declare function isError(value: any): boolean;
/**
 * Checks the provided parameter is an instance of type 'Date'
 *
 * @param value
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
export declare function __default(type: string): any;
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
 * @returns {Boolean} Returns whether the element with that property exists in the array
 */
export declare function contains(arrayOrObject: Array<any> | any, propertyKey: any, propertyValue: any): boolean;
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
export declare function assign(target: any, ...args: Array<any>): Object;
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
export { system };
export { polyfill };
