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
var maths = require("./math/math");
var Task = require("./tasks/helpers");
exports.Task = Task;
var utilities = require("./utils/utils");
var buffer = require("./utils/text/buffers");
var conversions = require("./utils/text/conversions");
var serialization = require("./utils/text/serialization");
var regexConstants = require("./utils/text/regexConstants");
var timer_1 = require("./tasks/common/timer");
exports.Timer = timer_1.Timer;
var color_1 = require("./graphics/drawing/colors/color");
exports.Color = color_1.Color;
var eventEmitter_1 = require("./tasks/common/eventEmitter");
exports.EventEmitter = eventEmitter_1.EventEmitter;
var Enumerator_1 = require("./common/enumeration/Enumerator");
exports.Enumerator = Enumerator_1.Enumerator;
var dictionary_1 = require("./collections/dictionary");
exports.Dictionary = dictionary_1.Dictionary;
var queue_1 = require("./collections/queue");
exports.Queue = queue_1.Queue;
/**
 * Text based helper functions
 */
exports.text = { conversions: conversions, serialization: serialization, regex: regexConstants, buffer: buffer };
/**
 * Commom math functions
 */
exports.math = maths;
/**
 * Common helper functions
 */
exports.utils = utilities;
//===================== End exports =====================//
