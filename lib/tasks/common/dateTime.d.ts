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
 * Defines an readable date entry, such as day and month
 */
interface IDateNamedEntry {
    /**
     * The code index for this entry
     */
    code: number;
    /**
     * The readable name for this entry
     */
    name: string;
    /**
     * Returns the property name for this entry
     */
    toString(): string;
}
/**
 * A helper class for defined and managing javascript date objects
 */
export declare class DateTime {
    private year;
    private month;
    private day;
    private hour;
    private minute;
    private second;
    private millisecond;
    /**
     * Constructs a new instance of DateTime from the provided date parameter as a Date object or string
     *
     * @param {Date | String} date
     */
    constructor(date: Date | String);
    /**
     * Gets current locale for the DateTime instance
     */
    private _locale;
    get locale(): string;
    set locale(value: string);
    /**
     * Region Date Additions
     * @public
     */
    /**
     * Adds a given DateTime or javascript date object from the current DateTime instance
     *
     * @param {DateTime | Date} date
     * @returns {DateTime}
     */
    add(date: DateTime | Date): DateTime;
    /**
     * Adds a given number of years from the current DateTime instance
     *
     * @param {Number} years
     * @returns {DateTime}
     */
    addYears(years: number): DateTime;
    /**
     * Adds a given number of months from the current DateTime instance
     *
     * @param {Number} months
     * @returns {DateTime}
     */
    addMonths(months: number): DateTime;
    /**
     * Adds a given number of days from the current DateTime instance
     *
     * @param {Number} days
     * @returns {DateTime}
     */
    addDays(days: number): DateTime;
    /**
     * Adds a given number of hours from the current DateTime instance
     *
     * @param {Number} hours
     * @returns {DateTime}
     */
    addHours(hours: number): DateTime;
    /**
     * Adds a given number of seconds from the current DateTime instance
     *
     * @param {Number} seconds
     * @returns {DateTime}
     */
    addSeconds(seconds: number): DateTime;
    /**
     * Adds a given number of milliseconds from the current DateTime instance
     *
     * @param {Number} milliseconds
     * @returns {DateTime}
     */
    addMilliseconds(milliseconds: number): DateTime;
    /**
     * Region Date Subtractions
     * @public
     */
    /**
     * Substracts a given DateTime or javascript date object from the current DateTime instance
     *
     * @param {DateTime | Date} date
     * @returns {DateTime}
     */
    sub(date: DateTime | Date): DateTime;
    /**
     * Substracts a given number of years from the current DateTime instance
     *
     * @param {Number} years
     * @returns {DateTime}
     */
    subYears(years: number): DateTime;
    /**
     * Substracts a given number of months from the current DateTime instance
     *
     * @param {Number} months
     * @returns {DateTime}
     */
    subMonths(months: number): DateTime;
    /**
     * Substracts a given number of days from the current DateTime instance
     *
     * @param {Number} days
     * @returns {DateTime}
     */
    subDays(days: number): DateTime;
    /**
     * Substracts a given number of hours from the current DateTime instance
     *
     * @param {Number} hours
     * @returns {DateTime}
     */
    subHours(hours: number): DateTime;
    /**
     * Substracts a given number of seconds from the current DateTime instance
     *
     * @param {Number} seconds
     * @returns {DateTime}
     */
    subSeconds(seconds: number): DateTime;
    /**
     * Substracts a given number of milliseconds from the current DateTime instance
     *
     * @param {Number} milliseconds
     * @returns {DateTime}
     */
    subMilliseconds(milliseconds: number): DateTime;
    /**
     * Region Date Setters
     * @public
     */
    /**
     * Sets the current date instance to a new DateTime, javascript date object or a DateTime string format
     *
     * @param {DateTime | Date | String} date
     * @returns {DateTime}
     */
    set(date: DateTime | Date | string): DateTime;
    /**
     * Sets the year on the current DateTime instance
     *
     * @param {Number} year
     * @returns {DateTime}
     */
    setYear(year: number): DateTime;
    /**
     * Sets the month on the current DateTime instance
     *
     * @param {Number} month
     * @returns {DateTime}
     */
    setMonth(month: number): DateTime;
    /**
     * Sets the day on the current DateTime instance
     *
     * @param {Number} day
     * @returns {DateTime}
     */
    setDay(day: number): DateTime;
    /**
     * Sets the hour on the current DateTime instance
     *
     * @param {Number} hour
     * @returns {DateTime}
     */
    setHour(hour: number): DateTime;
    /**
     * Sets the second on the current DateTime instance
     *
     * @param {Number} second
     * @returns {DateTime}
     */
    setSecond(second: number): DateTime;
    /**
     * Sets the milliseconds on the current DateTime instance
     *
     * @param {Number} millisecond
     * @returns {DateTime}
     */
    setMillisecond(millisecond: number): DateTime;
    /**
     * Region Date Getters
     * @public
     */
    /**
     * Gets current month on the DateTime instance
     *
     * @returns {IDateNamedEntry}
     */
    getMonth(): IDateNamedEntry;
    /**
     * Gets current year on the DateTime instance
     *
     * @returns {Number}
     */
    getYear(): number;
    /**
     * Gets the current day on the DateTime instance
     *
     * @returns {IDateNamedEntry}
     */
    getDay(): IDateNamedEntry;
    /**
     * Gets current hour on the DateTime instance
     *
     * @returns {Number}
     */
    getHour(): number;
    /**
     * Gets current seconds value on the DateTime instance
     *
     * @returns {Number}
     */
    getSeconds(): number;
    /**
     * Gets the current milliseconds value on the DateTime instance
     *
     * @returns {Number}
     */
    getMilliseconds(): number;
    /**
     * Calculates the difference between two DateTime objects and returns as a DateTime
     *
     * @param {DateTime | Date} date
     * @returns {Number}
     */
    diff(date: DateTime | Date): DateTime;
    /**
     * Checks if either the provided date or current instance of DateTime is a leap year
     *
     * @param {DateTime | Date} date [Optional]
     * @returns {Boolean}
     */
    isLeapYear(date?: DateTime | Date): boolean;
    /**
     * Converts the current DateTime instance to a string format
     *
     * @param {String} format [Optional]
     * @returns {String}
     */
    toString(format?: string): string;
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
export {};
