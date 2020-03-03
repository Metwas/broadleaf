"use strict";
/*
     MIT License

     Copyright (c) 2019 Metwas

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in all
     copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const utilities = require("./utils/utils");
const maths = require("./math/math");
const conversions = require("./utils/text/conversions");
const regexConstants = require("./utils/text/regexConstants");
const Task = require("./tasks/helpers");
exports.Task = Task;
const queue_1 = require("./collections/queue");
var color_1 = require("./graphics/drawing/colors/color");
exports.Color = color_1.Color;
var timer_1 = require("./tasks/common/timer");
exports.Timer = timer_1.Timer;
var eventEmitter_1 = require("./tasks/common/eventEmitter");
exports.EventEmitter = eventEmitter_1.EventEmitter;
exports.text = {
    conversions: conversions,
    regex: regexConstants
};
exports.collections = {
    Queue: queue_1.Queue
};
exports.math = maths;
exports.utils = utilities;
