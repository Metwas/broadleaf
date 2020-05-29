/*
     MIT License

     Copyright (c) 2020 Metwas

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

import * as utils from "../utils/utils";

/**
 * Creates an awaitable timeout for a defined number of milliseconds
 * 
 * @param {Number} delay A delay to sleep (in milliseconds)
 */
export async function sleep(delay: number): Promise<any> {

     const promise = new Promise((resolve, _) => {

          if (!utils.isNumber(delay)) { delay = 1; }
          setTimeout(resolve, delay);

     });

     return promise;

};

/**
 * Model type for an @see interval system management
 */
type intervalMS = { clear: () => void, delay: (value: number) => void, times: (value: number) => void };

/**
 * A safer alternative to the @see global.setInterval
 * 
 * @param {Function} callback
 * @param {Number} delay 
 * @param {Number} times
 */
export function interval(callback: any, delay: number, times: number): intervalMS {

     const INT_FUNC: any = function () {

          return function () {

               // validate execution times
               if ((times === void 0 || times === null) || typeof times === "number" && times-- > 0) {

                    // invoke function
                    try { callback.call(null); }
                    // handle errors
                    catch (error) {

                         // update times to zero, breaking the timeout
                         times = 0;
                         // throw error to caller
                         throw error;

                    }

                    // re-initialize after a set timeout
                    setTimeout(INT_FUNC, delay);

               }

          };

     }();
     
     // This will be the initial kickstart
     setTimeout(INT_FUNC, delay);
     // return management system object to control the times and delay during runtime
     return { 

          /**
           * Sets the times to 0, clearing the interval
           */
          clear: function(){ times = 0; },

          /**
           * Updates the delay paramater
           * 
           * @param {Number} value
           */
          delay: function(value: number){ (utils.isNumber(value) && value > 0) && (delay = value); },

          /**
           * Updates the times parameter
           * 
           * @param {Number} value
           */
          times: function(value){ (utils.isNumber(value) && value > 0) && (times = value);  }

     };

};