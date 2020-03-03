const { utils, math } = require("../../lib/broadleaf");
const { table, test, printService } = require("../helpers/helper");
const chalk = require("chalk");

const { log, header } = printService;

/**
 * Create a proxy to an @see Array
 */
const proxy = utils.polyfill.ProxyJX({ name: "test" }, {
     
     get: function (target, property) {
          
          console.log("TARGET: ");
          console.log(target[property]);

     },
     set: function(target, property, value){

          target["name"] = value;

     }

});

proxy["name"] = "tester";
const value = proxy["name"];