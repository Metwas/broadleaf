const { Timer, utils } = require("../../lib/broadleaf");
const { table, test, printService } = require("../helpers/helper");
const chalk = require("chalk");


const { log, header } = printService;
test("timer is not null or undefined", !utils.isNullOrUndefined(Timer));

var timer = new Timer(5000);
timer.start();
