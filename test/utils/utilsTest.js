// load modules
const { utils, math } = require("../../lib/broadleaf");
const { table, test, printService } = require("../helpers/helper");
const chalk = require("chalk");

const { log, header } = printService;

// testing initialization
log(header("#### Utility Testing ####"));

log(header("Before removing key from object or array"));
const remObj = { name: "test" };
const testRemObj = { test: "name" };
const remArr = ["Test1", "test2", testRemObj];
console.log(remObj);
console.log(remArr);
log(header("After removing key"));
utils.removeIfDefined("name", remObj);
utils.removeIfDefined(testRemObj, remArr);
console.log(remObj);
console.log(remArr);

// test classOf 
test("Log is function", utils.isClassOf(log, "Function"), "Class of");

// object keys
let testObj = { name: "test", age: 24, id: Math.floor(math.random(0x23, 0xff)) };
const keys = utils.keys(testObj);
test("Object keys test", utils.isArray(keys), "utils.keys is array");
//table(testObj);

log("Cloning test");
let newObj = utils.deepCopy(testObj);
newObj.name = "cloned";
log(`Test name: ${testObj.name}, cloned name: ${newObj.name}`);
console.log(newObj);

// object value
const value = testObj["name"];
const utilValue = utils.value(testObj, "name");
test("Object value test", value === utilValue, "util.value", `${utilValue}`);

// object values
const values = utils.values(testObj);
const assertValues = utils.isArray(values) && values.length > 0;
test("Object values test", assertValues, "util.values length > 0", `${utilValue}`);
//table(values, "testObj values");

test("is test object literal", utils.isObjectLiteral(testObj),"Object literals");
const testObj2 = new function test(){ this.name = "test2" };
// create prototype chain
testObj2.prototype = { log: function(){ console.log(this.name); } };
test("is test2 not an object literal", !utils.isObjectLiteral(testObj2),"Object literals");

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
const _defaultValue = utils.reflectType(type);
log(`Default value for type: ${type} = ${typeof _defaultValue}`);