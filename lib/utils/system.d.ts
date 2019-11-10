import { NetworkDevice } from "./models/networkDevice";
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
