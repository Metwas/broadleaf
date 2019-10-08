"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("../utils");
class SeperatorModel {
    constructor(token, startSequence, endSequence) {
        /**
         * The output result stored after the last parsing call
         */
        this._results = [];
        if (!utils.isString(token)) {
            throw new Error("Invalid seperator token provided!");
        }
        if (!utils.isString(startSequence) || startSequence === void 0) {
            startSequence = "";
        }
        if (!utils.isString(endSequence) || endSequence === void 0) {
            endSequence = startSequence;
        }
        this.token = token;
        this.startSequence = startSequence;
        this.endSequence = endSequence;
    }
    get result() {
        return this._results;
    }
    /**
     * Obtains all the values which match the current seperator tokens
     *
     * @param {String} value
     * @returns {Array}
     */
    parse(value) {
        // const tokenString: string = `${this.startSequence}${this.token}${this.endSequence}`;
        // const regexFn: (value: string) => string = utils.regex.MATCH_TOKEN(this);
        // return this._results = [""];
        return [];
    }
}
exports.SeperatorModel = SeperatorModel;
