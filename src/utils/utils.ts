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

import * as polyfill from "./polyfill";
import * as system from "./system";

/**
 * Lookup table for native JavaScript types and the associated default values
 * 
 * @returns {Object}
 */
const DEFAULT_TABLE = (function (): any {

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
export function noop(): void { };

/**
 * Wraps a string conversion to allow for a object parameter to be expressed as a default string representation
 * e.g '[object String]'
 * 
 * @param value 
 */
export function toString(value: any): string {

     return Object.prototype.toString.call(value);

};

/**
 * Evaluates the class type on the obj parameter provided
 * 
 * @param {Object} obj 
 * @param {String} className 
 */
export function isClassOf(obj: object, className: string): boolean {

     return !isNullOrUndefined(obj) && toString(obj) === `[object ${className}]`;

}

/**
 * Checks the value parameter is of type 'String'
 * 
 * @param value 
 */
export function isString(value: any): boolean {

     return isClassOf(value, "String");

};

/**
 * Checks the value parameter is of type 'Number'
 * 
 * @param value 
 */
export function isNumber(value: any): boolean {

     return isClassOf(value, "Number");

};

/**
 * Checks the value parameter is of type Object literal
 * 
 * @param value 
 */
export function isObjectLiteral(value: any): boolean {

     // ensure value does not have the prototype chain
     return isClassOf(value, "Object") && isNullOrUndefined(value.prototype);

};

/**
 * Checks the value parameter is of type 'Object'
 * 
 * @param value 
 */
export function isObject(value: any): boolean {

     return isClassOf(value, "Object");

};

/**
 * Checks the value parameter is a valid function
 * 
 * @param value 
 */
export function isFunction(value: any): boolean {

     return typeof value === "function" || isClassOf(value, "Function");

};

/**
 * Checks the value parameter if it is null
 * 
 * @param value 
 */
export function isNull(value: any): boolean {

     return value === null;

};

/**
 * Checks the value parameter if it is undefined
 * 
 * @param value 
 */
export function isUndefined(value: any): boolean {

     return value === void 0;

};

/**
 * Validates a provided object to see if it is null or undefined
 * 
 * @param {Object} value 
 * @returns {boolean}
 */
export function isNullOrUndefined(value: any): boolean {

     return isNull(value) || isUndefined(value);

};

/**
 * Checks the value parameter is of type 'Boolean'
 * 
 * @param value 
 */
export function isBoolean(value: any): boolean {

     return value === true || value === false || isClassOf(value, "Boolean");

};

/**
 * Checks the value parameter is of type 'Array'
 * 
 * @param value 
 */
export function isArray(value: any): boolean {

     return Array.isArray(value) || isClassOf(value, "Array");

};

/**
 * Validates the provided value if it contains similar properties to an array
 * 
 * @param {Object} value
 * @returns {Boolean}
 */
export function isArrayLike(value: any): boolean {

     return !isNullOrUndefined(value.length) || Array.isArray(value);

};

/**
 * Checks the value parameter is a valid number and finite
 * 
 * @param value 
 */
export function isFinite(value: any): boolean {

     return !isNaN(value) && isFinite(value);

};

/**
 * Checks the value parameter is a valid regular expression
 * 
 * @param value 
 */
export function isRegExp(value: any): boolean {

     return isClassOf(value, "RegExp");

};

/**
 * Checks the provided parameter is an instance of type 'Error'
 * 
 * @param value 
 */
export function isError(value: any): boolean {

     return value instanceof Error && !isUndefined(value.message);

};

/**
 * Checks the provided parameter is an instance of type 'Date'
 * 
 * @param value 
 */
export function isDate(value: any): boolean {

     return isClassOf(value, "Date");

};

/**
 * Checks for native JSON support
 * 
 * @returns {Boolean}
 */
export function isJSONSupported(): boolean {

     return (JSON && isFunction(JSON.parse) && isFunction(JSON.stringify));

};

/**
 * Obtains the base type for the given object parameter
 * 
 * @param {Object} obj 
 * @returns {String} The type evaluated as a string
 */
export function getType(obj: any): string {

     const type: any = typeof obj;
     if (!isObject(obj)) {

          return type;

     }

     if (type === null) {

          return "null";

     }

     // obtain the constructor
     const ctr: any = obj.constructor;
     const name: string = isClassOf(ctr, "Function") && ctr.name;
     // ensure name is a valid string, else return an 'object'
     return typeof name === "string" && name.length > 0 ? name : "object";

};

/**
 * Performs a shallow copy on a provided object
 * 
 * @param {Object} obj 
 * @param {String|Number} property 
 * @returns {Object}
 */
export function shallowCopy(obj: any, property: string): any {

     if (isNullOrUndefined(obj) || !(isString(property) || isNumber(property))) {

          return void 0;

     }

     return obj[property];

};

/**
 * Performs a deep copy on most native javascript types
 * 
 * @param {Object} value
 * @returns {Object} clone object
 */
export function deepCopy(value: any): any {

     if (isNullOrUndefined(value)) {

          return void 0;

     }

     let result: any = void 0;
     // match primitive types
     const types: Array<string> = ["String", "Number", "Boolean"];
     types.forEach(type => {

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
               for (let key in value) {

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

};

/**
 * Obtains the default value for a given type
 * 
 * @param {String} type The type name as a string
 * @returns {any} Returns a default value obtained from the default table lookup
 */
export function reflectType(type: string) {

     let stringType: string = "";
     if (type !== "string") {

          // attempt to obtain the type from a helper function
          stringType = getType(type);

     }
     stringType = type.toLowerCase();
     return DEFAULT_TABLE[stringType];

};

/**
 * Have a look at q library https://github.com/kriskowal/q/blob/master/q.js on node npm packages where I got this idea from
 */
const _caller = Function.call;
const function_call = function (fn: any, ...args: any): Function {

     return function (): any {

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
const evaluateFn = function (context: any): (code: string) => void {

     var ctx = isObjectLiteral(context) ? context : {};
     // return a function which invokes javascript code in context
     return function (code) {

          // construct arguments
          const args: Array<any> = [];
          const length: number = isArray(arguments) ? (arguments.length - 1) : 1;
          let index: number = 1;
          for (; index < length; index++) {

               args.push(arguments[index]);

          }

          // invoke the javascript code with the function wrapper
          return (new Function(code)).apply(ctx, args);

     };

};

const array_slice: Function = function_call(Array.prototype.slice);
const array_splice: Function = function_call(Array.prototype.splice);

/**
 * Clones the provided array
 *
 * @param {Array|any} array The array or object to be cloned
 * @returns {Array} The cloned array or an empty array if the clone procedure failed
 */
export function clone(arrayOrObject: Array<any> | any): Array<any> | any {

     if (isArray(arrayOrObject)) {

          return array_slice(arrayOrObject, 0);

     } else {

          // default to deep cloning an object
          if (isJSONSupported() && !isNullOrUndefined(arrayOrObject) && !isFunction(arrayOrObject)) {

               return JSON.parse(JSON.stringify(arrayOrObject));

          }

          return deepCopy(arrayOrObject);

     }

     return null;

};

/**
 * Searches through an array matching with a desired value or property value on a complex type
 *
 * @param {Array | Object} arrayOrObject An Array or object to iterate through
 * @param {String} propertyKey The desired property to match a unique identifier on
 * @param {Object} propertyValue The property value which must be matched to
 * @returns {Boolean} Returns whether the element with that property exists in the array
 */
export function contains(arrayOrObject: Array<any> | any, propertyKey: any, propertyValue: any): boolean {

     if (isArray(arrayOrObject)) {

          var _index: number = 0;
          var _length: number = arrayOrObject.length;

          for (; _index < _length; _index++) {

               var _element = arrayOrObject[_index];

               if (isNullOrUndefined(propertyValue) && isString(_element) || isNumber(_element)) {

                    if (_element === propertyKey) {

                         return true;

                    }

               }

          }

     } else {

          if (isObject(arrayOrObject)) {

               // attempt to retrieve the specified key
               const value: any = arrayOrObject[propertyKey];

               if (isNullOrUndefined(propertyValue) && !isNullOrUndefined(value)) {

                    return true;

               } else if (!(isNullOrUndefined(propertyValue) && isNullOrUndefined(propertyKey))) {

                    // match both the key and the value
                    return value === propertyValue;

               }
               else {

                    // loop through every key matching the specified property value
                    const objKeys: Array<any> = keys(arrayOrObject);
                    forEach(objKeys, (element: any) => {

                         const value: any = arrayOrObject[element];

                         if (!isNullOrUndefined(value) && propertyKey === value) {

                              return true;

                         }

                    });

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
export function filter(array: Array<any>, callback: (element: any, index: number, array: Array<any>) => boolean): Array<any> {

     if (typeof callback !== "function") {

          callback = function (element: any, index: number, array: Array<any>) { return true; };

     }

     if (isArray(array)) {

          var _length: number = array.length;
          var _index: number = 0;

          for (; _index < _length; _index++) {

               var _element: any = array[_index];
               var _result: boolean = callback(_element, _index, array);

               if (!_result) {

                    array_splice(_index, 1);

               }

          }

     }

     return array;

};

/**
 * Converts an object to an array
 *
 * @param {Object} obj 
 * @param {Boolean} parseKeys Option to parse each key within the object into an array
 * @throws {Error} Throws an error if the object parameter returned null
 * @returns {Array}
 */
export function toArray(obj: Object, parseKeys?: boolean): Array<any> {

     if (isNullOrUndefined(obj)) {

          throw new Error("Provided object cannot be null or undefined");

     }

     const parseObjectKeys = function (): Array<any> {

          let objKeys: Array<any> = [];
          if (parseKeys && parseKeys === true) {

               objKeys = keys(obj);
               objKeys = filter(objKeys, (element: any, index: number, array: Array<any>) => { return has(obj, element); });

          } else {

               objKeys = [obj];

          }

          return objKeys;

     };

     return Array.isArray(obj) ? obj : parseObjectKeys();

};

/**
 * Validates the object provided to see if it is null or undefined
 *
 * @param {Object} obj The object which contains a matching property
 * @param {Object} property The property which is defined in the provided object
 * @returns {Boolean} returns whether the property does exist and is owned by the provided object
 */
export function has(obj: Object, property: string): boolean {

     if (isNullOrUndefined(obj)) {

          return false;

     }

     return Object.prototype.hasOwnProperty.call(obj, property);

};

/**
 * Polyfill code for Object.assign invocation
 *
 * @param {Object} target obj
 * @throws {Error} Throws an error if the target parameter returned null
 * @returns {Object} A new object which has the properties assigned to it
 * @remarks If not supported , it will create a poly fill code.
 * Some good documentation can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
export function assign(target: any, ...args: Array<any>): Object {

     if (Object.assign || isFunction(Object.assign)) {

          return Object.assign(target, args);

     } else {


          return polyfill.assignPolyfill(target);

     }

};

/**
 * Obtains the property keys from a provided object parameter 
 *
 * @param {Object} obj
 * @param {Boolean} ownProperty The option to only retrieve declared properties by the provided object
 * @returns {Array}
 */
export function values(obj: any, filterFn: (key: string, value: any, obj: any) => boolean, ownProperty?: boolean): Array<any> {

     if (isNullOrUndefined(obj)) {

          return [];

     }

     if (typeof filterFn !== "function") {

          filterFn = (key: string, value: any, obj: any) => { return true; };

     }

     return keys(obj).map(function (key) {

          const value: any = obj[key];
          const filterResult: boolean = filterFn(key, value, obj);
          if (filterResult === true) {

               if (ownProperty === true) {

                    if (has(obj, key)) {

                         return value;

                    }

               } else {

                    return value;

               }

          } else {

               // ignore the filter if the return type is not a boolean
               return value;

          }

     });

};

/**
 * Obtains a property value on a given object 
 *
 * @param {Object} obj
 * @param {String} key
 * @param {Boolean} ownProperty The option to only retrieve declared properties by the provided object
 * @returns {Array}
 */
export function value(obj: any, key: string, ownProperty?: boolean): any {

     const filterFn: Function = function (key: string, value: any, obj: any): boolean {

          return key === key;

     };

     const objValues = values(obj, (objKey: string, value: any, obj: any) => { return objKey === key }, ownProperty);
     return isArray(objValues) && objValues.length > 0 ? objValues[0] : null;

};

/**
 * Obtains the property keys within the provided object parameter
 *
 * @param {Object} obj The object from which to yield each property
 * @param {Function} callback
 * @throws {Error} Throws an error if the object parameter returned null
 * @returns {Array} An array of property objects
 */
export function keys(obj: Object, callback: (key: string) => void = noop): Array<any> {

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

     var _tempArray: Array<any> = [];
     for (var key in obj) {

          if (has(obj, key)) {

               _tempArray.push(key);
               callback(key);

          }

     }

     return _tempArray;

};

/**
 * Obtains all property keys within the provided object parameter including inheritted keys
 *
 * @param {Object} obj The object from which to yield each property
 * @throws {Error} Throws an error if the object parameter returned null
 * @returns {Array} An array of property objects
 */
export function allKeys(obj: Object, callback: (key: string) => void = noop): Array<any> {

     if (isNullOrUndefined(obj)) {

          throw new Error("Object provided cannot be null");

     }

     if (!isFunction(callback)) {

          callback = noop;

     }

     var _tempArray: Array<any> = [];
     for (var key in obj) {

          _tempArray.push(key);
          callback(key);

     }

     return _tempArray;

};

/**
 * Loops through a provided array and performs a callback function on each element in the array
 *
 * @param {Array | Object} enumerable An array
 * @param {Function} callback The callback function to be called on each element within the provided array
 */
export function forEach(enumerable: Array<any> | Object, callback: (element: any) => void): void {

     if (isNullOrUndefined(enumerable)) {

          return;

     }

     if (typeof callback !== "function") {

          callback = function () { };

     }

     if (Array.isArray(enumerable)) {

          var _index: number = 0;
          var _length: number = enumerable.length;

          for (; _index < _length; _index++) {

               let element: any = enumerable[_index];
               callback(element);

          }

     } else {

          // obtain the object's keys
          const objKeys: Array<any> = keys(enumerable);
          forEach(objKeys, callback);

     }

};

/**
 * Assigns default values to a given target
 * 
 * @param {Object} target 
 * @param {Array | Object} source 
 */
export function defaults(target: any, ...source: Array<any>): any {

     if (isNullOrUndefined(target) || isNullOrUndefined(source)) { return {}; }

     /**
      * Ensure source is an array
      */
     const _temp: Array<any> = [];
     _temp.concat(source).forEach(function (obj: any) {

          const defKeys: Array<number> = keys(obj);
          const length: number = defKeys.length;
          let index = 0;
          for (; index < length; index++) {

               const key: number = defKeys[index];
               const value: any = obj[key];
               const targetValue = target[key];

               if (!isNullOrUndefined(targetValue)) {

                    // recursively obtain defaults if both source and target values are object literals
                    if (isObjectLiteral(targetValue) && isObjectLiteral(value)) {

                         defaults(targetValue, value);

                    }

               } else {

                    if (!isNullOrUndefined(value)) {

                         // update target value
                         target[key] = value;

                    }

               }

          }

     });

     return target;

};

/**
 * Merges source object with target on the matching keys
 * 
 * @param {Object} target 
 * @param {Object} source 
 * @returns {Object}
 */
export function merge(target: any, source: any, own: boolean = false): any {

     /**
      * Validate target parameter
      */
     if (isNullOrUndefined(target)) { return {}; }

     /**
      * Iterate through source keys, merging with the target object if defined
      */
     forEach(source, function (key) {

          if (own === true && !has(target, key)) { /** do nothing */ }
          else{ target[key] = deepCopy(source[key]); } 

     });

     return target;

};

/**
 * Removes key if defined within the provided array or object parameter
 * 
 * @param {Any} key 
 * @param {Any} arrayOrObject 
 */
export function remove(key: any, arrayOrObject: any): void {

     /**
      * Handle array types
      */
     if (isArray(arrayOrObject)) {

          const index: number = arrayOrObject.indexOf(key);
          if (index > -1) {

               arrayOrObject.splice(index, 1);

          }

     } else {

          /**
           * Handle native objects
           */
          if (!isNullOrUndefined(arrayOrObject[key])) {

               delete arrayOrObject[key];

          }

     }

};

// export system and network utilities
export { system };
export { polyfill };


