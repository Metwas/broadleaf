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

const { utils, math } = require("../../lib/broadleaf");
const chalk = require("chalk");

//===================== End imports =====================//


// custom styles
const headerStyle = chalk.keyword("white").bold.bgYellow;
const passStyle = chalk.keyword("green").bold;
const failStyle = chalk.keyword("red").bold;
const testStyle = chalk.keyword("black").bold;

Object.defineProperty(exports, "__esModule", { value: true });

const printService = {

     log: function (message) {

          return console.log(message + "\n");
     
     },
     
     // prints a custom header message
     header: function (message) {

          return headerStyle(message);

     },

     // prints a custom header message
     subHeader: function (message) {

          return chalk.keyword("white").bold.bgBlue(message);

     },

     // prints a pass message
     pass: function () {

          return passStyle("pass");

     },

     // prints a fail message
     fail: function () {

          return failStyle("fail");

     }


};

exports.printService = printService;

// provide quick access
const log = printService.log;
const header = printService.header;
const pass = printService.pass;
const fail = printService.fail;
const subHeader = printService.subHeader;

exports.table = function (entry, tableName) {

     if (!utils.isString(tableName) || utils.isNullOrUndefined(tableName)) {

          tableName = String(utils.keys({ entry })[0]);

     }

     if (utils.isArray(entry)) {

          // build the table
          log(`Table for '${tableName}'`);
          const length = entry.length;
          let index = 0;
          for (; index < length; index++) {

               log(`${chalk.blue.bgBlack(index)}:\t${entry[index]}`);

          }

     }
     else {

          if (utils.isObject(entry)) {

               // build the table
               log(`Table for '${tableName}'`);
               // since its an object, obtain the keys
               const keys = utils.keys(entry);

               // loop through every key
               utils.forEach(entry, (element) => {

                    const key = element;
                    const value = entry[key];
                    log(`${chalk.blue.bgBlack(key)}:\t${value}`);

               });

          } else {

               const box = {};
               box["value"] = entry;
               table(box, tableName);

          }

     }

};

// define quick access functions
exports.log = function (message) {

     return console.log(message + "\n");

};

// main test entry point
exports.test = function (name, assert, defaultMessage) {

     if (!utils.isString(name) || utils.isNullOrUndefined(name)) {

          name = "Unknown Test";

     }

     log(`\n\n${subHeader("\t\t\t" + name + "\t\t\t")}`);
     if (utils.isFunction(assert)) {

          assert = assert();

          if (!utils.isBoolean(assert)) {

               assert = false;

          }

     }
     const result = assert || false;
     if (!utils.isString(defaultMessage) || utils.isNullOrUndefined(defaultMessage)) {

          defaultMessage = name;

     }

     log(`${testStyle("    \'" + defaultMessage + "\'")}\t\t\t${result ? pass() : fail()}`);

};
