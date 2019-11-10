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

     /**
      * Gets current month on the DateTime instance
      * 
      * @returns {IDateNamedEntry}
      */
     getMonth(): IDateNamedEntry;

     /**
      * Gets current year on the DateTime instance
      * 
      * @returns {IDateNamedEntry}
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

     private year: number;
     private month: IDateNamedEntry;
     private day: IDateNamedEntry;
     private hour: number;
     private minute: number;
     private second: number;
     private millisecond: number;
     /**
      * Constructs a new instance of DateTime from the provided date parameter as a Date object or string
      * 
      * @param {Date | String} date 
      */
     constructor(date: Date | String) {

          this.year = 0;
          this.month = { code: 0, name: "mon" };
          this.day = { code: 0, name: "mon" };
          this.hour = 0;
          this.minute = 0;
          this.second = 0
          this.millisecond = 0;

     }

     /**
      * Gets current locale for the DateTime instance
      */
     private _locale: string = "en";
     public get locale(): string {

          return this._locale;

     }

     public set locale(value: string) {

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
     add(date: DateTime | Date): DateTime {

          return this;

     }

     /**
      * Adds a given number of years from the current DateTime instance
      * 
      * @param {Number} years 
      * @returns {DateTime}
      */
     addYears(years: number): DateTime {

          return this;

     }

     /**
      * Adds a given number of months from the current DateTime instance
      * 
      * @param {Number} months 
      * @returns {DateTime}
      */
     addMonths(months: number): DateTime {

          return this;

     }

     /**
      * Adds a given number of days from the current DateTime instance
      * 
      * @param {Number} days 
      * @returns {DateTime}
      */
     addDays(days: number): DateTime {

          return this;

     }

     /**
      * Adds a given number of hours from the current DateTime instance
      * 
      * @param {Number} hours 
      * @returns {DateTime}
      */
     addHours(hours: number): DateTime {

          return this;

     }

     /**
      * Adds a given number of seconds from the current DateTime instance
      * 
      * @param {Number} seconds 
      * @returns {DateTime}
      */
     addSeconds(seconds: number): DateTime {

          return this;

     }

     /**
      * Adds a given number of milliseconds from the current DateTime instance
      * 
      * @param {Number} milliseconds
      * @returns {DateTime}
      */
     addMilliseconds(milliseconds: number): DateTime {

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
     sub(date: DateTime | Date): DateTime {

          return this;

     }

     /**
      * Substracts a given number of years from the current DateTime instance
      * 
      * @param {Number} years 
      * @returns {DateTime}
      */
     subYears(years: number): DateTime {

          return this;

     }

     /**
      * Substracts a given number of months from the current DateTime instance
      * 
      * @param {Number} months 
      * @returns {DateTime}
      */
     subMonths(months: number): DateTime {

          return this;

     }

     /**
      * Substracts a given number of days from the current DateTime instance
      * 
      * @param {Number} days 
      * @returns {DateTime}
      */
     subDays(days: number): DateTime {

          return this;

     }

     /**
      * Substracts a given number of hours from the current DateTime instance
      * 
      * @param {Number} hours 
      * @returns {DateTime}
      */
     subHours(hours: number): DateTime {

          return this;

     }

     /**
      * Substracts a given number of seconds from the current DateTime instance
      * 
      * @param {Number} seconds 
      * @returns {DateTime}
      */
     subSeconds(seconds: number): DateTime {

          return this;

     }

     /**
      * Substracts a given number of milliseconds from the current DateTime instance
      * 
      * @param {Number} milliseconds 
      * @returns {DateTime}
      */
     subMilliseconds(milliseconds: number): DateTime {

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
     set(date: DateTime | Date | string): DateTime {

          return this;

     }

     /**
      * Sets the year on the current DateTime instance
      * 
      * @param {Number} year
      * @returns {DateTime}
      */
     setYear(year: number): DateTime {

          return this;

     }

     /**
      * Sets the month on the current DateTime instance
      * 
      * @param {Number} month
      * @returns {DateTime}
      */
     setMonth(month: number): DateTime {

          return this;

     }

     /**
      * Sets the day on the current DateTime instance
      * 
      * @param {Number} day
      * @returns {DateTime}
      */
     setDay(day: number): DateTime {

          return this;

     }

     /**
      * Sets the hour on the current DateTime instance
      * 
      * @param {Number} hour
      * @returns {DateTime}
      */
     setHour(hour: number): DateTime {

          return this;

     }

     /**
      * Sets the second on the current DateTime instance
      * 
      * @param {Number} second
      * @returns {DateTime}
      */
     setSecond(second: number): DateTime {

          return this;

     }

     /**
      * Sets the milliseconds on the current DateTime instance
      * 
      * @param {Number} millisecond
      * @returns {DateTime}
      */
     setMillisecond(millisecond: number): DateTime {

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
     getMonth(): IDateNamedEntry {

          return { code: 0, name: "mon" };

     }

     /**
      * Gets current year on the DateTime instance
      * 
      * @returns {Number}
      */
     getYear(): number {

          return 0;

     }

     /**
      * Gets the current day on the DateTime instance
      * 
      * @returns {IDateNamedEntry}
      */
     getDay(): IDateNamedEntry {

          return { code: 0, name: "mon" };

     }

     /**
      * Gets current hour on the DateTime instance
      * 
      * @returns {Number}
      */
     getHour(): number {

          return 0;

     }

     /**
      * Gets current seconds value on the DateTime instance
      * 
      * @returns {Number}
      */
     getSeconds(): number {

          return 0;

     }

     /**
      * Gets the current milliseconds value on the DateTime instance
      * 
      * @returns {Number}
      */
     getMilliseconds(): number {

          return 0;

     }

     /**
      * Calculates the difference between two DateTime objects and returns as a DateTime
      * 
      * @param {DateTime | Date} date
      * @returns {Number}
      */
     diff(date: DateTime | Date): DateTime {

          return this;

     }

     /**
      * Checks if either the provided date or current instance of DateTime is a leap year
      * 
      * @param {DateTime | Date} date [Optional]
      * @returns {Boolean}
      */
     isLeapYear(date?: DateTime | Date): boolean {

          return true;

     }

     /**
      * Converts the current DateTime instance to a string format
      * 
      * @param {String} format [Optional]
      * @returns {String}
      */
     toString(format?: string): string {

          return String(this);

     }

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