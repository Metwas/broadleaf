// load modules
const { utils } = require("../../lib/broadleaf");
const { table, test, printService } = require("../helpers/helper");
const chalk = require("chalk");
const { log, header } = printService;

// testing initialization
log(header("#### Network Testing ####"));
log("IPv4");
// get the ipv4 details for the current system
console.log(utils.system.getIPv4Details());
log("\nIPv6");
// get the ipv6 details for the current system
console.log(utils.system.getIPv6Details());

