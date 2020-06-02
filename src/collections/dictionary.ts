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

//===================== imports =====================//

// import utilities
import * as utils from "../utils/utils";

//===================== End imports =====================//

/**
 * Represents typed dictionary interface
 */
interface IDictionary<T> {

    /**
     * Adds an entry to the underlying collection
     * 
     * @param {String} name 
     * @param {T} arg 
     * @param {Function} predicate
     */
    add(name: string, arg: T, predicate: (arg: T) => boolean): void;

    /**
     * Removes and returns the @see T element specified by name
     * 
     * @public
     * @param {String | predicate} nameOrPredicate 
     * @returns {T | Array<T> | null}
     */
    remove(nameOrPredicate: any): T | Array<T> | null;

    /**
     * Checks if a specific @see T element exists within the dictionary
     * 
     * @param {String} name
     * @returns {Boolean}
     */
    contains(name: string): boolean;

    /**
     * Gets a specified element by name
     * 
     * @param {String} name
     */
    get(name: string): T | null;

    /**
     * Gets the total count of entries within this @see IDictionary instance
     * 
     * @returns {Number}
     */
    count(): number;

    /**
     * Returns the dictionary elements as a @see Array
     * 
     * @param {Boolean | Function} sort An optional argument to use a default sort or custom compare function
     * @returns {Array<IKeyValuePair<T>>}
     */
    list(sort: ((a: any, b: any) => number) | null): Array<IKeyValuePair<T>>;

}

/**
 * Create a typescript TypeGuard based off a generic type
 */
type Constructor<T> = { new(args: any[]): T };
const typeGuard = function <T>(obj: any, constructor: Constructor<T>): boolean { return utils.isInstanceOf(obj, constructor); };

/**
 * Defines an object which can be iterated over
 */
export interface IKeyValuePair<T> { key: string; value: T; }

/**
 * Defines a single iterated @see IIteratable result
 */
interface IIteratorResult<T> { value: T; done: boolean; }

/**
 * Predicate filter fuction type
 * 
 * @private
 * @type {Function}
 */
type predicate = (arg: any) => boolean;

/**
 * Default truthy predicate
 * 
 * @private
 * @param {Any} arg 
 */
const defaultPredicate: (arg: any) => boolean = function (arg: any) { return true };

/**
 * Defines a @see Symbol.iterator model
 */
export interface IIteratable<T> { next(): IIteratorResult<T>;[Symbol.iterator](): Iterable<T>; }

/**
 * Base Dictionary implementation which is strongly typed
 */
export class Dictionary<T> implements IDictionary<T> {

    /**
     * Underlying container for the dictionary elements
     * 
     * @type {Object}
     */
    private _source: any = {};

    /**
     * Default constructor which creates an empty @see Dictionary instance
     */
    public constructor();

    /**
     * Constructs a @see Dictionary instance from an @see Array
     * 
     * @param {IKeyValuePair<T> | null} enumerable
     * @param {Function} predicate
     */
    public constructor(enumerable: any = null, predicate: (arg: T) => boolean = defaultPredicate) {

        if (enumerable !== null && enumerable !== void 0) {

            if (utils.isInstanceOf(enumerable, Dictionary)) {

                /** Get contents of the @see Dictionary as an @see Array */
                enumerable = enumerable.list();

            }

            if (utils.isArray(enumerable) || utils.isInstanceOf(enumerable, Dictionary)) { this.addRange(enumerable, predicate); }

        }

    }

    /**
     * Adds an entry to the underlying collection
     * 
     * @public
     * @param {String} name 
     * @param {T} arg 
     * @param {Function} predicate
     */
    public add<T>(name: string, arg: T, predicate: predicate = defaultPredicate): void {

        // validate type instance
        if (utils.isNullOrUndefined(arg)) { throw new Error("Invalid type requested to be added to this dictionary instance"); }
        // validate predicate condition
        if (predicate(arg) && !this.contains(name)) { this._source[name] = arg; }

    }

    /**
     * Adds an array of @see IKeyValuePair entries to this @see Dictionary instance
     * 
     * @public
     * @param {Array<IKeyValuePair<T>>}
     * @param {Function} predicate
     */
    public addRange<T>(array: any, predicate: predicate = defaultPredicate): void {

        // flatten array if dictionary type
        array = utils.isInstanceOf(array, Dictionary) ? array.list() : array;

        const length: number = utils.isArray(array) ? array.length : 0;
        let index: number = 0;
        for (; index < length; index++) {

            const element: IKeyValuePair<T> = array[index];
            const name: string = utils.isString(element.key) ? element.key : String(index);
            // add key pair element
            this.add(name, element.value, predicate);

        }

    }

    /**
     * Removes and returns the @see T element specified by name
     * 
     * @public
     * @param {String | predicate} nameOrPredicate 
     * @returns {T | Array<T> | null}
     */
    public remove(nameOrPredicate: any): T | Array<T> | null {

        const self: this = this;
        const r_elements: Array<any> = [];
        // validate predicate
        if (!utils.isFunction(nameOrPredicate)) {

            // make string name into predicate function
            if (utils.isString(nameOrPredicate)) { nameOrPredicate = function (value: any) { return self._source[value]; }.bind(this); }
            // else return null
            else { return null; }

        }

        const keys: Array<any> = Object.keys(self._source || {});
        const length: number = keys.length;
        let index: number = 0;
        // iterate through the source keys
        for (; index < length; index++) {

            const key: any = keys[index];
            const value: any = self._source[key];

            // evaluate predicate
            if (nameOrPredicate(value)) {

                // add to removed list
                r_elements.push(self._source[value]);
                // remove from dictionary
                delete self._source[value];

            }

        }

        return r_elements.length === 1 ? r_elements[0] : r_elements;

    }

    /**
     * Gets a specified element by name
     * 
     * @param {String} name
     */
    public get(name: string): T | null { return this.contains(name) === true ? this._source[name] : null; }

    /**
     * Checks if a specific @see T element exists within the dictionary
     * 
     * @public
     * @param {String} name
     * @returns {Boolean}
     */
    public contains(name: string): boolean { return (name in this._source); }

    /**
     * Gets the total count of entries within this @see IDictionary instance
     * 
     * @returns {Number}
     */
    public count(): number { return Object.keys(this._source).length || 0; }

    /**
     * Returns the dictionary elements as a @see Array
     * 
     * @param {Boolean | Function} sort An optional argument to use a default sort or custom compare function
     * @returns {Array<IKeyValuePair<T>>}
     */
    public list(sort: ((a: any, b: any) => number) | null = null): Array<IKeyValuePair<T>> {

        const arr: Array<IKeyValuePair<T>> = [];

        const keys: Array<any> = Object.keys(this._source);
        const length: number = keys.length;
        let index: number = 0;
        for (; index < length; index++) {

            /**
             * Map each dictionary element to a @see IKeyValuePair object
             */
            const key: any = keys[index];
            const value: any = this._source[key];

            arr.push({ key: key, value: value });

        }

        return typeof sort === "function" ? arr.sort(sort) : arr;

    }

}