"use strict";
/*
     MIT License

     Copyright (c) 2020 Metwas

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in all
     copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//===================== imports =====================//
var os = require("os");
var math_1 = require("../math/math");
//===================== End imports =====================//
/**
 * Gets the current system's operating platform
 *
 * @public
 * @returns {String}
 */
function platform() { return os.platform(); }
exports.platform = platform;
;
/**
 * Gets the total number of cores within the current system
 *
 * @public
 * @returns {Number}
 */
function cpuCount() { return os.cpus().length; }
exports.cpuCount = cpuCount;
/**
 * Gets the frequency for a specified core or and average result across all cores
 *
 * @param {Number | Boolean} coreOrAverage
 */
function cpuFrequency(core) {
    var cpus = cpuCount();
    /**
     * Handle specified core
     */
    if (typeof core === "number") {
        /**
         * Provide a default if core was out of range
         */
        if (core < 0 || core > cpus) {
            core = 0;
        }
        /**
         * get frequency for specified core
         */
        return os.cpus()[core].speed;
    }
    else {
        /**
         * Default to average
         */
        return math_1.average(os.cpus(), "speed");
    }
}
exports.cpuFrequency = cpuFrequency;
;
/**
 * IP version 4 string
 *
 * @private
 */
var IP_VERSION_4 = "IPv4";
/**
 * IP version 6 string
 *
 * @private
 */
var IP_VERSION_6 = "IPv6";
/**
 * Gets the total uptime of the operating system as a unix timestamp
 *
 * @returns {Number}
 */
function getOSUptime() {
    var MS_IN_SECOND = 1000;
    var now = Date.now();
    var uptime = os.uptime();
    // return a new date after substracting the uptime from the current time
    return new Date(now - (uptime * MS_IN_SECOND)).getTime();
}
exports.getOSUptime = getOSUptime;
;
/**
 * Gets the current systems network information with a specified version filter
 *
 * @param {String} version IP version, either IPv4 or IPv6
 * @returns {NetworkDevice}
 */
function getNetDetails(version) {
    var interfaces = os.networkInterfaces();
    var index = Object.keys(interfaces).filter(function (x) { return x !== "lo" && x.startsWith("e"); })[0];
    var eth = interfaces[index];
    var i = 0;
    var length = Array.isArray(eth) ? eth.length : 0;
    for (; i < length; i++) {
        var ethInterface = eth[i];
        if (ethInterface && ethInterface.family === version) {
            return { address: ethInterface["address"], mac: ethInterface["mac"], ipVersion: version };
        }
    }
    return { address: "Unknown", mac: "Unknown", ipVersion: "Unknown" };
}
exports.getNetDetails = getNetDetails;
;
/**
 * Gets the IP version 4 details from the current system
 *
 * @returns {NetworkDevice}
 */
function getIPv4Details() {
    return getNetDetails(IP_VERSION_4);
}
exports.getIPv4Details = getIPv4Details;
;
/**
 * Gets the IP version 6 details from the current system
 *
 * @returns {NetworkDevice}
 */
function getIPv6Details() {
    return getNetDetails(IP_VERSION_6);
}
exports.getIPv6Details = getIPv6Details;
;
