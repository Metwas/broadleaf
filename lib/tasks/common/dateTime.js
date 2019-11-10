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
/**
 * Represents the months within a year
 *
 * @public
 */
exports.MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
/**
 * Represents the days of the week
 *
 * @public
 */
exports.DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
/**
 * A helper class for defined and managing javascript date objects
 */
class DateTime {
    /**
     * Constructs a new instance of DateTime from the provided date parameter as a Date object or string
     *
     * @param {Date | String} date
     */
    constructor(date) {
        /**
         * Gets current locale for the DateTime instance
         */
        this._locale = "en";
        this.year = 0;
        this.month = { code: 0, name: "mon" };
        this.day = { code: 0, name: "mon" };
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
    }
    get locale() {
        return this._locale;
    }
    set locale(value) {
        this._locale = value;
    }
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
    add(date) {
        return this;
    }
    /**
     * Adds a given number of years from the current DateTime instance
     *
     * @param {Number} years
     * @returns {DateTime}
     */
    addYears(years) {
        return this;
    }
    /**
     * Adds a given number of months from the current DateTime instance
     *
     * @param {Number} months
     * @returns {DateTime}
     */
    addMonths(months) {
        return this;
    }
    /**
     * Adds a given number of days from the current DateTime instance
     *
     * @param {Number} days
     * @returns {DateTime}
     */
    addDays(days) {
        return this;
    }
    /**
     * Adds a given number of hours from the current DateTime instance
     *
     * @param {Number} hours
     * @returns {DateTime}
     */
    addHours(hours) {
        return this;
    }
    /**
     * Adds a given number of seconds from the current DateTime instance
     *
     * @param {Number} seconds
     * @returns {DateTime}
     */
    addSeconds(seconds) {
        return this;
    }
    /**
     * Adds a given number of milliseconds from the current DateTime instance
     *
     * @param {Number} milliseconds
     * @returns {DateTime}
     */
    addMilliseconds(milliseconds) {
        return this;
    }
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
    sub(date) {
        return this;
    }
    /**
     * Substracts a given number of years from the current DateTime instance
     *
     * @param {Number} years
     * @returns {DateTime}
     */
    subYears(years) {
        return this;
    }
    /**
     * Substracts a given number of months from the current DateTime instance
     *
     * @param {Number} months
     * @returns {DateTime}
     */
    subMonths(months) {
        return this;
    }
    /**
     * Substracts a given number of days from the current DateTime instance
     *
     * @param {Number} days
     * @returns {DateTime}
     */
    subDays(days) {
        return this;
    }
    /**
     * Substracts a given number of hours from the current DateTime instance
     *
     * @param {Number} hours
     * @returns {DateTime}
     */
    subHours(hours) {
        return this;
    }
    /**
     * Substracts a given number of seconds from the current DateTime instance
     *
     * @param {Number} seconds
     * @returns {DateTime}
     */
    subSeconds(seconds) {
        return this;
    }
    /**
     * Substracts a given number of milliseconds from the current DateTime instance
     *
     * @param {Number} milliseconds
     * @returns {DateTime}
     */
    subMilliseconds(milliseconds) {
        return this;
    }
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
    set(date) {
        return this;
    }
    /**
     * Sets the year on the current DateTime instance
     *
     * @param {Number} year
     * @returns {DateTime}
     */
    setYear(year) {
        return this;
    }
    /**
     * Sets the month on the current DateTime instance
     *
     * @param {Number} month
     * @returns {DateTime}
     */
    setMonth(month) {
        return this;
    }
    /**
     * Sets the day on the current DateTime instance
     *
     * @param {Number} day
     * @returns {DateTime}
     */
    setDay(day) {
        return this;
    }
    /**
     * Sets the hour on the current DateTime instance
     *
     * @param {Number} hour
     * @returns {DateTime}
     */
    setHour(hour) {
        return this;
    }
    /**
     * Sets the second on the current DateTime instance
     *
     * @param {Number} second
     * @returns {DateTime}
     */
    setSecond(second) {
        return this;
    }
    /**
     * Sets the milliseconds on the current DateTime instance
     *
     * @param {Number} millisecond
     * @returns {DateTime}
     */
    setMillisecond(millisecond) {
        return this;
    }
    /**
     * Region Date Getters
     * @public
     */
    /**
     * Gets current month on the DateTime instance
     *
     * @returns {IDateNamedEntry}
     */
    getMonth() {
        return { code: 0, name: "mon" };
    }
    /**
     * Gets current year on the DateTime instance
     *
     * @returns {Number}
     */
    getYear() {
        return 0;
    }
    /**
     * Gets the current day on the DateTime instance
     *
     * @returns {IDateNamedEntry}
     */
    getDay() {
        return { code: 0, name: "mon" };
    }
    /**
     * Gets current hour on the DateTime instance
     *
     * @returns {Number}
     */
    getHour() {
        return 0;
    }
    /**
     * Gets current seconds value on the DateTime instance
     *
     * @returns {Number}
     */
    getSeconds() {
        return 0;
    }
    /**
     * Gets the current milliseconds value on the DateTime instance
     *
     * @returns {Number}
     */
    getMilliseconds() {
        return 0;
    }
    /**
     * Calculates the difference between two DateTime objects and returns as a DateTime
     *
     * @param {DateTime | Date} date
     * @returns {Number}
     */
    diff(date) {
        return this;
    }
    /**
     * Checks if either the provided date or current instance of DateTime is a leap year
     *
     * @param {DateTime | Date} date [Optional]
     * @returns {Boolean}
     */
    isLeapYear(date) {
        return true;
    }
    /**
     * Converts the current DateTime instance to a string format
     *
     * @param {String} format [Optional]
     * @returns {String}
     */
    toString(format) {
        return String(this);
    }
    /**
     * Formats a value of type DateTime to a string
     *
     * @param {DateTime} value
     * @param {String} format A format to display the current date to
     * @returns {String}
     */
    format(value, format = "") {
        return "";
    }
    /**
     * Compares two arguments of type DateTime, returning an number defining the order
     *
     * @param {DateTime} x0
     * @param {DateTime} x1
     * @returns {Number} Either -1 if x1 is greater than x0, 0 if both are equal or 1 if x0 is greater than x1
     */
    compare(x0, x1) {
        return 0;
    }
}
exports.DateTime = DateTime;
