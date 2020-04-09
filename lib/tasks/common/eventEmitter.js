"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var eventTable_1 = require("./eventTable");
var utils = require("../../utils/utils");
/**
 * Type safe event register and emitter
 */
var EventEmitter = /** @class */ (function () {
    /**
     * Default constructor
     *
     * @param {Number} maxListeners
     */
    function EventEmitter(maxListeners) {
        this.listeners = [];
        this.listenersOnce = [];
        if (maxListeners && utils.isNumber(maxListeners)) {
            this._maxListeners = maxListeners;
        }
        else {
            this._maxListeners = EventEmitter.DEFAULT_MAX_LISTENERS;
        }
    }
    Object.defineProperty(EventEmitter.prototype, "Count", {
        /**
         * Gets the total amount of registered listeners from both stores
         */
        get: function () {
            var total = 0;
            // get length from persistant store
            if (utils.isArray(this.listeners)) {
                total += this.listeners.length;
            }
            // get length from non-persistant store
            if (utils.isArray(this.listenersOnce)) {
                total += this.listenersOnce.length;
            }
            return total;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the maximum amount of listeners
     *
     * @param {Number} value
     */
    EventEmitter.prototype.setMaximumListeners = function (value) {
        if (!utils.isNumber(value) || value <= 0) {
            console.warn("Provided maximum value was not valid, using defaults");
            value = EventEmitter.DEFAULT_MAX_LISTENERS;
        }
        this._maxListeners = value;
    };
    /**
     * Registers an event listener to a listener store
     *
     * @param {String} event
     * @param {IListener} listener
     */
    EventEmitter.prototype.on = function (event, listener) {
        this.add(event, listener, true);
    };
    /**
     * Registers an event listener to a listener store
     *
     * @param {String} event
     * @param {IListener} listener
     * @param {Boolean} persistant
     */
    EventEmitter.prototype.addEventListener = function (event, listener, persistant) {
        if (persistant === void 0) { persistant = true; }
        this.add(event, listener, persistant);
    };
    /**
     * Registers a listener to the once store
     *
     * @param {String} event
     * @param {IListener} listener
     */
    EventEmitter.prototype.once = function (event, listener) {
        this.add(event, listener, false);
    };
    /**
     * Removes a specified listener from a listener store
     *
     * @param {String} event
     */
    EventEmitter.prototype.off = function (event) {
        var self = this;
        var getIndex = function (event, table) {
            var entry = self.getEventEntry(event, table);
            if (entry !== null) {
                return table.indexOf(entry);
            }
            return -1;
        };
        // remove from both tables
        var indexOnce = getIndex(event, this.listenersOnce);
        var indexPersistent = getIndex(event, this.listeners);
        if (indexOnce > -1) {
            this.listenersOnce.splice(indexOnce, 1);
        }
        if (indexPersistent > -1) {
            this.listeners.splice(indexPersistent, 1);
        }
    };
    /**
     * Removes a specified listener from a listener store
     *
     * @param {String} event
     */
    EventEmitter.prototype.removeEventListener = function (event) {
        this.off(event);
    };
    /**
     * Fires off the specified event to all attached listeners
     *
     * @param {String} event
     * @param {Array} args optional arguments
     * @returns {Boolean}
     */
    EventEmitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var eventEntry = this.getEventEntry(event, this.listeners);
        var onceEntry = this.getEventEntry(event, this.listenersOnce);
        try {
            if (eventEntry !== null) {
                utils.forEach(eventEntry.listeners, function (element) {
                    // invoke the listener
                    element(args);
                });
            }
            if (onceEntry !== null) {
                utils.forEach(onceEntry.listeners, function (element) {
                    // invoke the listener
                    element(args);
                });
                // remove the event from the once entry
                var indexOnce = this.listenersOnce.indexOf(onceEntry);
                if (indexOnce > -1) {
                    this.listenersOnce.splice(indexOnce, 1);
                }
            }
            return true;
        }
        catch (error) {
            console.log("EVENT_EMISSION_ERROR: " + error);
            return false;
        }
    };
    /**
     * Pipes the current event emitter to another event emitter
     *
     * @param {String} event
     * @param {ITypedEventEmitter} emitter
     */
    EventEmitter.prototype.pipe = function (event, emitter) {
        emitter.on(event, function (args) { emitter.emit(event, args); });
    };
    /**
     * Safely clears any listeners stored
     */
    EventEmitter.prototype.dispose = function () {
        var maxLength = Math.max(this.listeners.length, this.listenersOnce.length);
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
    };
    /**
     * Overrides the default Object.toString to return a table of the registered events for this instance
     *
     * @returns {String}
     */
    EventEmitter.prototype.toString = function () {
        var result = "";
        var format = function (table) {
            var formatString = "";
            table.forEach(function (element, index, array) {
                var name = element.name;
                var length = element.listeners.length;
                formatString += "\nNAME:\t" + name + "\n";
                formatString += "LENGTH:\t" + length + "\n";
                formatString += "PERSISTENT:\t" + element.persistent + "\n";
            });
            return formatString;
        };
        result += format(this.listeners);
        result += format(this.listenersOnce);
        return result.length > 0 ? result : "EMPTY";
    };
    /**
    * Helper function which attempts to retrieve an event entry by name in a provided store
    *
    * @param {String} event
    * @param {Array<EventTable>} table
    * @returns {EventTable | Null}
    */
    EventEmitter.prototype.getEventEntry = function (event, table) {
        if (utils.isNullOrUndefined(table) || !utils.isString(event)) {
            return null;
        }
        var length = table.length;
        var index = 0;
        for (; index < length; index++) {
            var entry = table[index];
            var entryName = entry.name.toLowerCase();
            if (entryName === event.toLowerCase()) {
                return entry;
            }
        }
        return null;
    };
    /**
     * Adds an event to the persistent or non-persistent store listener stores
     *
     * @param {String} event
     * @param {IListener} listener
     * @param {Boolean} persistentStore
     */
    EventEmitter.prototype.add = function (event, listener, persistentStore) {
        if (!utils.isString(event)) {
            return;
        }
        if (utils.isNullOrUndefined(listener)) {
            listener = function (arg) { };
        }
        if (this.Count >= this._maxListeners) {
            console.warn("Maximum listeners reached");
            return;
        }
        var table;
        if (persistentStore === false) {
            if (utils.isNullOrUndefined(this.listenersOnce)) {
                this.listenersOnce = [];
            }
            table = this.listenersOnce;
        }
        else {
            if (utils.isNullOrUndefined(this.listeners)) {
                this.listeners = [];
            }
            table = this.listeners;
        }
        var entry = this.getEventEntry(event, table);
        if (entry === null) {
            // add a new table to the listener store
            var tableEntry = new eventTable_1.EventTable(event);
            tableEntry.persistent = utils.isBoolean(persistentStore) ? persistentStore : true;
            tableEntry.listeners.push(listener);
            table.push(tableEntry);
        }
        else {
            // only add the listener to an already existing table
            var index = table.indexOf(entry);
            if (index > -1) {
                table[index].listeners.push(listener);
            }
        }
    };
    /**
     * Default maximum allowed listeners
     */
    EventEmitter.DEFAULT_MAX_LISTENERS = 15;
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
