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

//===================== imports =====================//

import * as os from "os";
import { average } from "../math/math";
import { NetworkDevice } from "./models/networkDevice";

//===================== End imports =====================//

/**
 * Gets the current system's operating platform 
 * 
 * @public
 * @returns {String}
 */
export function platform(): string { return os.platform(); };

/**
 * Gets the total number of cores within the current system
 * 
 * @public
 * @returns {Number}
 */
export function cpuCount(): number { return os.cpus().length; }

/**
 * Gets the frequency for a specified core or and average result across all cores
 * 
 * @param {Number | Boolean} coreOrAverage 
 */
export function cpuFrequency(core: number): number {

     const cpus: number = cpuCount();
     /**
      * Handle specified core
      */
     if (typeof core === "number") {

          /**
           * Provide a default if core was out of range
           */
          if (core < 0 || core > cpus) { core = 0; }

          /**
           * get frequency for specified core
           */
          return os.cpus()[core].speed;

     } else {

          /**
           * Default to average
           */
          return average(os.cpus(), "speed");

     }

};

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

/**
 * Defines a basic operating system process
 */
type processEntry = { user: string, cpuUsage: number, memUsage: number, start: string, command: string };

/**
 * Gets all running processors on the current machine
 * 
 * @public
 * @param {String | Function} filter 
 * @returns Array<processEntry>
 */
export function getProcesses(filter: any = null): Array<any> {

     const result: Array<processEntry> = []
     let command: string = "";

     /**
      * Get supported os commands
      */
     switch (os.platform()) {

          /**
           * Windows 
           */
          case "win32":
               command = "tasklist";
               break;

          /**
           * All linux distros
           */
          case "linux":
               command = "ps -aux";
               break;

     }

     /**
      * Spawn the command process
      */
     require("child_process").exec(command, function (err: Error, stdout: any, stderr: any) {

          /**
           * Filter out any processors
           */
          console.log(stdout.split("\n").join("\n\n\n"));

     });

     return result;

};