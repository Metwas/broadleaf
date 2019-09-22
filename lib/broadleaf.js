"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils/utils");
exports.utils = utils_1.default;
const math_1 = require("./math/math");
exports.math = math_1.default;
const color_1 = require("./graphics/drawing/colors/color");
const conversions_1 = require("./text/conversions");
// text module namespace
const text = {
    conversions: conversions_1.default
};
exports.text = text;
// drawing module
const drawing = {
    color: color_1.default
};
exports.drawing = drawing;
