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

const {  math } = require("../../lib/broadleaf");
const { test, printService } = require("../helpers/helper");
const { log, header } = printService;

//===================== End imports =====================//



// testing initialization
log(header("#### Math Testing ####"));

console.log(`LCG test`);
const lcg = new math.LCG()
setInterval(function(){ console.log(Math.round(lcg.nextRange(4,8)))}, 1000);
let max_nibble = math.MAX_NIBBLE;
const max_byte = math.MAX_BYTE;
const max_16bit = math.MAX_16BIT;
const max_24bit = math.MAX_24BIT;
const max_unsigned_32bit = math.MAX_UNSIGNED_32BIT;
log("max nibble size: " + max_nibble);
log("max byte size: " + max_byte);
log("max 16 bit size: " + max_16bit);
log("max 24 bit size: " + max_24bit);
log("max 32 bit size: " + max_unsigned_32bit);

// Constants test
test("nibble is a 4-bit number", (max_nibble >> 4) === 0, "nibble is a 4-bit number");
test("byte is a 8-bit number", (max_byte >> 8) === 0);
log(new math.Vector2(5,2).multiplyScaler(2).x);

