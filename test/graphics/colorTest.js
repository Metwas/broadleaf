const { utils, math, Color } = require("../../lib/broadleaf");
const { table, test, printService } = require("../helpers/helper");
const chalk = require("chalk");

const { log, header } = printService;

// testing initialization
log(header("#### Color Testing ####"));
const black = Color.Black;
log(`Decimal: ${black.toString()} Hexidecimal: ${black.toString(true)}`);
black.setHex(0xF20000);
log(`### Modified ###`);
log(`Decimal: ${black.toString()} Hexidecimal: ${black.toString(true)}`);


log("\n\nLerp testing: ");

const newColor = Color.lerp(Color.Thistle, Color.Tomato, 0.3);
log(`value: ${newColor}`);



