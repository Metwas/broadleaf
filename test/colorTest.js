const { utils, math, drawing } = require("../lib/broadleaf");
const { table, test, printService } = require("./helpers/helper");
const { log, header } = printService;
const chalk = require("chalk");

const color = drawing.color;

// testing initialization
log(header("#### Color Testing ####"));

const black = new color(0, 0, 0);
log(`Original: ${black.toString()}`);
black.setHex("#aaa");
log(`Modified: ${black.toString()}`);
log(`Hexidecimal: ${black.toString(true)}`);


