const { utils, math } = require("../../lib/broadleaf");
const { table, test, printService } = require("../helpers/helper");
const chalk = require("chalk");

const vector2 = math.Vector2;
const { log, header } = printService;

// testing initialization
log(header("#### Vector Testing ####"));
const vel = new vector2(1, 2);
const acc = new vector2(2, 1);

console.log(`Magnitude: ${vel.magnitude()}`);
console.log(`Heading: ${vel.heading()}`);
// rotate
vel.rotate(360);
console.log(`Heading: ${vel.heading()}`);

