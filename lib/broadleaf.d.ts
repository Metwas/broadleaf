import * as utilities from "./utils/utils";
import * as maths from "./math/math";
import * as conversions from "./utils/text/conversions";
import * as regexConstants from "./utils/text/regexConstants";
export { Color } from "./graphics/drawing/colors/color";
export { Timer } from "./tasks/common/timer";
export { EventEmitter } from "./tasks/common/eventEmitter";
export declare const text: {
    conversions: typeof conversions;
    regex: typeof regexConstants;
};
export declare const math: typeof maths;
export declare const utils: typeof utilities;
