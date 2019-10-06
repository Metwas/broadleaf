const { EventEmitter, utils } = require("../../lib/broadleaf");
const { table, test, printService } = require("../helpers/helper");
const chalk = require("chalk");


const { log, header } = printService;

log("Event Emitter initialization...");
var emitter = new EventEmitter();
emitter.on("message", (ev) => { console.log("Good " + ev) });
emitter.once("message2", (ev) => { console.log("hello " + ev) });
emitter.once("message2", (args) => { console.log("hello " + utils.isArray(args)) });
log("### Emitter Table ###" + "\n" + emitter);
emitter.emit("message","day");
emitter.emit("message2",["s","s"]);


log("Test off method");
emitter.off("message");
log("### Emitter Table ###" + "\n" + emitter);
log("\nDispose test...");
emitter.dispose();
log("### Emitter Table - After Dispose() ###" + "\n" + emitter);
