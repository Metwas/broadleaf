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
