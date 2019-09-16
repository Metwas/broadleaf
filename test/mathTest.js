const { utils, math } = require("../lib/broadleaf");
const { table, test, printService } = require("./helpers/helper");
const { log, header } = printService;
const chalk = require("chalk");

// testing initialization
log(header("#### Math Testing ####"));

let max_nibble = math.MAX_NIBBLE;
const max_byte = math.MAX_BYTE;
const max_16bit = math.MAX_16BIT;
const max_24bit = math.MAX_24BIT;
const max_unsigned_32bit = math.MAX_UNSIGNED_32BIT;
log("max nibble size: " + max_nibble);
log("max byte size: " + max_byte);
log("max 16 bit size: " + max_16bit);
log("max 24 bit size: " + max_24bit);
log("max 32 bit size: " + max_unsigned_32bit);

// Constants test
test("nibble is a 4-bit number", (max_nibble >> 4) === 0, "nibble is a 4-bit number");
test("byte is a 8-bit number", (max_byte >> 8) === 0);

