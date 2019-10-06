import { TimerState } from "./timerState";
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
