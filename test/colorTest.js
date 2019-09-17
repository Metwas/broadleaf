const { utils, math, drawing } = require("../lib/broadleaf");
const { table, test, printService } = require("./helpers/helper");
const { log, header } = printService;
const chalk = require("chalk");

// testing initialization
log(header("#### Color Testing ####"));

const color = new drawing.color(255, 255, 255);
color.setHex("fef");
color.alpha = 10;
log(color.toString(true));
test("Color test", color.red === 255);


