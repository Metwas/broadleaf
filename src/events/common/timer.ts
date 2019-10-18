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
import { EventEmitter } from "./EventEmitter";
import { IListener } from "./IListener";

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
     public static start(duration: number, mode?: "once", startTime?: number): Timer;

     /**
      * Statically creates and starts up a timer
      * 
      * @param {Number} duration How long this timer is setup for (in milliseconds)
      * @param {String} mode Sets the timer to run in an infinite loop
      * @param {Number} startTime An optional start position within the duration (in milliseconds)
      */
     public static start(duration: number, mode?: "loop", startTime?: number): Timer;

     /**
      * Statically creates and starts up a timer
      * 
      * @param {Number} duration How long this timer is setup for (in milliseconds)
      * @param {String} mode The specified operation procedure for the timer, either 'once' or 'loop'
      * @param {Number} startTime An optional start position within the duration (in milliseconds)
      */
     public static start(duration: number, mode: any = "once", startTime?: number): Timer {

          const timer = new Timer(duration, 60, startTime);
          timer.start(mode);
          return timer;

     }

     /**
      * The id for a newly initialized timer
      */
     public TIMER_INTERVAL_ID: number = -1;

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
     public constructor(duration: number, fps: number = 60, startTime: number = 0) {

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

          return TimerState[this.state];

     }

     /**
     * Gets the current frames-per-second value
     * 
     * @returns {Number}
     */
     private _fps: number = 60;
     public get fps(): number {

          return this._fps;

     }

     /**
     * Sets the current frames-per-second value, ensuring it falls within the defined UPDATE_INTERVAL
     * 
     * @param {Number} value
     */
     public set fps(value) {

          if(value > 0 && value < Timer.UPDATE_INTERVAL){

               this._fps = value;

          }
     
     }

     /**
      * How long this timer is setup for (in milliseconds)
      * 
      * @returns {Number}
      */
     private _duration: number = 0;
     public get duration(): number {

          return this._duration;

     }

     /**
      * Registers the onstart event, which will get executed on the very first tick cycle
      * 
      * @param {String} event 
      * @param {IListener} listener 
      */
     public on(event: "start", listener: IListener<any>): void;

     /**
      * Registers the ontick event, which will get executed each frame update
      * 
      * @param {String} event 
      * @param {IListener} listener 
      */
     public on(event: "tick", listener: IListener<any>): void;

     /**
      * Registers the oncomplete event, which will get executed as soon as the timer as fully elapsed
      * 
      * @param {String} event 
      * @param {IListener} listener 
      */
     public on(event: "complete", listener: IListener<any>): void;

     /**
     * Registers the onpause event, which will get executed as soon as the timer as paused
     * 
     * @param {String} event 
     * @param {IListener} listener 
     */
     public on(event: "pause", listener: IListener<any>): void;

     /**
      * Registers the event to the base EventEmitter class
      * 
      * @param {String} event 
      * @param {IListener} listener 
      */
     public on(event: "complete" | "tick" | "pause" | "start", listener: IListener<any>): void {

          super.on(event, listener);

     }

     /**
      * Registers the onstart event only once, which will get executed on the very first tick cycle
      * 
      * @param {String} event 
      * @param {IListener} listener 
     */
     public once(event: "start", listener: IListener<any>): void;

     /**
      * Registers the ontick event only once, which will get executed each frame update
      * 
      * @param {String} event 
      * @param {IListener} listener 
     */
     public once(event: "tick", listener: IListener<any>): void;

     /**
      * Registers the oncomplete event only once, which will get executed as soon as the timer as fully elapsed
      * 
      * @param {String} event 
      * @param {IListener} listener 
      */
     public once(event: "complete", listener: IListener<any>): void;

     /**
     * Registers the onpause event only once, which will get executed as soon as the timer as paused
     * 
     * @param {String} event 
     * @param {IListener} listener 
     */
     public once(event: "pause", listener: IListener<any>): void;

     /**
      * Registers the event to the base EventEmitter once store
      * 
      * @param {String} event 
      * @param {IListener} listener 
      */
     public once(event: "complete" | "tick" | "pause" | "start", listener: IListener<any>): void {

          super.once(event, listener);

     }

     /**
      * Runs the timer only once with an optional start time
      */
     public start(): void;

     /**
      * Runs the timer only once with an optional start time
      * 
      * @param {String} mode 
      * @param {Number} startTime
      */
     public start(mode: "once"): void;

     /**
      * Runs the timer in an infinite loop and would have to be manually stopped by calling 'stop' on the timer instance
      * 
      * @param {String} mode 
      * @param {Number} startTime
      */
     public start(mode: "loop"): void;

     /**
      * Starts the timer with the default mode to run only once
      */
     public start(): void {

          const _this = this;

          if (this.state === TimerState.RUNNING) {

               clearInterval(this.TIMER_INTERVAL_ID);

          }

          let startTime = this._startTime;
          if (!utils.isNumber(startTime) || startTime > this.duration) {

               startTime = 0;

          }

          this._startTime = this.elapsed = startTime;
          const mode = String(arguments[0]).toLowerCase();
          this._mode = (mode === "once" || mode === "loop") ? mode : _this._mode || "once";
          this.TIMER_INTERVAL_ID = setInterval(function () { Timer._tick(_this); }, Timer.UPDATE_INTERVAL / this.fps, false);
          this.state = TimerState.RUNNING;
          this.emit("start");

     }

     /**
      * Pauses the current timer instance
      */
     public pause() {

          this.state = TimerState.PAUSED;
          clearInterval(this.TIMER_INTERVAL_ID);
          this.emit("pause");

     }

     /**
      * Stops the timer, setting the elapsed property to the duration value
      */
     public stop() {

          this.state = TimerState.STOPPED;
          clearInterval(this.TIMER_INTERVAL_ID);
          this.elapsed = this.duration;

          // [As for version: 1.5.12] emit one more tick to completely ensure the elapsed duration is returned
          this.emit("tick", this.elapsed);
          this.emit("complete", this.elapsed);

     }

     /**
      * Operates a full reset for the timer
      */
     public reset() {

          this.stop();
          this.start();

     }

     /**
      * This function gets called per frame tick
      * 
      * @param {Timer} context 
      */
     private static _tick(context: Timer) {

          const _this = context;
          _this.elapsed += Math.ceil(Timer.UPDATE_INTERVAL / _this.fps);

          if (_this.elapsed >= _this.duration) {

               // TODO:: Add a schedule class to manager timer processes
               _this._mode.toLowerCase() === "loop" ? _this.reset() : _this.stop();

          } else {

               _this.emit("tick", _this.elapsed);

          }

     }

}
