import * as maths from "./math/math";
import * as Task from "./tasks/helpers";
import * as utilities from "./utils/utils";
import * as buffer from "./utils/text/buffers";
import * as conversions from "./utils/text/conversions";
import * as serialization from "./utils/text/serialization";
import * as regexConstants from "./utils/text/regexConstants";
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
export declare const text: {
    conversions: typeof conversions;
    serialization: typeof serialization;
    regex: typeof regexConstants;
    buffer: typeof buffer;
};
/**
 * Commom math functions
 */
export declare const math: typeof maths;
/**
 * Common helper functions
 */
export declare const utils: typeof utilities;
