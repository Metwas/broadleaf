/**
 * Represents the months within a year
 *
 * @public
 */
export declare const MONTHS: Array<string>;
/**
 * Represents the days of the week
 *
 * @public
 */
export declare const DAYS: Array<string>;
/**
 * A helper class for defined and managing javascript date objects
 */
export declare class DateTime {
    /**
     * Formats a value of type DateTime to a string
     *
     * @param {DateTime} value
     * @param {String} format A format to display the current date to
     * @returns {String}
     */
    format(value: DateTime, format?: string): string;
    /**
     * Compares two arguments of type DateTime, returning an number defining the order
     *
     * @param {DateTime} x0
     * @param {DateTime} x1
     * @returns {Number} Either -1 if x1 is greater than x0, 0 if both are equal or 1 if x0 is greater than x1
     */
    compare(x0: DateTime, x1: DateTime): number;
}
