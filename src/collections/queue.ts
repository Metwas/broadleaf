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

// import event emitter module
import { EventEmitter } from "../tasks/common/eventEmitter";
// import utilities
import { isString, isNumber, isObject, isNullOrUndefined } from "../utils/utils";

/**
 * Represents a overflow model based on a Queue
 */
interface IQueueOverflow {

     /**
      * Whether the queue is in range of acceptance level
      */
     inRange: boolean;

     /**
      * if the inRange is false this value indicates how much entries are overflowing
      */
     overflowAmount: number;

}

/**
 * Represents a state whereby a queue can be modified before or after assigned events
 */
interface ITransferQueueState {

     /**
      * A callback function which 
      */
     cb: (items: Array<any>, overflow: IQueueOverflow) => void;

     /**
      * Whether the transfer state was handled or not
      */
     handled: boolean;

}

/**
 * Represents a first-in, first-out ordered container
 */
export class Queue extends EventEmitter<any> {

     /**
      * The queue limit 
      */
     public limit: number;

     /**
      * The underlying array of items ordered by queue
      */
     protected _data: Array<any>;

     /**
      * Initializes the queue with a specified limit
      * 
      * @param {Number} limit 
      */
     public constructor(limit: number = 10) {

          super();
          this.limit = limit;
          this._data = [];

     }

     /**
      * Gets the current queue count
      * 
      * @returns {Number}
      */
     public get Count(): number {

          let _temp: number = 0;
          let i: number = 0;
          const length: number = this._data.length;
          for (; i < length; i++) {

               const entry: any = this._data[i];
               if (!entry) {

                    // remove null entry
                    this.remove(i);

               } else {

                    // increment count
                    _temp++;

               }

          }

          return _temp;

     }

     /**
      * Gets the underlying queue container
      * 
      * @returns {Array}
      */
     public get Queue(): Array<any> {

          return this._data;

     }

     /**
      * Adds an entry to the back of the queue
      * 
      * @param {Any} queueItem 
      */
     public append(queueItem: any): void {

          if (!queueItem) {

               console.warn("Provided queue item was undefined or null");
               return;

          }

          if (Array.isArray(queueItem)) {

               this.appendRange(queueItem);
               return;

          }

          // ensure count does not exceed the set limit
          if ((this.Count + 1) > this.limit) {

               console.warn(`Queue has exceeded the set limit of: ${this.limit}`);
               return;

          }

          // push entries to the end of the queue
          this._data.push(queueItem);
          // notify any listeners about the addition
          this.emit("add", queueItem);

     }

     /**
      * Adds a range of entries to the end of the queue
      * 
      * @param {Array} items 
      */
     public appendRange(items: Array<any>): void {

          if (!items) {

               console.warn("Provided item(s) was not null or undefined");
               return;

          }

          // validate the items fall within range, else select a set few entries
          const { inRange, overflowAmount } = this._calculateQueueLoad(items);
          let state: any = null;
          this.emit("_addRange", state);
          if (state && state.handled === true) {

               if (typeof state.cb === "function") {

                    // call sub-classes callback function
                    state.cb(items, { inRange: inRange, overflowAmount: overflowAmount });

               }

          } else {

               // provide default logic
               if (inRange === false) {

                    // slice the items based on the overflow amount
                    items = items.slice(0, overflowAmount);

               }

               this._data.push(...items);

          }

     }

     /**
      * Retrieves the first entry within a queue, then removes it from the store
      * 
      * @returns {Any} The next in-line queue entry
      */
     public next(): any {

          if (this._data.length === 0) {

               return null;

          }

          // state is used for sub-classes to inject custom logic
          let state: any;
          let queueItem: any = null;
          // notify any listeners about the update
          this.emit("next", queueItem);
          this.emit("_next", state);

          if (!isNullOrUndefined(state)) {

               if (typeof state.cb === "function") {

                    // call sub-classes callback function
                    queueItem = state.cb();

               }

               if (!state.handled && this.Count > 0) {

                    // provide default logic
                    queueItem = this._data.shift();

               }

               return queueItem;

          } else {

               return this._data.shift();

          }

     }

     /**
      * Removes a queue entry at the specified index
      * 
      * @param {Number} index 
      * @returns {Any} The removed queue entry
      */
     public remove(index: number): any {

          let queueItem: any = null;
          if (index > -1 && index < this.Count) {

               queueItem = this._data.splice(index, 1);
               this.emit("remove", queueItem);

          }
          // return the removed queue entry
          return queueItem;

     }

     /**
      * Removes a index range of entries from the queue
      * 
      * @param {Number} start 
      * @param {Number} end 
      * @returns {Array} An array of removed queue entries
      */
     public removeRange(start: number | any, end?: number): Array<any> {

          if (isObject(start)) {

               const startIndex = isNumber(start["start"]) ? start["start"] : 0;
               const endIndex = isNumber(start["end"]) ? start["end"] : 0;
               return this.removeRange(startIndex, endIndex);

          } else {

               let items: Array<any> = this.Queue;
               if (end !== null && end !== void 0) {

                    if (end <= start) {
                         // ensure end is greater than the start
                         end = start + 1;

                    }

                    if (start > -1 && end && end <= this.Count) {

                         items = this._data.splice(start, end);
                         this.emit("remove", items);

                    }

               }

               return items;

          }

     }

     /**
      * Calculates whether the current queue can take a set range of entries, returning the overflow amount for processing
      * 
      * @private
      * @param {Array} items 
      * @returns {Object} inRange, overflowCount
      */
     private _calculateQueueLoad(items: Array<any>): IQueueOverflow {

          const length: number = Array.isArray(items) ? items.length : 1;
          let inRange: boolean = false;
          let overflow: number = 0;
          if (length <= this.limit) {

               overflow = (this.Count + length) % this.limit;
               inRange = (overflow === 0 && (this.Count + length) <= this.limit);

          }

          return { inRange: inRange, overflowAmount: overflow };

     }

}

/**
 * Adds a priority to a queue by defining a property to order by
 */
export class PriorityQueue extends Queue {

     /**
      * The property name for which to prioritize over
      */
     public priorityProperty: string;

     /**
      * Option to retain the priority once full
      */
     public retainQueue: boolean;

     /**
      * Initializes the priority by defining a property to set a priority order
      * 
      * @param {String} priorityProperty 
      * @param {Number} limit 
      * @param {Boolean} retain
      */
     public constructor(priorityProperty: string, limit: number, retain: boolean = true) {

          super(limit);
          if (!isString(priorityProperty)) {

               priorityProperty = "priority";

          }

          this.retainQueue = retain;
          this.priorityProperty = priorityProperty || "priority";
          this.on("add", this._handleItemAddition);
          this.on("_addRange", this._handleRangeAddition);

     }

     /**
      * Overrides the default base queue behaviour, which creates a priority property on the item if not provided
      * 
      * @param {Object | Number | String} item 
      */
     public append(item: any): void {

          if (this.retainQueue === false) {

               this._add(item);

          }
          else {

               super.append(this._createPriorityItem(item));

          }

     }

     /**
      * Creates a priority item, using defaults if not already specified
      * 
      * @private
      * @param {Object | Number | String} item 
      * @returns {Object | Array}
      */
     private _createPriorityItem(item: any): any {

          const self = this;
          if (Array.isArray(item)) {

               // yield the array of priority objects
               const priorityItems: Generator = function* (items): any {

                    const length = items.length;
                    let i = 0;
                    for (; i < length; i++) {

                         yield self._createPriorityItem(items[i]);

                    }

               }(item);

               // flatten the generator iteration
               let entry: any = null;
               let temp: Array<any> = [];
               while (entry = priorityItems.next().value) {

                    temp.push(entry);

               }

               return temp;

          }

          const isValueType: boolean = isNumber(item) || isString(item);
          if (isValueType) {

               item = { value: item };

          }

          if (!item[this.priorityProperty]) {

               // default to value priority if value type, else set priority level of 1
               item[this.priorityProperty] = isValueType ? item.value : 1;

          }

          return item;

     }

     /**
      * Handles the base item addition, which sorts the base queue
      * 
      * @private
      */
     private _handleItemAddition(): void {

          this._sortByPriority(this._data);

     }

     /**
      * Sorts the array based on the priorityProperty
      * 
      * @private
      * @param {Array} items
      */
     private _sortByPriority(items: Array<any>): void {

          const self = this;
          // sort the array based on the priority
          items.sort(function (a, b) { return a[self.priorityProperty] - b[self.priorityProperty] });

     }

     /**
      * Intercepts the base addRange to filter out entries with the least priority, if the outOfRange is set to true
      * 
      * @private
      * @param {ITransferQueueState} state 
      */
     private _handleRangeAddition(state: ITransferQueueState): void {

          const self: PriorityQueue = this;
          // sorts the items based on the priority if the queue overflows
          const handleRangeFn = function (items: Array<any>, queueOverflow: IQueueOverflow) {

               let priorityItems: any = self._createPriorityItem(items);
               const { inRange, overflowAmount } = queueOverflow;
               if (inRange === false) {

                    if (self.retainQueue === false) {

                         // replace with new entries based on priority
                         self._add(priorityItems);
                         return;

                    } else {

                         // only leave the top priority entries
                         self._sortByPriority(priorityItems);
                         priorityItems.splice(-overflowAmount);

                    }

               }

               self._data.push(...priorityItems);
               // sort the array after addition
               self._sortByPriority(self._data);

          };

          state.cb = handleRangeFn;
          state.handled = true;

     }

     /**
      * Adds given set of items, replacing current entries within the queue if the priority is greater
      * 
      * @private
      * @param {Array | Object} items 
      */
     private _add(items: Array<any>): void {

          if (!Array.isArray(items)) {

               items = [items];

          }

          const length: number = this._data.length;
          const amount: number = length - this.limit;
          this._data.splice(this.limit - items.length, items.length);
          // merge entries
          this._data.push(...items);
          // sort based on priority
          this._sortByPriority(this._data);
          // only filter out the entries if overflowing
          if (amount > 0) {

               this._data.splice(this.limit, amount);

          }

     }

}
