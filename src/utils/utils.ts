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
 * Obtains the base type for the given object parameter
 * 
 * @param {Object} obj 
 * @returns {String} The type evaluated as a string
 */
const getType = function (obj: any): string {

     const type = typeof obj;
     if (type !== "object") {

          return type;

     }

     if (type === null) {

          return "null";

     }

     // obtain the constructor
     const ctr = obj.constructor;
     const name = typeof ctr === "function" && ctr.name;

     // ensure name is a valid string, else return an 'object'
     return typeof name === "string" && name.length > 0 ? name : "object";

};

/**
 * Obtains the default value for a given type
 * 
 * @param {String} type The type name as a string
 * @returns {any} Returns a default value obtained from the default table lookup
 */
const __default = function (type: string) {

     let stringType = "";
     if (type !== "string") {

          // attempt to obtain the type from a helper function
          stringType = getType(type);

     }

     return DEFAULT_TABLE[stringType];

};

/**
 * Validates a provided object to see if it is null or undefined
 * 
 * @param {Object} obj 
 * @returns {boolean}
 */
const isNullOrUndefined = function (obj: Object): Boolean {

     return obj === null || typeof obj === "undefined";

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

const array_slice = function_call(Array.prototype.slice);
const array_splice = function_call(Array.prototype.splice);

/**
 * Clones the provided array
 *
 * @param {Array} array The array to be cloned
 * @returns {Array} The cloned array or an empty array if the clone procedure failed
 */
const array_clone = function (array: Array<any>): Array<any> {

     if (Array.isArray(array)) {

          return array_slice(array, 0);

     }

     return [];

};

/**
 * Searches through an array matching with a desired value or property value on a complex type
 *
 * @param {Array | Object} arrayOrObject An Array or object to iterate through
 * @param {String} propertyKey The desired property to match a unique identifier on
 * @param {Object} propertyValue The property value which must be matched to
 * @returns {Boolean} Returns whether the element with that property exists in the array
 */
const array_contains = function (arrayOrObject: Array<any> | any, propertyKey: any, propertyValue: any): boolean {

     if (Array.isArray(arrayOrObject)) {

          var _index = 0;
          var _length = arrayOrObject.length;

          for (; _index < _length; _index++) {

               var _element = arrayOrObject[_index];

               if (isNullOrUndefined(propertyValue) && typeof _element === "string" || typeof _element === "number") {

                    if (_element === propertyKey) {

                         return true;

                    }

               }

          }

     } else {

          const keys: Array<any> = Object.keys(arrayOrObject);
          forEach(keys, (element: any) => {

               const propertyValue: any = arrayOrObject[element];

               if (!isNullOrUndefined(propertyValue) && propertyValue === propertyValue) {

                    return true;

               }

          });

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
const array_filter = function (array: Array<any>, callback: Function): Array<any> {

     if (typeof callback !== "function") {

          callback = function (element: any, index: number, array: Array<any>) { return true; };

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
 * Converts an object to an array
 *
 * @param {Object} obj 
 * @param {Boolean} parseKeys Option to parse each key within the object into an array
 * @throws {Error} Throws an error if the object parameter returned null
 * @returns {Array}
 */
const toArray = function (obj: Object, parseKeys?: boolean): Array<any> {

     if (isNullOrUndefined(obj)) {

          throw new Error("Provided object cannot be null or undefined");

     }

     const parseObjectKeys = function (): Array<any> {

          let keys: Array<any> = [];
          if (!!parseKeys) {

               const objKeys = Object.keys(obj);
               keys = array_filter(objKeys, (element: any, index: number, array: Array<any>) => { return hasOwnProperty(obj, element); });

          } else {

               keys = [obj];

          }

          return keys;

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
const hasOwnProperty = function (obj: Object, property: string): Boolean {

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
 * @throws {Error} Throws an error if the target parameter returned null
 * @returns {Object} A new object which has the properties assigned to it
 * @remarks If not supported , it will create a poly fill code.
 * Some good documentation can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
const object_assign = Object.assign || function (target: any, args: Array<any>): Object {

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
 * Obtains the property keys from a provided object parameter 
 *
 * @param {Object} obj
 * @param {Boolean} ownProperty The option to only retrieve declared properties by the provided object
 * @returns {Array}
 */
const object_values = function (obj: any, filterFn: (key: string, value: any, obj: any) => boolean, ownProperty?: boolean): Array<any> {

     if (isNullOrUndefined(obj)) {

          return [];

     }

     if (typeof filterFn !== "function") {

          filterFn = (key: string, value: any, obj: any) => { return true; };

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

                    if (hasOwnProperty(obj, key)) {

                         return value;

                    }

               } else {

                    return value;

               }

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
const object_value = function (obj: any, key: string, ownProperty?: boolean): any {

     const filterFn = function (key: string, value: any, obj: any): boolean {

          return key === key;

     };

     const values = object_values(obj, (objKey: string, value: any, obj: any) => { return objKey === key }, ownProperty);
     return Array.isArray(values) && values.length > 0 ? values[0] : null;

};

/**
 * Obtains the property keys within the provided object parameter
 *
 * @param {Object} obj The object from which to yield each property
 * @throws {Error} Throws an error if the object parameter returned null
 * @returns {Array} An array of property objects
 */
const object_keys = function (obj: Object, callback: (key: string) => void): Array<any> {

     if (isNullOrUndefined(obj)) {

          throw new Error("Object provided cannot be null");

     }

     var _tempArray = [];
     for (var key in obj) {

          if (hasOwnProperty(obj, key)) {

               _tempArray.push(key);
               callback(key);

          }

     }

     return _tempArray;

};

/**
 * Loops through a provided array and performs a callback function on each element in the array
 *
 * @param {Array | Object} enumerable An array
 * @param {Function} callback The callback function to be called on each element within the provided array
 */
const forEach = function (enumerable: Array<any> | Object, callback: Function): void {

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

               let element: any = enumerable[_index];
               callback(element);

          }

     } else {

          // obtain the object's keys
          const keys = Object.keys(enumerable);
          forEach(keys, callback);

     }

};

export default {

     isNullOrUndefined: isNullOrUndefined,
     has: hasOwnProperty,
     filter: array_filter,
     arrayClone: array_clone,
     contains: array_contains,
     assign: object_assign,
     keys: object_keys,
     forEach: forEach,
     getType: getType,
     __default: __default,
     toArray: toArray,
     values: object_values,
     value: object_value,

};
