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

import * as utils from "../../utils/utils";
import { TimerState } from "./timerState";
import { ITimer } from "./ITimer";
import { math } from "../../broadleaf";
import { EventEmitter } from "./EventEmitter";

/**
 * Represents a setInterval based wrapper and manager
 */
export class Timer extends EventEmitter<any> implements ITimer {

     /**
      * A static reference for a timer update sequence
      */
     public static readonly UPDATE_INTERVAL: number = 1000;

     /**
      * Statically creates and starts up a timer
      * 
      * @param {Number} duration How long this timer is setup for (in milliseconds)
      * @param {String} mode Sets the timer to run only once
      * @param {Number} startTime An optional start position within the duration (in milliseconds)
      */
     static start(duration: number, mode?: "once", startTime?: number): Timer;

     /**
      * Statically creates and starts up a timer
      * 
      * @param {Number} duration How long this timer is setup for (in milliseconds)
      * @param {String} mode Sets the timer to run in an infinite loop
      * @param {Number} startTime An optional start position within the duration (in milliseconds)
      */
     static start(duration: number, mode?: "loop", startTime?: number): Timer;

     /**
      * Statically creates and starts up a timer
      * 
      * @param {Number} duration How long this timer is setup for (in milliseconds)
      * @param {String} mode The specified operation procedure for the timer, either 'once' or 'loop'
      * @param {Number} startTime An optional start position within the duration (in milliseconds)
      */
     static start(duration: number, mode: any = "once", startTime?: number): Timer {

          const timer = new Timer(duration, startTime);
          timer.start(mode);
          return timer;

     }

     /**
      * The id for a newly initialized timer
      */
     public TIMER_INTERVAL_ID: number = -1;

     /**
      * How many frames per second to be rendered per set interval
      */
     public fps: number;

     /**
      * Represents what state the timer is currently in
      */
     public state: TimerState;

     /**
      * The current elapsed time for the timer instance (in milliseconds)
      */
     public elapsed: number;

     /**
      * An optional start position within the duration (in milliseconds)
      * 
      * @private
      */
     private _startTime: number;

     /**
      * The previously record time stamp
      * 
      * @private
      */
     private _previousTime: number;

     /**
      * The cycle mode behaviour for the timer
      * 
      * @private
      */
     private _mode: string;

     /**
      * Represents a setInterval based wrapper and manager
      * 
      * @param {Number} duration How long this timer is setup for (in milliseconds)
      * @param {Number} startTime An optional start position within the duration (in milliseconds)
      */
     constructor(duration: number, fps: number = 60, startTime: number = 0) {

          // construct the event emitter
          super();

          if (!utils.isNumber(duration)) {

               duration = 1;

          }

          if (!utils.isNumber(startTime) || startTime > duration) {

               startTime = 0;

          }

          this._startTime = startTime;
          this._duration = duration;
          this.fps = fps;
          this.state = TimerState.STOPPED;
          this.elapsed = 0;
          this._previousTime = 0;
          this._mode = "once";

     }

     /**
      * Gets the current state for this timer in a readable string format
      * 
      * @returns {String}
      */
     public get status(): string {

          return this.state.toString();

     }

     /**
      * How long this timer is setup for (in milliseconds)
      */
     private _duration: number = 0;
     public get duration(): number {

          return this._duration;

     }

     /**
      * Runs the timer only once with an optional start time
      */
     start(): void;

     /**
      * Runs the timer only once with an optional start time
      * 
      * @param {String} mode 
      * @param {Number} startTime
      */
     start(mode: "once"): void;

     /**
      * Runs the timer in an infinite loop and would have to be manually stopped by calling 'stop' on the timer instance
      * 
      * @param {String} mode 
      * @param {Number} startTime
      */
     start(mode: "loop"): void;

     /**
      * Starts the timer with the default mode to run only once
      */
     start(): void {

          const _this = this;

          if (this.state === TimerState.RUNNING) {

               clearInterval(this.TIMER_INTERVAL_ID);

          }

          let startTime = this._startTime;
          if (!utils.isNumber(startTime) || startTime > this.duration) {

               startTime = 0;

          }

          this._startTime = startTime;
          this.elapsed = 0;

          const mode = String(arguments[0]).toLowerCase();
          this._mode = (mode === "once" || mode === "loop") ? mode : _this._mode || "once";
          this.TIMER_INTERVAL_ID = setInterval(function () { Timer._tick(_this); }, Timer.UPDATE_INTERVAL / this.fps, false);
          this.state = TimerState.RUNNING;

     }

     pause() {

          this.state = TimerState.PAUSED;
          clearInterval(this.TIMER_INTERVAL_ID);

     }

     stop() {

          this.state = TimerState.STOPPED;
          clearInterval(this.TIMER_INTERVAL_ID);
          this.elapsed = this.duration;

     }

     reset() {

          this.stop();
          this.start();

     }

     private static _tick(context: Timer) {

          const _this = context;
          _this.elapsed += Math.ceil(Timer.UPDATE_INTERVAL / _this.fps);

          if (_this.elapsed >= _this.duration) {

               // TODO:: Add a schedule class to manager timer processes
               _this._mode.toLowerCase() === "loop" ? _this.reset() : _this.stop();

          }

     }

}
