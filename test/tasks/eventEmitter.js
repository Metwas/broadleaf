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

const { EventEmitter, utils } = require("../../lib/broadleaf");
const { printService } = require("../helpers/helper");
const { log } = printService;

//===================== End imports =====================//

log("Event Emitter initialization...");
var emitter = new EventEmitter();
emitter.on("message", (ev) => { console.log("Good " + ev) });
emitter.once("message2", (ev) => { console.log("hello " + ev) });
emitter.once("message4", (args) => { console.log("hello " + utils.isArray(args)) });
log("### Emitter Table ###" + "\n" + emitter);
emitter.emit("message","day");
emitter.emit("message2",["s","s"]);


log("Test off method");
emitter.off("message");
log("### Emitter Table ###" + "\n" + emitter);
log("\nDispose test...");
emitter.dispose();
log("### Emitter Table - After Dispose() ###" + "\n" + emitter);
