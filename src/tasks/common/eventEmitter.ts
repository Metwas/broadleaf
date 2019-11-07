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

import { IDisposable } from "../../common/IDisposable";
import { IListener } from "./IListener";
import { EventTable } from "./eventTable";
import * as utils from "../../utils/utils";

/**
 * Type safe event register and emitter
 */
export class EventEmitter<T> implements ITypedEventEmitter<T>, IDisposable {

     /**
      * Mapped array container for registered event listeners
      * 
      * @private
      */
     private listeners: EventTable<T>[];

     /**
      * Mapped array container for registered event listeners which will only be executed once
      * 
      * @private
      */
     private listenersOnce: EventTable<T>[];

     /**
      * Type safe event register and emitter
      */
     constructor() {

          this.listeners = [];
          this.listenersOnce = [];

     }

     /**
      * Registers an event listener to a listener store
      * 
      * @param {IListener} listener
      */
     public on(event: string, listener: IListener<T>): void {

          this.add(event, listener, true);

     }

     /**
      * Registers a listener to the once store
      * 
      * @param {IListener} listener
      */
     public once(event: string, listener: IListener<T>): void {

          this.add(event, listener, false);

     }

     /**
      * Removes a specified listener from a listener store
      * 
      * @param {IListener} listener
      */
     public off(event: string): void {

          const self = this;
          const getIndex = function (event: string, table: EventTable<T>[]) {

               const entry: EventTable<T> | null = self.getEventEntry(event, table);
               if (entry !== null) {

                    return table.indexOf(entry);

               }

               return -1;

          };

          // remove from both tables
          const indexOnce = getIndex(event, this.listenersOnce);
          const indexPersistent = getIndex(event, this.listeners);
          if (indexOnce > -1) {

               this.listenersOnce.splice(indexOnce, 1);

          }

          if (indexPersistent > -1) {

               this.listeners.splice(indexPersistent, 1);

          }

     }

     /**
      * Fires off the specified event to all attached listeners
      * 
      * @param {String} event
      * @param {Array} args optional arguments
      * @returns {Boolean}
      */
     public emit(event: string, ...args: Array<any>): boolean {

          const eventEntry: EventTable<T> | null = this.getEventEntry(event, this.listeners);
          const onceEntry: EventTable<T> | null = this.getEventEntry(event, this.listenersOnce);

          try {

               if (eventEntry !== null) {

                    utils.forEach(eventEntry.listeners, (element) => {

                         // invoke the listener
                         element(args);

                    });

               }

               if (onceEntry !== null) {

                    utils.forEach(onceEntry.listeners, (element) => {

                         // invoke the listener
                         element(args);

                    });

                    // remove the event from the once entry
                    const indexOnce: number = this.listenersOnce.indexOf(onceEntry);
                    if (indexOnce > -1) {

                         this.listenersOnce.splice(indexOnce, 1);

                    }

               }

               return true;

          }
          catch (error) {

               console.log(`EVENT_EMISSION_ERROR: ${error}`);
               return false;

          }

     }

     /**
      * Pipes the current event emitter to another event emitter
      * 
      * @param {String} event
      * @param {ITypedEventEmitter} emitter 
      */
     public pipe(event: string, emitter: ITypedEventEmitter<T>): void {

          emitter.on(event, (args) => { emitter.emit(event, args); });

     }

     /**
      * Safely clears any listeners stored
      */
     public dispose(): void {

          let maxLength: number = Math.max(this.listeners.length, this.listenersOnce.length);

          // clear all listeners from the store
          while (maxLength > 0) {

               if (this.listeners.length > 0) {

                    this.listeners.pop();

               }

               if (this.listenersOnce.length > 0) {

                    this.listenersOnce.pop();

               }

               maxLength--;

          }

     }

     /**
      * Overrides the default Object.toString to return a table of the registered events for this instance
      * 
      * @returns {String}
      */
     public toString(): string {

          let result: string = "";
          const format = function (table: EventTable<T>[]): string {

               let formatString: string = "";
               table.forEach((element, index, array) => {

                    const name: string = element.name;
                    const length: number = element.listeners.length;
                    formatString += `\nNAME:\t${name}\n`;
                    formatString += `LENGTH:\t${length}\n`;
                    formatString += `PERSISTENT:\t${element.persistent}\n`

               });

               return formatString;

          };

          result += format(this.listeners);
          result += format(this.listenersOnce);
          return result.length > 0 ? result : "EMPTY";

     }

     /**
     * Helper function which attempts to retrieve an event entry by name in a provided store
     * 
     * @param {String} event 
     * @param {EventTable} listenerTable 
     */
     private getEventEntry(event: string, table: EventTable<T>[]): EventTable<T> | null {

          if (utils.isNullOrUndefined(table) || !utils.isString(event)) {

               return null;

          }

          const length: number = table.length;
          let index: number = 0;
          for (; index < length; index++) {

               const entry: EventTable<T> = table[index];
               const entryName: string = entry.name.toLowerCase();
               if (entryName === event.toLowerCase()) {

                    return entry;

               }

          }

          return null;

     }

     /**
      * Adds an event to the persistent or non-persistent store listener stores
      * 
      * @param {String} event 
      * @param {IListener} listener 
      * @param {Boolean} persistentTable 
      */
     private add(event: string, listener: IListener<T>, persistentStore: boolean) {

          if (!utils.isString(event)) {

               return;

          }

          if (utils.isNullOrUndefined(listener)) {

               listener = (arg): void => { };

          }

          let table: EventTable<T>[];
          if (persistentStore === false) {

               if (utils.isNullOrUndefined(this.listenersOnce)) {

                    this.listenersOnce = [];

               }

               table = this.listenersOnce;

          } else {

               if (utils.isNullOrUndefined(this.listeners)) {

                    this.listeners = [];

               }

               table = this.listeners;

          }

          const entry: EventTable<T> | null = this.getEventEntry(event, table);
          if (entry === null) {

               // add a new table to the listener store
               const tableEntry: EventTable<T> = new EventTable<T>(event);
               tableEntry.persistent = utils.isBoolean(persistentStore) ? persistentStore : true;
               tableEntry.listeners.push(listener);
               table.push(tableEntry);

          } else {

               // only add the listener to an already existing table
               const index: number = table.indexOf(entry);
               if (index > -1) {

                    table[index].listeners.push(listener);

               }

          }

     }

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