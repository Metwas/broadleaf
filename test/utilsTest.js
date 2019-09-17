// load modules
const { utils, math } = require("../lib/broadleaf");
const { table, test, printService } = require("./helpers/helper");
const { log, header } = printService;
const chalk = require("chalk");

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

// default type
const type = "number";
const _defaultValue = utils.__default(type);
log(`Default value for type: ${type} = ${typeof _defaultValue}`);