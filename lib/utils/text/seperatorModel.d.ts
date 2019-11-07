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
}
