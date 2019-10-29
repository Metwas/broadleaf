import { IDisposable } from "../../core/IDisposable";
import { IListener } from "./IListener";
/**
 * Type safe event register and emitter
 */
export declare class EventEmitter<T> implements ITypedEventEmitter<T>, IDisposable {
    /**
     * Mapped array container for registered event listeners
     *
     * @private
     */
    private listeners;
    /**
     * Mapped array container for registered event listeners which will only be executed once
     *
     * @private
     */
    private listenersOnce;
    /**
     * Type safe event register and emitter
     */
    constructor();
    /**
     * Registers an event listener to a listener store
     *
     * @param {IListener} listener
     */
    on(event: string, listener: IListener<T>): void;
    /**
     * Registers a listener to the once store
     *
     * @param {IListener} listener
     */
    once(event: string, listener: IListener<T>): void;
    /**
     * Removes a specified listener from a listener store
     *
     * @param {IListener} listener
     */
    off(event: string): void;
    /**
     * Fires off the specified event to all attached listeners
     *
     * @param {String} event
     * @param {Array} args optional arguments
     * @returns {Boolean}
     */
    emit(event: string, ...args: Array<any>): boolean;
    /**
     * Pipes the current event emitter to another event emitter
     *
     * @param {String} event
     * @param {ITypedEventEmitter} emitter
     */
    pipe(event: string, emitter: ITypedEventEmitter<T>): void;
    /**
     * Safely clears any listeners stored
     */
    dispose(): void;
    /**
     * Overrides the default Object.toString to return a table of the registered events for this instance
     *
     * @returns {String}
     */
    toString(): string;
    /**
    * Helper function which attempts to retrieve an event entry by name in a provided store
    *
    * @param {String} event
    * @param {EventTable} listenerTable
    */
    private getEventEntry;
    /**
     * Adds an event to the persistent or non-persistent store listener stores
     *
     * @param {String} event
     * @param {IListener} listener
     * @param {Boolean} persistentTable
     */
    private add;
}
/**
 * Definition for a typed event emitter
 */
export interface ITypedEventEmitter<T> {
    /**
     * Registers an event listener to a listener store
     *
     * @param {String} event
     * @param {IListener} listener
     */
    on(event: string, listener: IListener<T>): void;
    /**
     * Registers a listener to the once store
     *
     * @param {String} event
     * @param {IListener} listener
     */
    once(event: string, listener: IListener<T>): void;
    /**
     * Removes a specified listener from a listener store
     *
     * @param {String} event
     * @param {IListener} listener
     */
    off(event: string): void;
    /**
     * Fires off the specified event to all attached listeners
     *
     * @param {String} event
     */
    emit(event: string, ...args: Array<any>): boolean;
    /**
     * Pipes the current event emitter to another event emitter
     *
     * @param {ITypedEventEmitter} emitter
     */
    pipe(event: string, emitter: ITypedEventEmitter<T>): void;
}
