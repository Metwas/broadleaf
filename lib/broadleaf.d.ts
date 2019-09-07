import Color from "./graphics/drawing/colors/color";
declare const _default: {
    utils: {
        isNullOrUndefined: (obj: Object) => Boolean;
        has: (obj: Object, property: string) => Boolean;
        filter: (array: any[], callback: Function) => any[];
        arrayClone: (array: any[]) => any[];
        contains: (array: any[], propertyKey: any, propertyValue: any) => Boolean;
        assign: {
            <T, U>(target: T, source: U): T & U;
            <T_1, U_1, V>(target: T_1, source1: U_1, source2: V): T_1 & U_1 & V;
            <T_2, U_2, V_1, W>(target: T_2, source1: U_2, source2: V_1, source3: W): T_2 & U_2 & V_1 & W;
            (target: object, ...sources: any[]): any;
        };
        keys: (obj: Object, callback: Function) => any[];
        forEach: (enumerable: any[], callback: Function) => void;
    };
    math: {
        PI: number;
        HALF_PI: number;
        TAU: number;
        MAX_NIBBLE: number;
        MAX_BYTE: number;
        MAX_16BIT: number;
        MAX_24BIT: number;
        MAX_32BIT: number;
        INFINITY: number;
        DEGTORAD: number;
        RADTODEG: number;
        vector2: typeof import("./math/vectors/vector2").default;
        degreesToRadians: (degrees: number) => number;
        radiansToDegrees: (radian: number) => number;
        lerp: (x0: number, x1: number, t: number) => number;
        map: (value: number, minFrom: number, maxFrom: number, minTo: number, maxTo: number) => number;
        square: (value: number) => number;
        clamp: (val: number, min: number, max: number) => number;
        distVector: (vector0: import("./math/vectors/vector2").default, vector1: import("./math/vectors/vector2").default) => object;
        dist: (x0: number, x1: number) => number;
        random: (min: number, max: number) => number;
        randomArray: (array: any[]) => number | null;
        normalizeVectors: (vector0: import("./math/vectors/vector2").default, vector1: import("./math/vectors/vector2").default) => {
            vector0: import("./math/vectors/vector2").default;
            vector1: import("./math/vectors/vector2").default;
        };
        getMatrixIndex2D: (x: number, y: number, width: number) => number;
        getMatrixIndex: (x: number, y: number, width: number, array: any[], border: boolean) => Object | null;
    };
    text: {
        conversions: {
            toHexidecimal: (value: number, baseFactor: number) => string;
            toBinary: (value: number) => string;
            padLeft: (value: string, char: string, count: number) => string;
        };
    };
    drawing: {
        color: typeof Color;
    };
};
export default _default;
