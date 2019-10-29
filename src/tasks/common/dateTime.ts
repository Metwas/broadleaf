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

import { IFormattable } from "../../core/IFormattable";
import { IComparable } from "../../core/comparers";
import { IDisposable } from "../../core/IDisposable";

/**
 * Represents the months within a year
 * 
 * @public
 */
export const MONTHS: Array<string> = [

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
export const DAYS: Array<string> = [

     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday"

];

/**
 * Defines the base functionality used within the date system
 */
interface IDateTime {

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

     getMonth(): IDateNamedEntry;
     getYear(): number;
     getDay(): IDateNamedEntry;
     getHour(): number;
     getSeconds(): number;
     getMilliseconds(): number;

     diff(date: DateTime | Date): number;
     isLeapYear(): boolean;
     toString(format: string): string;

}

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
export class DateTime implements IDateTime, IFormattable<DateTime>, IComparable<DateTime> {

     /**
      * Formats a value of type DateTime to a string
      * 
      * @param {DateTime} value 
      * @param {String} format A format to display the current date to
      * @returns {String} 
      */
     public format(value: DateTime, format: string = ""): string {

          return "";

     }

     /**
      * Compares two arguments of type DateTime, returning an number defining the order
      * 
      * @param {DateTime} x0 
      * @param {DateTime} x1 
      * @returns {Number} Either -1 if x1 is greater than x0, 0 if both are equal or 1 if x0 is greater than x1
      */
     public compare(x0: DateTime, x1: DateTime): number {

          return 0;

     }

}