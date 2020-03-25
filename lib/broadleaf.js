"use strict";
/*
     MIT License

     Copyright (c) 2020 Metwas

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
//===================== imports =====================//
const maths = require("./math/math");
const Task = require("./tasks/helpers");
exports.Task = Task;
const utilities = require("./utils/utils");
const queue_1 = require("./collections/queue");
const buffer = require("./utils/text/buffers");
const conversions = require("./utils/text/conversions");
const serialization = require("./utils/text/serialization");
const regexConstants = require("./utils/text/regexConstants");
var timer_1 = require("./tasks/common/timer");
exports.Timer = timer_1.Timer;
var color_1 = require("./graphics/drawing/colors/color");
exports.Color = color_1.Color;
var eventEmitter_1 = require("./tasks/common/eventEmitter");
exports.EventEmitter = eventEmitter_1.EventEmitter;
var Enumerator_1 = require("./common/enumeration/Enumerator");
exports.Enumerator = Enumerator_1.Enumerator;
/**
 * Text based helper functions
 */
exports.text = { conversions: conversions, serialization: serialization, regex: regexConstants, buffer: buffer };
/**
 * Collections/container classes
 */
exports.collections = { Queue: queue_1.Queue };
/**
 * Commom math functions
 */
exports.math = maths;
/**
 * Common helper functions
 */
exports.utils = utilities;
//===================== End exports =====================//
