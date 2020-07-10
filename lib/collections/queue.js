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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//===================== imports =====================//
// import event emitter module
var eventEmitter_1 = require("../tasks/common/eventEmitter");
// import utilities
var utils_1 = require("../utils/utils");
/**
 * Represents a first-in, first-out ordered container
 */
var Queue = /** @class */ (function (_super) {
    __extends(Queue, _super);
    /**
     * Initializes the queue with a specified limit
     *
     * @param {Number} limit
     */
    function Queue(limit) {
        if (limit === void 0) { limit = 10; }
        var _this = _super.call(this) || this;
        _this.limit = limit;
        _this._data = [];
        return _this;
    }
    Object.defineProperty(Queue.prototype, "Count", {
        /**
         * Gets the current queue count
         *
         * @returns {Number}
         */
        get: function () {
            var _temp = 0;
            var i = 0;
            var length = this._data.length;
            for (; i < length; i++) {
                var entry = this._data[i];
                if (!entry) {
                    this.remove(i);
                }
                else {
                    _temp++;
                }
            }
            return _temp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "Queue", {
        /**
         * Gets the underlying queue container
         *
         * @returns {Array}
         */
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds an entry to the back of the queue
     *
     * @param {Any} queueItem
     */
    Queue.prototype.append = function (queueItem) {
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
            console.warn("Queue has exceeded the set limit of: " + this.limit);
            return;
        }
        // push entries to the end of the queue
        this._data.push(queueItem);
        // notify any listeners about the addition
        this.emit("add", queueItem);
    };
    /**
     * Adds a range of entries to the end of the queue
     *
     * @param {Array} items
     */
    Queue.prototype.appendRange = function (items) {
        var _a;
        if (!items) {
            console.warn("Provided item(s) was not null or undefined");
            return;
        }
        // validate the items fall within range, else select a set few entries
        var _b = this._calculateQueueLoad(items), inRange = _b.inRange, overflowAmount = _b.overflowAmount;
        var state = null;
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
            (_a = this._data).push.apply(_a, items);
        }
    };
    /**
     * Retrieves the first entry within a queue, then removes it from the store
     *
     * @returns {Any} The next in-line queue entry
     */
    Queue.prototype.next = function () {
        if (this._data.length === 0) {
            return null;
        }
        // state is used for sub-classes to inject custom logic
        var state;
        var queueItem = null;
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
    };
    /**
     * Removes a queue entry at the specified index
     *
     * @param {Number} index
     * @returns {Any} The removed queue entry
     */
    Queue.prototype.remove = function (index) {
        var queueItem = null;
        if (index > -1 && index < this.Count) {
            queueItem = this._data.splice(index, 1);
            this.emit("remove", queueItem);
        }
        // return the removed queue entry
        return queueItem;
    };
    /**
     * Removes a index range of entries from the queue
     *
     * @param {Number} start
     * @param {Number} end
     * @returns {Array} An array of removed queue entries
     */
    Queue.prototype.removeRange = function (start, end) {
        if (utils_1.isObject(start)) {
            var startIndex = utils_1.isNumber(start["start"]) ? start["start"] : 0;
            var endIndex = utils_1.isNumber(start["end"]) ? start["end"] : 0;
            return this.removeRange(startIndex, endIndex);
        }
        else {
            var items = this.Queue;
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
    };
    /**
     * Calculates whether the current queue can take a set range of entries, returning the overflow amount for processing
     *
     * @private
     * @param {Array} items
     * @returns {Object} inRange, overflowCount
     */
    Queue.prototype._calculateQueueLoad = function (items) {
        var length = Array.isArray(items) ? items.length : 1;
        var inRange = false;
        var overflow = 0;
        if (length <= this.limit) {
            overflow = (this.Count + length) % this.limit;
            inRange = (overflow === 0 && (this.Count + length) <= this.limit);
        }
        return { inRange: inRange, overflowAmount: overflow };
    };
    return Queue;
}(eventEmitter_1.EventEmitter));
exports.Queue = Queue;
/**
 * Adds a priority to a queue by defining a property to order by
 */
var PriorityQueue = /** @class */ (function (_super) {
    __extends(PriorityQueue, _super);
    /**
     * Initializes the priority by defining a property to set a priority order
     *
     * @param {String} priorityProperty
     * @param {Number} limit
     * @param {Boolean} retain
     */
    function PriorityQueue(priorityProperty, limit, retain) {
        if (retain === void 0) { retain = true; }
        var _this = _super.call(this, limit) || this;
        if (!utils_1.isString(priorityProperty)) {
            priorityProperty = "priority";
        }
        _this.retainQueue = retain;
        _this.priorityProperty = priorityProperty || "priority";
        _this.on("add", _this._handleItemAddition);
        _this.on("_addRange", _this._handleRangeAddition);
        return _this;
    }
    /**
     * Overrides the default base queue behaviour, which creates a priority property on the item if not provided
     *
     * @param {Object | Number | String} item
     */
    PriorityQueue.prototype.append = function (item) {
        if (this.retainQueue === false) {
            this._add(item);
        }
        else {
            _super.prototype.append.call(this, this._createPriorityItem(item));
        }
    };
    /**
     * Creates a priority item, using defaults if not already specified
     *
     * @private
     * @param {Object | Number | String} item
     * @returns {Object | Array}
     */
    PriorityQueue.prototype._createPriorityItem = function (item) {
        var self = this;
        if (Array.isArray(item)) {
            // yield the array of priority objects
            var priorityItems = function (items) {
                var length, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            length = items.length;
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < length)) return [3 /*break*/, 4];
                            return [4 /*yield*/, self._createPriorityItem(items[i])];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            }(item);
            // flatten the generator iteration
            var entry = null;
            var temp = [];
            while (entry = priorityItems.next().value) {
                temp.push(entry);
            }
            return temp;
        }
        var isValueType = utils_1.isNumber(item) || utils_1.isString(item);
        if (isValueType) {
            item = { value: item };
        }
        if (!item[this.priorityProperty]) {
            // default to value priority if value type, else set priority level of 1
            item[this.priorityProperty] = isValueType ? item.value : 1;
        }
        return item;
    };
    /**
     * Handles the base item addition, which sorts the base queue
     *
     * @private
     */
    PriorityQueue.prototype._handleItemAddition = function () {
        this._sortByPriority(this._data);
    };
    /**
     * Sorts the array based on the priorityProperty
     *
     * @private
     * @param {Array} items
     */
    PriorityQueue.prototype._sortByPriority = function (items) {
        var self = this;
        // sort the array based on the priority
        items.sort(function (a, b) {
            return a[self.priorityProperty] - b[self.priorityProperty];
        });
    };
    /**
     * Intercepts the base addRange to filter out entries with the least priority, if the outOfRange is set to true
     *
     * @private
     * @param {ITransferQueueState} state
     */
    PriorityQueue.prototype._handleRangeAddition = function (state) {
        var self = this;
        // sorts the items based on the priority if the queue overflows
        var handleRangeFn = function (items, queueOverflow) {
            var _a;
            var priorityItems = self._createPriorityItem(items);
            var inRange = queueOverflow.inRange, overflowAmount = queueOverflow.overflowAmount;
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
            (_a = self._data).push.apply(_a, priorityItems);
            // sort the array after addition
            self._sortByPriority(self._data);
        };
        state.cb = handleRangeFn;
        state.handled = true;
    };
    /**
     * Adds given set of items, replacing current entries within the queue if the priority is greater
     *
     * @private
     * @param {Array | Object} items
     */
    PriorityQueue.prototype._add = function (items) {
        var _a;
        if (!Array.isArray(items)) {
            items = [items];
        }
        var length = this._data.length;
        var amount = length - this.limit;
        this._data.splice(this.limit - items.length, items.length);
        // merge entries
        (_a = this._data).push.apply(_a, items);
        // sort based on priority
        this._sortByPriority(this._data);
        // only filter out the entries if overflowing
        if (amount > 0) {
            this._data.splice(this.limit, amount);
        }
    };
    return PriorityQueue;
}(Queue));
exports.PriorityQueue = PriorityQueue;
