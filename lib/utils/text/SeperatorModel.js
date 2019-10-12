"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("../utils");
class SeperatorModel {
    constructor(token, startSequence, endSequence) {
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
}
exports.SeperatorModel = SeperatorModel;
