import { IListener } from "./IListener";
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
