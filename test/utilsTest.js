// load modules
const { utils, math } = require("../lib/broadleaf");
const chalk = require("chalk");

// custom styles
const headerStyle = chalk.keyword("white").bold.bgYellow.inverse;
const passStyle = chalk.keyword("green").bold;
const failStyle = chalk.keyword("red").bold;
const testStyle = chalk.keyword("black").bold;

// define quick access functions
const log = function (message) {

     return console.log(message + "\n");

};

// main test entry point
const test = function (name, assert, defaultMessage) {

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

          defaultMessage = "Unknown assert";

     }

     log(`${testStyle("    \'" + defaultMessage + "\'")}\t\t\t${result ? pass() : fail()}`);

};

// builds a table from the provided object whether its an array or object
const table = function (entry, tableName) {

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

// prints a custom header message
const header = function (message) {

     return headerStyle(message);

};


// prints a custom header message
const subHeader = function (message) {

     return chalk.keyword("white").bold.bgBlue(message);

};

// prints a pass message
const pass = function () {

     return passStyle("pass");

};

// prints a fail message
const fail = function () {

     return failStyle("fail");

};

// testing initialization
log(header("#### Utility Testing ####"));

// object keys
let testObj = { name: "test", age: 24, id: Math.floor(math.random(0x23, 0xff)) };
const keys = utils.keys(testObj);
test("Object keys test", utils.isArray(keys), "utils.keys is array");
//table(testObj);

// object value
const value = testObj["name"];
const utilValue = utils.value(testObj, "name");
test("Object value test", value === utilValue, "util.value", `${utilValue}`);

// object values
const values = utils.values(testObj);
const assertValues = utils.isArray(values) && values.length > 0;
test("Object values test", assertValues, "util.values length > 0", `${utilValue}`);
//table(values, "testObj values");

// array contains 
const arr = [2, 3, 4, 5, "test"];
const contains = utils.contains(arr, 2);
test("Array contains", contains, "arr contains 2");

// object contains key
const key = "name";
const objContains = utils.contains(testObj, key);
test("object contains key", objContains, `testObj contains '${key}'`);

// object contains key and value
const keyAge = "age";
const objContainsValue = utils.contains(testObj, keyAge, 24);
test("object contains key and value", objContainsValue, `testObj contains and value '${keyAge}'`);