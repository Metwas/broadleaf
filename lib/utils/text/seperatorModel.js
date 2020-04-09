"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
var SeperatorModel = /** @class */ (function () {
    /**
     * Default constructor
     *
     * @param {String} token
     * @param {String} startSequence
     * @param {String} endSequence
     */
    function SeperatorModel(token, startSequence, endSequence) {
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
    return SeperatorModel;
}());
exports.SeperatorModel = SeperatorModel;
