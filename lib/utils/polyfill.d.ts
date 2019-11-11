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
