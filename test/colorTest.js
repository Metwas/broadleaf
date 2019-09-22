const { utils, math, drawing } = require("../lib/broadleaf");
const { table, test, printService } = require("./helpers/helper");
const { log, header } = printService;
const chalk = require("chalk");

const color = drawing.color;

// testing initialization
log(header("#### Color Testing ####"));
const black = color.Black;
log(`Decimal: ${black.toString()} Hexidecimal: ${black.toString(true)}`);
black.setHex(0xF20000);
log(`### Modified ###`);
log(`Decimal: ${black.toString()} Hexidecimal: ${black.toString(true)}`);


log("\n\nLerp testing: ");

const newColor = color.lerp(color.Thistle, color.Tomato, 0.3);
log(`value: ${newColor}`);



