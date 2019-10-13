const { Timer, utils } = require("../../lib/broadleaf");
const { table, test, printService } = require("../helpers/helper");
const chalk = require("chalk");


const { log, header } = printService;
test("timer is not null or undefined", !utils.isNullOrUndefined(Timer));

const duration = 5000; // Total duration for the timer to take to complete
const fps = 1; // The resolution OR frame per second
const startTime = 0; // A specified head start for the timer

var timer = new Timer(duration, fps, startTime);
console.log("STATUS: " + timer.status);
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
     return `${String("0" + now.getHours()).slice(-2)}:${String("0" + now.getMinutes()).slice(-2)}:${String("0" + now.getSeconds()).slice(-2)}`;

}
