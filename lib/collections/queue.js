"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
//===================== imports =====================//
// import event emitter module
const eventEmitter_1 = require("../tasks/common/eventEmitter");
// import utilities
const utils_1 = require("../utils/utils");
/**
 * Represents a first-in, first-out ordered container
 */
class Queue extends eventEmitter_1.EventEmitter {
    /**
     * Initializes the queue with a specified limit
     *
     * @param {Number} limit
     */
    constructor(limit = 10) {
        super();
        this.limit = limit;
        this._data = [];
    }
    /**
     * Gets the current queue count
     *
     * @returns {Number}
     */
    get Count() {
        let _temp = 0;
        let i = 0;
        const length = this._data.length;
        for (; i < length; i++) {
            const entry = this._data[i];
            if (!entry) {
                // remove null entry
                this.remove(i);
            }
            else {
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
    get Queue() {
        return this._data;
    }
    /**
     * Adds an entry to the back of the queue
     *
     * @param {Any} queueItem
     */
    append(queueItem) {
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
    appendRange(items) {
        if (!items) {
            console.warn("Provided item(s) was not null or undefined");
            return;
        }
        // validate the items fall within range, else select a set few entries
        const { inRange, overflowAmount } = this._calculateQueueLoad(items);
        let state = null;
        this.emit("_addRange", state);
        if (state && state.handled === true) {
            if (typeof state.cb === "function") {
                // call sub-classes callback function
                state.cb(items, { inRange: inRange, overflowAmount: overflowAmount });
            }
        }
        else {
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
    next() {
        if (this._data.length === 0) {
            return null;
        }
        // state is used for sub-classes to inject custom logic
        let state;
        let queueItem = null;
        // notify any listeners about the update
        this.emit("next", queueItem);
        this.emit("_next", state);
        if (!utils_1.isNullOrUndefined(state)) {
            if (typeof state.cb === "function") {
                // call sub-classes callback function
                queueItem = state.cb();
            }
            if (!state.handled && this.Count > 0) {
                // provide default logic
                queueItem = this._data.shift();
            }
            return queueItem;
        }
        else {
            return this._data.shift();
        }
    }
    /**
     * Removes a queue entry at the specified index
     *
     * @param {Number} index
     * @returns {Any} The removed queue entry
     */
    remove(index) {
        let queueItem = null;
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
    removeRange(start, end) {
        if (utils_1.isObject(start)) {
            const startIndex = utils_1.isNumber(start["start"]) ? start["start"] : 0;
            const endIndex = utils_1.isNumber(start["end"]) ? start["end"] : 0;
            return this.removeRange(startIndex, endIndex);
        }
        else {
            let items = this.Queue;
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
    _calculateQueueLoad(items) {
        const length = Array.isArray(items) ? items.length : 1;
        let inRange = false;
        let overflow = 0;
        if (length <= this.limit) {
            overflow = (this.Count + length) % this.limit;
            inRange = (overflow === 0 && (this.Count + length) <= this.limit);
        }
        return { inRange: inRange, overflowAmount: overflow };
    }
}
exports.Queue = Queue;
/**
 * Adds a priority to a queue by defining a property to order by
 */
class PriorityQueue extends Queue {
    /**
     * Initializes the priority by defining a property to set a priority order
     *
     * @param {String} priorityProperty
     * @param {Number} limit
     * @param {Boolean} retain
     */
    constructor(priorityProperty, limit, retain = true) {
        super(limit);
        if (!utils_1.isString(priorityProperty)) {
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
    append(item) {
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
    _createPriorityItem(item) {
        const self = this;
        if (Array.isArray(item)) {
            // yield the array of priority objects
            const priorityItems = function* (items) {
                const length = items.length;
                let i = 0;
                for (; i < length; i++) {
                    yield self._createPriorityItem(items[i]);
                }
            }(item);
            // flatten the generator iteration
            let entry = null;
            let temp = [];
            while (entry = priorityItems.next().value) {
                temp.push(entry);
            }
            return temp;
        }
        const isValueType = utils_1.isNumber(item) || utils_1.isString(item);
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
    _handleItemAddition() {
        this._sortByPriority(this._data);
    }
    /**
     * Sorts the array based on the priorityProperty
     *
     * @private
     * @param {Array} items
     */
    _sortByPriority(items) {
        const self = this;
        // sort the array based on the priority
        items.sort(function (a, b) { return a[self.priorityProperty] - b[self.priorityProperty]; });
    }
    /**
     * Intercepts the base addRange to filter out entries with the least priority, if the outOfRange is set to true
     *
     * @private
     * @param {ITransferQueueState} state
     */
    _handleRangeAddition(state) {
        const self = this;
        // sorts the items based on the priority if the queue overflows
        const handleRangeFn = function (items, queueOverflow) {
            let priorityItems = self._createPriorityItem(items);
            const { inRange, overflowAmount } = queueOverflow;
            if (inRange === false) {
                if (self.retainQueue === false) {
                    // replace with new entries based on priority
                    self._add(priorityItems);
                    return;
                }
                else {
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
    _add(items) {
        if (!Array.isArray(items)) {
            items = [items];
        }
        const length = this._data.length;
        const amount = length - this.limit;
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
exports.PriorityQueue = PriorityQueue;
