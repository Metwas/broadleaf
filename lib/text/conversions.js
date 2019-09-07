"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a decimal value into its hexidecimal format
 *
 * @param {Number} value
 * @param {Number} baseFactor The base factor size for the return value
 * @returns {String} The string hexidecimal version for the provided number
 */
const toHexidecimal = function (value, baseFactor) {
    if (isNaN(value) || !isFinite(value)) {
        value = 0;
    }
    var _hexString = "#";
    var _value = value.toString(16);
    var _length = baseFactor;
    for (var i = 0; i < _length; i++) {
        _hexString += "0";
    }
    return _hexString + _value;
};
/**
 * Converts a provided number to its binary string representation
 *
 * @param {Number} value The number to be converted to a binary string
 * @returns {String} Returns a binary string representation for the provided value
 */
const toBinary = function (value) {
    var _bin = "";
    if (typeof value !== "number") {
        return "";
    }
    while (value > 0) {
        _bin = (value & 1) + _bin;
        value = value >> 1;
    }
    return padLeft(_bin, "0", 8);
};
/**
 * Prepends a charactor over a provided iteration count to the current string instance
 *
 * @param {String} char The charactor to prepend to the current string instance
 * @param {Number} count The length of padding to prepend
 * @returns {String} returns a readable string format of the current system time, e.g: 11:48:20
 */
const padLeft = function (value, char, count) {
    var _char = "";
    var _lengthToAttach = 0;
    if (value.length < count) {
        _lengthToAttach = count - value.length;
        for (var i = 0; i < _lengthToAttach; i++) {
            _char += char;
        }
        value = _char.concat(value);
    }
    return value;
};
exports.default = {
    toHexidecimal: toHexidecimal,
    toBinary: toBinary,
    padLeft: padLeft
};
