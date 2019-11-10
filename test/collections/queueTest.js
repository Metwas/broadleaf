// load modules
const { collections } = require("../../lib/broadleaf");
const { table, test, printService } = require("../helpers/helper");
const chalk = require("chalk");
const { log, header } = printService;

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