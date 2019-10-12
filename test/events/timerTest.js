const { Timer, utils } = require("../../lib/broadleaf");
const { table, test, printService } = require("../helpers/helper");
const chalk = require("chalk");


const { log, header } = printService;
test("timer is not null or undefined", !utils.isNullOrUndefined(Timer));

var timer = new Timer(5000);
const now = formatDateNow();
timer.on("complete", (elapsed) => { console.log("\ntimer started: " + now + "\ntimer completed at: " + formatDateNow()); });
timer.on("start", () => { console.log("timer started at: " + now); });
timer.on("tick", (elapsed) => { console.log("timer tick: " + elapsed); });
timer.start();

/**
 * Returns the current date in a time format string
 * 
 * @returns {String}
 */
function formatDateNow() {

     const now = new Date();
     return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

}
