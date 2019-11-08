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
const utils = require("../../utils/utils");
const timerState_1 = require("./timerState");
const eventEmitter_1 = require("./eventEmitter");
/**
 * Represents a setInterval based wrapper and manager
 */
class Timer extends eventEmitter_1.EventEmitter {
    /**
     * Represents a setInterval based wrapper and manager
     *
     * @param {Number} duration How long this timer is setup for (in milliseconds)
     * @param {Number} startTime An optional start position within the duration (in milliseconds)
     */
    constructor(duration, fps = 60, startTime = 0) {
        // construct the event emitter
        super();
        /**
         * The id for a newly initialized timer
         */
        this.TIMER_INTERVAL_ID = -1;
        /**
        * Gets the current frames-per-second value
        *
        * @returns {Number}
        */
        this._fps = 60;
        /**
         * How long this timer is setup for (in milliseconds)
         *
         * @returns {Number}
         */
        this._duration = 0;
        if (!utils.isNumber(duration)) {
            duration = 1;
        }
        if (!utils.isNumber(startTime) || startTime > duration) {
            startTime = 0;
        }
        this._startTime = startTime;
        this._duration = duration;
        this.fps = fps;
        this.state = timerState_1.TimerState.STOPPED;
        this.elapsed = 0;
        this._previousTime = 0;
        this._mode = "once";
    }
    /**
     * Statically creates and starts up a timer
     *
     * @param {Number} duration How long this timer is setup for (in milliseconds)
     * @param {String} mode The specified operation procedure for the timer, either 'once' or 'loop'
     * @param {Number} startTime An optional start position within the duration (in milliseconds)
     */
    static start(duration, mode = "once", startTime) {
        const timer = new Timer(duration, 60, startTime);
        timer.start(mode);
        return timer;
    }
    /**
     * Gets the current state for this timer in a readable string format
     *
     * @returns {String}
     */
    get status() {
        return timerState_1.TimerState[this.state];
    }
    get fps() {
        return this._fps;
    }
    /**
    * Sets the current frames-per-second value, ensuring it falls within the defined UPDATE_INTERVAL
    *
    * @param {Number} value
    */
    set fps(value) {
        if (value > 0 && value < Timer.UPDATE_INTERVAL) {
            this._fps = value;
        }
    }
    get duration() {
        return this._duration;
    }
    /**
     * Registers the event to the base EventEmitter class
     *
     * @param {String} event
     * @param {IListener} listener
     */
    on(event, listener) {
        super.on(event, listener);
    }
    /**
     * Registers the event to the base EventEmitter once store
     *
     * @param {String} event
     * @param {IListener} listener
     */
    once(event, listener) {
        super.once(event, listener);
    }
    /**
     * Starts the timer with the default mode to run only once
     */
    start() {
        const _this = this;
        if (this.state === timerState_1.TimerState.RUNNING) {
            clearInterval(this.TIMER_INTERVAL_ID);
        }
        let startTime = this._startTime;
        if (!utils.isNumber(startTime) || startTime > this.duration) {
            startTime = 0;
        }
        this._startTime = this.elapsed = startTime;
        const mode = String(arguments[0]).toLowerCase();
        this._mode = (mode === "once" || mode === "loop") ? mode : _this._mode || "once";
        this.TIMER_INTERVAL_ID = window.setInterval(function () { Timer._tick(_this); }, Timer.UPDATE_INTERVAL / this.fps, false);
        this.state = timerState_1.TimerState.RUNNING;
        this.emit("start");
    }
    /**
     * Pauses the current timer instance
     */
    pause() {
        this.state = timerState_1.TimerState.PAUSED;
        clearInterval(this.TIMER_INTERVAL_ID);
        this.emit("pause");
    }
    /**
     * Stops the timer, setting the elapsed property to the duration value
     */
    stop() {
        this.state = timerState_1.TimerState.STOPPED;
        clearInterval(this.TIMER_INTERVAL_ID);
        this.elapsed = this.duration;
        // [As for version: 1.5.12] emit one more tick to completely ensure the elapsed duration is returned
        this.emit("tick", this.elapsed);
        this.emit("complete", this.elapsed);
    }
    /**
     * Operates a full reset for the timer
     */
    reset() {
        this.stop();
        this.start();
    }
    /**
     * This function gets called per frame tick
     *
     * @param {Timer} context
     */
    static _tick(context) {
        const _this = context;
        _this.elapsed += Math.ceil(Timer.UPDATE_INTERVAL / _this.fps);
        if (_this.elapsed >= _this.duration) {
            // TODO:: Add a schedule class to manager timer processes
            _this._mode.toLowerCase() === "loop" ? _this.reset() : _this.stop();
        }
        else {
            _this.emit("tick", _this.elapsed);
        }
    }
}
exports.Timer = Timer;
/**
 * A static reference for a timer update sequence
 */
Timer.UPDATE_INTERVAL = 1000;
