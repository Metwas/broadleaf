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

//===================== imports =====================//

import * as maths from "./math/math";
import * as Task from "./tasks/helpers";
import * as utilities from "./utils/utils";
import * as buffer from "./utils/text/buffers";
import * as conversions from "./utils/text/conversions";
import * as serialization from "./utils/text/serialization";
import * as regexConstants from "./utils/text/regexConstants";

//===================== End imports =====================//

//===================== exports =====================//

export { Task };
export { Timer } from "./tasks/common/timer";
export { Color } from "./graphics/drawing/colors/color";
export { EventEmitter } from "./tasks/common/eventEmitter";
export { Enumerator } from "./common/enumeration/Enumerator";
export { Dictionary } from "./collections/dictionary";
export { Queue } from "./collections/queue";

/**
 * Text based helper functions
 */
export const text = { conversions: conversions, serialization: serialization, regex: regexConstants, buffer: buffer };

/**
 * Commom math functions
 */
export const math = maths;

/**
 * Common helper functions
 */
export const utils = utilities;

//===================== End exports =====================//