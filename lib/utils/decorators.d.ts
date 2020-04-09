/**
 * This file contains basic utility like decorators
 *
 * This is an experimental feature for typescript, therefore it must be enabled
 * in the tsconfig file
 */
/**
 * Sets a given target property enumerable state
 *
 * @public
 * @param {Boolean} value
 * @return {Function}
 */
export declare function enumerable(value: boolean): (target: any, property: string, descriptor: PropertyDescriptor) => void;
