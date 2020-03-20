import * as utilities from "./utils/utils";
import * as maths from "./math/math";
import * as conversions from "./utils/text/conversions";
import * as regexConstants from "./utils/text/regexConstants";
import * as Task from "./tasks/helpers";
import { Queue } from "./collections/queue";
export { Color } from "./graphics/drawing/colors/color";
export { Timer } from "./tasks/common/timer";
export { EventEmitter } from "./tasks/common/eventEmitter";
export { Enumerator } from "./common/enumeration/Enumerator";
export { Task };
export declare const text: {
    conversions: typeof conversions;
    regex: typeof regexConstants;
};
export declare const collections: {
    Queue: typeof Queue;
};
export declare const math: typeof maths;
export declare const utils: typeof utilities;
