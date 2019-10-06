import { TimerState } from "./timerState";
import { ITimer } from "./ITimer";
import { EventEmitter } from "./EventEmitter";
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
     * How many frames per second to be rendered per set interval
     */
    fps: number;
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
    readonly status: string;
    /**
     * How long this timer is setup for (in milliseconds)
     */
    private _duration;
    readonly duration: number;
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
    pause(): void;
    stop(): void;
    reset(): void;
    private static _tick;
}
