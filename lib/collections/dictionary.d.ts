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
 * Defines an object which can be iterated over
 */
export interface IKeyValuePair<T> {
    key: string;
    value: T;
}
/**
 * Defines a single iterated @see IIteratable result
 */
interface IIteratorResult<T> {
    value: T;
    done: boolean;
}
/**
 * Predicate filter fuction type
 *
 * @private
 * @type {Function}
 */
declare type predicate = (arg: any) => boolean;
/**
 * Defines a @see Symbol.iterator model
 */
export interface IIteratable<T> {
    next(): IIteratorResult<T>;
    [Symbol.iterator](): Iterable<T>;
}
/**
 * Base Dictionary implementation which is strongly typed
 */
export declare class Dictionary<T> implements IDictionary<T> {
    /**
     * Underlying container for the dictionary elements
     *
     * @type {Object}
     */
    private _source;
    /**
     * Default constructor which creates an empty @see Dictionary instance
     */
    constructor();
    /**
     * Adds an entry to the underlying collection
     *
     * @public
     * @param {String} name
     * @param {T} arg
     * @param {Function} predicate
     */
    add<T>(name: string, arg: T, predicate?: predicate): void;
    /**
     * Adds an array of @see IKeyValuePair entries to this @see Dictionary instance
     *
     * @public
     * @param {Array<IKeyValuePair<T>>}
     * @param {Function} predicate
     */
    addRange<T>(array: any, predicate?: predicate): void;
    /**
     * Removes and returns the @see T element specified by name
     *
     * @public
     * @param {String | predicate} nameOrPredicate
     * @returns {T | Array<T> | null}
     */
    remove(nameOrPredicate: any): T | Array<T> | null;
    /**
     * Gets a specified element by name
     *
     * @param {String} name
     */
    get(name: string): T | null;
    /**
     * Checks if a specific @see T element exists within the dictionary
     *
     * @public
     * @param {String} name
     * @returns {Boolean}
     */
    contains(name: string): boolean;
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
    list(sort?: ((a: any, b: any) => number) | null): Array<IKeyValuePair<T>>;
}
export {};
