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