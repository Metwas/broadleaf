/**
 * Creates an awaitable timeout for a defined number of milliseconds
 *
 * @param {Number} delay A delay to sleep (in milliseconds)
 */
export declare function sleep(delay: number): Promise<any>;
/**
 * Model type for an @see interval system management
 */
declare type intervalMS = {
    clear: () => void;
    delay: (value: number) => void;
    times: (value: number) => void;
};
/**
 * A safer alternative to the @see global.setInterval
 *
 * @param {Function} callback
 * @param {Number} delay
 * @param {Number} times
 */
export declare function interval(callback: any, delay: number, times: number): intervalMS;
export {};
