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

import * as utils from "./utils";

/**
 * Object.keys polyfill code
 * 
 * @returns {Function}
 */
export function keysPolyfill() {

     // create local reference hasOwnProperty
     const has = utils.has;

     /**
      * Iterates through the provided parameter object
      * 
      * @param {Any} obj
      * @returns {Array} Array of object defined keys
      */
     return function (obj: any): Array<any> {

          if (!utils.isFunction(obj) && (utils.isNullOrUndefined(obj) || !utils.isObject(obj))) {

               console.error("Attempted to get keys from a non-object parameter!");
               return [];

          }

          // Container to store object keys
          const results: Array<any> = [];
          // iterate through the object keys
          for (let key in obj) {
               // validate ownership of the key
               if (has(obj, key)) {

                    results.push(key);

               }

          }
          // return keys
          return results;

     }

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
export function assignPolyfill(target: any, ...args: Array<any>): Object {

     "use scrict;";
     if (utils.isNullOrUndefined(target)) {

          throw new Error("Provided target cannot be null or undefined");

     }

     // convert provided argument 'target' to an object
     var _object = Object(target);
     // copy targeted properties to all provided arguments starting from index 1
     var index = 1;
     var length = utils.isArrayLike(args) ? arguments.length : 0;

     for (; index < length; index++) {

          // the next object within the arguments array
          var obj = arguments[index];

          if (!utils.isNullOrUndefined(obj)) {

               // iterate through the object to obtain each property
               for (var _key in obj) {

                    // ensure the object declares this property
                    if (utils.has(obj, _key)) {

                         _object[_key] = obj[_key];

                    }

               }

          }
     }

     return _object;

};

/**
 * Proxy objects allow for custom routing of method invocations, useful for notifying when a value changes
 * 
 * @param {Object | Array} target
 * @param {Object} handler
 * @see https://github.com/GoogleChrome/proxy-polyfill/blob/master/src/proxy.js Original poly fill idea
 * @example 
 *      // create a proxy for an array
 *      var proxy = new Proxy([1,2,3], {
 *              // can specify a getter and setter
 *              get: function(target, propertyNameORIndex){ 
 *                      // custom logic here for a getter request
 *                      customFunction(); 
 *                      // return property value to caller
 *                      return target[propertyNameORIndex]
 *              },
 *              set: function(){}
 *       });
 */
export function ProxyJX(target: any, handler: any): any {

     /**
      * Ensure target is defined
      */
     if (utils.isNullOrUndefined(target)) {

          throw new TypeError("'Target' cannot be null");

     }

     /**
      * Ensure handler is an object literal
      */
     if (!utils.isObjectLiteral(handler)) {

          throw new TypeError("'Handler' must be of an object literal structure");

     }

     /**
      * Create an empty proxy object
      */
     const proxy: any = {};

     /**
      * Define a default getter handler if not specified in the handler argument
      */
     const getter = handler.get ? function (prop: string): void {

          // call the get handler
          handler.get(target, prop, proxy);

     } : function (prop: string): any {

          // simpy return the value for the given property
          return target[prop];

     };

     /**
      * Define a setter
      */
     const setter = handler.set ? function (prop: string, value: any): void {

          // call the set handler
          handler.set(target, prop, value, proxy);

     } : function (prop: string, value: any): any {

          // simply update the property value
          target[prop] = value;

     };

     // a table which is used to keep track of which properties are defined within the object itself or the prototype
     const ownPropertyTable: any = [];
     // Obtain each target declared property
     const propertyNames: Array<string> = Object.getOwnPropertyNames(target);
     const length: number = utils.isArray(propertyNames) ? propertyNames.length : 0;
     let index: number = 0;
     for (; index < length; index++) {

          const property: any = propertyNames[index];
          // skip property if already defined by proxy, such as inheritted properties like prototype
          if (!utils.has(proxy, property)) {

               // obtain property descriptor
               const propDescription: any = Object.getOwnPropertyDescriptor(target, property);
               // create a property descriptor, binding the getter and setter
               const description = {
                    get: getter.bind(target, property),
                    set: setter.bind(target, property),
                    enumerable: propDescription.enumerable
               };

               Object.defineProperty(proxy, property, description);
               // add property to table
               ownPropertyTable[property] = true;

          }

     }

     /**
      * Clone all keys from the prototype, only if a getter is defined within the handler object
      */
     if (utils.isFunction(handler.get)) {

          for (const key in target) {

               // skip if already defined in property table
               if (utils.isNullOrUndefined(ownPropertyTable[key]) && !utils.has(proxy, key)) {

                    // define property
                    Object.defineProperty(proxy, key, { get: getter.bind(target, key) });

               }

          }

     }

     // seal both target and proxy object to avoid future property additions/deletions
     Object.seal(target);
     Object.seal(proxy);
     // return proxy object
     return proxy;

};