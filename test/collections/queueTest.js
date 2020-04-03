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

const { collections } = require("../../lib/broadleaf");
const { table, test, printService } = require("../helpers/helper");
const chalk = require("chalk");
const { log, header } = printService;

//===================== End imports =====================//

// testing initialization
log(header("#### Collections Testing ####"));
log("Queue");
const queueMax = 10;
const queue = new collections.Queue(queueMax);
console.log("Adding entry to queue...");
queue.append("hellow");
test("Queue count is 1", queue.Count === 1, "queue count");
console.log("Removing first entry from queue...");
let entry = queue.next();
test("Queue is empty", queue.Count === 0, "queue count");
console.log("Filling queue to max...");
// add one more than max to see if queue stays in range
for(let i = 0; i < queueMax + 1;i++){
     queue.append(`test${i}`);
}
test("Queue stays at max", queue.Count === queueMax, "Queue max");