/**
 * Object.keys polyfill code
 *
 * @returns {Function}
 */
export declare function keysPolyfill(): (obj: any) => any[];
/**
 * Polyfill code for Object.assign invocation
 *
 * @param {Object} target obj
 * @throws {Error} Throws an error if the target parameter returned null
 * @returns {Object} A new object which has the properties assigned to it
 * @remarks If not supported , it will create a poly fill code.
 * Some good documentation can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
export declare function assignPolyfill(target: any, ...args: Array<any>): Object;
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
export declare function ProxyJX(target: any, handler: any): any;
