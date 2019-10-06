import * as utils from "./utils/utils";
import * as math from "./math/math";
import * as conversions from "./text/conversions";
import { Color } from "./graphics/drawing/colors/color";
import { Timer } from "./events/common/timer";
import { EventEmitter } from "./events/common/EventEmitter";
declare const text: {
    conversions: typeof conversions;
};
declare const drawing: {
    color: typeof Color;
};
export { utils, math, text, Timer, EventEmitter, drawing };
