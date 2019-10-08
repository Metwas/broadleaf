export declare class SeperatorModel {
    /**
     * A specified string of charactors that will initialize the token seperator
     */
    startSequence: string;
    /**
     * A specified string of charactors that will close the token seperator value
     */
    endSequence: string;
    /**
     * The token seperator
     */
    token: string;
    constructor(token: string, startSequence?: string, endSequence?: string);
    /**
     * The output result stored after the last parsing call
     */
    private _results;
    readonly result: Array<string>;
    /**
     * Obtains all the values which match the current seperator tokens
     *
     * @param {String} value
     * @returns {Array}
     */
    parse(value: string): Array<string>;
}
