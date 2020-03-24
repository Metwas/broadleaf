import { TimerState } from "./timerState";
import { EventEmitter } from "./eventEmitter";
import { IListener } from "./IListener";
/**
 * Represents a setInterval based wrapper and manager
 */
export declare class Timer extends EventEmitter<any> implements ITimer {
    /**
     * A static reference for a timer update sequence
     */
    static readonly UPDATE_INTERVAL: number;
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
     * The id for a newly initialized timer
     */
    TIMER_INTERVAL_ID: number;
    /**
     * Represents what state the timer is currently in
     */
    state: TimerState;
    /**
     * The current elapsed time for the timer instance (in milliseconds)
     */
    elapsed: number;
    /**
     * An optional start position within the duration (in milliseconds)
     *
     * @private
     */
    private _startTime;
    /**
     * The previously record time stamp
     *
     * @private
     */
    private _previousTime;
    /**
     * The cycle mode behaviour for the timer
     *
     * @private
     */
    private _mode;
    /**
     * Represents a setInterval based wrapper and manager
     *
     * @param {Number} duration How long this timer is setup for (in milliseconds)
     * @param {Number} startTime An optional start position within the duration (in milliseconds)
     */
    constructor(duration: number, fps?: number, startTime?: number);
    /**
     * Gets the current state for this timer in a readable string format
     *
     * @returns {String}
     */
    get status(): string;
    /**
    * Gets the current frames-per-second value
    *
    * @returns {Number}
    */
    private _fps;
    get fps(): number;
    /**
    * Sets the current frames-per-second value, ensuring it falls within the defined UPDATE_INTERVAL
    *
    * @param {Number} value
    */
    set fps(value: number);
    /**
     * How long this timer is setup for (in milliseconds)
     *
     * @returns {Number}
     */
    private _duration;
    get duration(): number;
    /**
     * Registers the onstart event, which will get executed on the very first tick cycle
     *
     * @param {String} event
     * @param {IListener} listener
     */
    on(event: "start", listener: IListener<any>): void;
    /**
     * Registers the ontick event, which will get executed each frame update
     *
     * @param {String} event
     * @param {IListener} listener
     */
    on(event: "tick", listener: IListener<any>): void;
    /**
     * Registers the oncomplete event, which will get executed as soon as the timer as fully elapsed
     *
     * @param {String} event
     * @param {IListener} listener
     */
    on(event: "complete", listener: IListener<any>): void;
    /**
    * Registers the onpause event, which will get executed as soon as the timer as paused
    *
    * @param {String} event
    * @param {IListener} listener
    */
    on(event: "pause", listener: IListener<any>): void;
    /**
     * Registers the onstart event only once, which will get executed on the very first tick cycle
     *
     * @param {String} event
     * @param {IListener} listener
    */
    once(event: "start", listener: IListener<any>): void;
    /**
     * Registers the ontick event only once, which will get executed each frame update
     *
     * @param {String} event
     * @param {IListener} listener
    */
    once(event: "tick", listener: IListener<any>): void;
    /**
     * Registers the oncomplete event only once, which will get executed as soon as the timer as fully elapsed
     *
     * @param {String} event
     * @param {IListener} listener
     */
    once(event: "complete", listener: IListener<any>): void;
    /**
    * Registers the onpause event only once, which will get executed as soon as the timer as paused
    *
    * @param {String} event
    * @param {IListener} listener
    */
    once(event: "pause", listener: IListener<any>): void;
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
     * Pauses the current timer instance
     */
    pause(): void;
    /**
     * Stops the timer, setting the elapsed property to the duration value
     */
    stop(): void;
    /**
     * Operates a full reset for the timer
     */
    reset(): void;
    /**
     * This function gets called per frame tick
     *
     * @param {Timer} context
     */
    private static _tick;
}
/**
 * Base template for a setInterval wrapper and manager
 */
export interface ITimer {
    /**
     * How long this timer is setup for (in milliseconds)
     */
    duration: number;
    /**
     * How many frames per second to be rendered per set interval
     */
    fps: number;
    /**
     * Represents what state the timer is currently in
     */
    state: TimerState;
    /**
     * The current time for the timer instance (in milliseconds)
     */
    elapsed: number;
}
