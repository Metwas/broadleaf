"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils/utils");
const math_1 = require("./math/math");
const color_1 = require("./graphics/drawing/colors/color");
const conversions_1 = require("./text/conversions");
exports.default = {
    utils: utils_1.default,
    math: math_1.default,
    text: {
        conversions: conversions_1.default
    },
    drawing: {
        color: color_1.default
    },
};
