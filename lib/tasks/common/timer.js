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
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../../utils/utils");
var timerState_1 = require("./timerState");
var eventEmitter_1 = require("./eventEmitter");
/**
 * Represents a setInterval based wrapper and manager
 */
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    /**
     * Represents a setInterval based wrapper and manager
     *
     * @param {Number} duration How long this timer is setup for (in milliseconds)
     * @param {Number} startTime An optional start position within the duration (in milliseconds)
     */
    function Timer(duration, fps, startTime) {
        if (fps === void 0) { fps = 60; }
        if (startTime === void 0) { startTime = 0; }
        var _this_1 = 
        // construct the event emitter
        _super.call(this) || this;
        /**
         * The id for a newly initialized timer
         */
        _this_1.TIMER_INTERVAL_ID = -1;
        /**
        * Gets the current frames-per-second value
        *
        * @returns {Number}
        */
        _this_1._fps = 60;
        /**
         * How long this timer is setup for (in milliseconds)
         *
         * @returns {Number}
         */
        _this_1._duration = 0;
        if (!utils.isNumber(duration)) {
            duration = 1;
        }
        if (!utils.isNumber(startTime) || startTime > duration) {
            startTime = 0;
        }
        _this_1._startTime = startTime;
        _this_1._duration = duration;
        _this_1.fps = fps;
        _this_1.state = timerState_1.TimerState.STOPPED;
        _this_1.elapsed = 0;
        _this_1._previousTime = 0;
        _this_1._mode = "once";
        return _this_1;
    }
    /**
     * Statically creates and starts up a timer
     *
     * @param {Number} duration How long this timer is setup for (in milliseconds)
     * @param {String} mode The specified operation procedure for the timer, either 'once' or 'loop'
     * @param {Number} startTime An optional start position within the duration (in milliseconds)
     */
    Timer.start = function (duration, mode, startTime) {
        if (mode === void 0) { mode = "once"; }
        var timer = new Timer(duration, 60, startTime);
        timer.start(mode);
        return timer;
    };
    Object.defineProperty(Timer.prototype, "status", {
        /**
         * Gets the current state for this timer in a readable string format
         *
         * @returns {String}
         */
        get: function () {
            return timerState_1.TimerState[this.state];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "fps", {
        get: function () {
            return this._fps;
        },
        /**
        * Sets the current frames-per-second value, ensuring it falls within the defined UPDATE_INTERVAL
        *
        * @param {Number} value
        */
        set: function (value) {
            if (value > 0 && value < Timer.UPDATE_INTERVAL) {
                this._fps = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Registers the event to the base EventEmitter class
     *
     * @param {String} event
     * @param {IListener} listener
     */
    Timer.prototype.on = function (event, listener) {
        _super.prototype.on.call(this, event, listener);
    };
    /**
     * Registers the event to the base EventEmitter once store
     *
     * @param {String} event
     * @param {IListener} listener
     */
    Timer.prototype.once = function (event, listener) {
        _super.prototype.once.call(this, event, listener);
    };
    /**
     * Starts the timer with the default mode to run only once
     */
    Timer.prototype.start = function () {
        var _this = this;
        if (this.state === timerState_1.TimerState.RUNNING) {
            clearInterval(this.TIMER_INTERVAL_ID);
        }
        var startTime = this._startTime;
        if (!utils.isNumber(startTime) || startTime > this.duration) {
            startTime = 0;
        }
        this._startTime = this.elapsed = startTime;
        var mode = String(arguments[0]).toLowerCase();
        this._mode = (mode === "once" || mode === "loop") ? mode : _this._mode || "once";
        this.TIMER_INTERVAL_ID = window.setInterval(function () { Timer._tick(_this); }, Timer.UPDATE_INTERVAL / this.fps, false);
        this.state = timerState_1.TimerState.RUNNING;
        this.emit("start");
    };
    /**
     * Pauses the current timer instance
     */
    Timer.prototype.pause = function () {
        this.state = timerState_1.TimerState.PAUSED;
        clearInterval(this.TIMER_INTERVAL_ID);
        this.emit("pause");
    };
    /**
     * Stops the timer, setting the elapsed property to the duration value
     */
    Timer.prototype.stop = function () {
        this.state = timerState_1.TimerState.STOPPED;
        clearInterval(this.TIMER_INTERVAL_ID);
        this.elapsed = this.duration;
        // [As for version: 1.5.12] emit one more tick to completely ensure the elapsed duration is returned
        this.emit("tick", this.elapsed);
        this.emit("complete", this.elapsed);
    };
    /**
     * Operates a full reset for the timer
     */
    Timer.prototype.reset = function () {
        this.stop();
        this.start();
    };
    /**
     * This function gets called per frame tick
     *
     * @param {Timer} context
     */
    Timer._tick = function (context) {
        var _this = context;
        _this.elapsed += Math.ceil(Timer.UPDATE_INTERVAL / _this.fps);
        if (_this.elapsed >= _this.duration) {
            // TODO:: Add a schedule class to manager timer processes
            _this._mode.toLowerCase() === "loop" ? _this.reset() : _this.stop();
        }
        else {
            _this.emit("tick", _this.elapsed);
        }
    };
    /**
     * A static reference for a timer update sequence
     */
    Timer.UPDATE_INTERVAL = 1000;
    return Timer;
}(eventEmitter_1.EventEmitter));
exports.Timer = Timer;
