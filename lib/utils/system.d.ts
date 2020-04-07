import { NetworkDevice } from "./models/networkDevice";
/**
 * Gets the current system's operating platform
 *
 * @public
 * @returns {String}
 */
export declare function platform(): string;
/**
 * Gets the total number of cores within the current system
 *
 * @public
 * @returns {Number}
 */
export declare function cpuCount(): number;
/**
 * Gets the frequency for a specified core or and average result across all cores
 *
 * @param {Number | Boolean} coreOrAverage
 */
export declare function cpuFrequency(core: number): number;
/**
 * Gets the total uptime of the operating system as a unix timestamp
 *
 * @returns {Number}
 */
export declare function getOSUptime(): number;
/**
 * Gets the current systems network information with a specified version filter
 *
 * @param {String} version IP version, either IPv4 or IPv6
 * @returns {NetworkDevice}
 */
export declare function getNetDetails(version: string): NetworkDevice;
/**
 * Gets the IP version 4 details from the current system
 *
 * @returns {NetworkDevice}
 */
export declare function getIPv4Details(): NetworkDevice;
/**
 * Gets the IP version 6 details from the current system
 *
 * @returns {NetworkDevice}
 */
export declare function getIPv6Details(): NetworkDevice;
