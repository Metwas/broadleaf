/*
     MIT License

     Copyright (c) 2019 Metwas

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

import * as utils from "./utils";
import os from "os";
import { NetworkDevice } from "./models/networkDevice";

/**
 * IP version 4 string
 * 
 * @private
 */
const IP_VERSION_4 = "IPv4";

/**
 * IP version 6 string
 * 
 * @private
 */
const IP_VERSION_6 = "IPv6";

/**
 * Gets the total uptime of the operating system as a unix timestamp
 * 
 * @returns {Number} 
 */
export function getOSUptime(): number {

     const MS_IN_SECOND: number = 1000;
     const now: number = Date.now();
     const uptime: number = os.uptime();
     // return a new date after substracting the uptime from the current time
     return new Date(now - (uptime * MS_IN_SECOND)).getTime();

};

/**
 * Gets the current systems network information with a specified version filter
 * 
 * @param {String} version IP version, either IPv4 or IPv6
 * @returns {NetworkDevice}
 */
export function getNetDetails(version: string): NetworkDevice {

     const interfaces: any = os.networkInterfaces();
     const index: string = Object.keys(interfaces).filter(x => x !== "lo" && x.startsWith("e"))[0];
     const eth: any = interfaces[index];

     let i: number = 0;
     const length: number = Array.isArray(eth) ? eth.length : 0;
     for (; i < length; i++) {

          const ethInterface: any = eth[i];
          if (ethInterface && ethInterface.family === version) {

               return { address: ethInterface["address"], mac: ethInterface["mac"], ipVersion: version };

          }

     }

     return { address: "Unknown", mac: "Unknown", ipVersion: "Unknown" };

};

/**
 * Gets the IP version 4 details from the current system
 * 
 * @returns {NetworkDevice}
 */
export function getIPv4Details(): NetworkDevice {

    return getNetDetails(IP_VERSION_4);

};

/**
 * Gets the IP version 6 details from the current system
 * 
 * @returns {NetworkDevice}
 */
export function getIPv6Details(): NetworkDevice {

     return getNetDetails(IP_VERSION_6);
 
 };