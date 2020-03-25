import * as maths from "./math/math";
import * as Task from "./tasks/helpers";
import * as utilities from "./utils/utils";
import { Queue } from "./collections/queue";
import * as buffer from "./utils/text/buffers";
import * as conversions from "./utils/text/conversions";
import * as serialization from "./utils/text/serialization";
import * as regexConstants from "./utils/text/regexConstants";
export { Task };
export { Timer } from "./tasks/common/timer";
export { Color } from "./graphics/drawing/colors/color";
export { EventEmitter } from "./tasks/common/eventEmitter";
export { Enumerator } from "./common/enumeration/Enumerator";
/**
 * Text based helper functions
 */
export declare const text: {
    conversions: typeof conversions;
    serialization: typeof serialization;
    regex: typeof regexConstants;
    buffer: typeof buffer;
};
/**
 * Collections/container classes
 */
export declare const collections: {
    Queue: typeof Queue;
};
/**
 * Commom math functions
 */
export declare const math: typeof maths;
/**
 * Common helper functions
 */
export declare const utils: typeof utilities;
