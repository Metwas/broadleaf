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

//===================== imports =====================//

const { Timer, utils } = require("../../lib/broadleaf");
const { test } = require("../helpers/helper");
const { sleep } = require("../../lib/tasks/helpers");

//===================== End imports =====================//

test("timer is not null or undefined", !utils.isNullOrUndefined(Timer));

const duration = 5000; // Total duration for the timer to take to complete
const fps = 999; // The resolution OR frame per second
const startTime = 0; // A specified head start for the timer

var timer = new Timer(duration, fps, startTime);
console.log("STATUS: " + timer.status);
const now = formatDateNow();
timer.on("complete", (elapsed) => { console.log("\ntimer started: " + now + "\ntimer completed at: " + formatDateNow()); });
timer.on("start", () => { console.log("timer started at: " + now); });
timer.on("tick", (elapsed) => { console.log("timer tick: " + elapsed); });
timer.start();

async function sleeps(){

     await sleep(5000);
     console.log("Sleep over");

}

sleeps();

/**
 * Returns the current date in a time format string
 * 
 * @returns {String}
 */
function formatDateNow() {

     const now = new Date();
     return `${String("0" + now.getHours()).slice(-2)}:${String("0" + now.getMinutes()).slice(-2)}:${String("0" + now.getSeconds()).slice(-2)}`;

}
