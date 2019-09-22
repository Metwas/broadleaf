import utils from "./utils/utils";
import math from "./math/math";
import color from "./graphics/drawing/colors/color";
declare const text: {
    conversions: {
        toHexidecimal: (value: number, baseFactor: number) => string;
        toBinary: (value: number) => string;
        padLeft: (value: string, char: string, count: number) => string;
    };
};
declare const drawing: {
    color: typeof color;
};
export { utils, math, text, drawing };
