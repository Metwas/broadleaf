/**
 * Model object which holds network information for a given device
 */
export declare class NetworkDevice {
    address: string;
    mac: string;
    ipVersion: string;
    name?: string | undefined;
    /**
     * Constructs a new IP version 4 details object with the provided ip address and mac address
     *
     * @param {String} address
     * @param {String} mac
     * @param {String} name
     */
    constructor(address: string, mac: string, ipVersion: string, name?: string | undefined);
}
