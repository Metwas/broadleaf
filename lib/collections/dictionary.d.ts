/**
 * Represents typed dictionary interface
 */
interface IDictionary<T> {
    /**
     * Adds an entry to the underlying collection
     *
     * @param {String} name
     * @param {T} arg
     */
    add(name: string, arg: T): void;
    /**
     * Removes and returns the @see T element specified by name
     *
     * @param {String} name
     * @returns {T}
     */
    remove(name: string): T | null;
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
     */
    add<T>(name: string, arg: T): void;
    /**
     * Adds an array of @see IKeyValuePair entries to this @see Dictionary instance
     *
     * @public
     * @param {Array<IKeyValuePair<T>>}
     */
    addRange<T>(array: any): void;
    /**
     * Removes and returns the @see T element specified by name
     *
     * @public
     * @param {String} name
     * @returns {T | null}
     */
    remove(name: string): T | null;
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
