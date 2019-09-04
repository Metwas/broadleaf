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
        padLeft: (value: string, char: string, count: number) => string;
    };
    math: {
        DEGTORAD: number;
        RADTODEG: number;
        lerp: (x0: number, x1: number, t: number) => number;
        lerpColor: (obj: object, beginColor: import("./graphics/drawing/colors/color").default, endColor: import("./graphics/drawing/colors/color").default, iterations: number, duration: number) => void;
        clamp: (val: number, min: number, max: number) => number;
        square: (value: number) => number;
        dist: (x0: number, x1: number) => number;
        distVector: (vector0: import("./graphics/vectors/vector2").default, vector1: import("./graphics/vectors/vector2").default) => object;
        normalizeVectors: (vector0: import("./graphics/vectors/vector2").default, vector1: import("./graphics/vectors/vector2").default) => {
            coordinate0: import("./graphics/vectors/vector2").default;
            coordinate1: import("./graphics/vectors/vector2").default;
        };
        map: (value: number, minFrom: number, maxFrom: number, minTo: number, maxTo: number) => number;
        rand: (min: number, max: number) => number;
        HexToRGB: (hex: string | number) => import("./graphics/drawing/colors/color").default;
        RGBToHex: (red: number, green: number, blue: number) => string;
        toHex: (value: number, baseFactor: number) => string;
        getBinaryString: (value: number) => string;
        getlineGraphComponents: (from: import("./graphics/vectors/vector2").default, to: import("./graphics/vectors/vector2").default) => Object;
        getMatrixIndex2D: (x: number, y: number, width: number) => number;
        oscillate: (angle: number, height: number) => number;
        getMatricesIndex: (x: number, y: number, width: number, array: any[], border: boolean) => Object | null;
        randArray: (array: any[]) => number | null;
        degreesToRadians: (degrees: number) => number;
        radiansToDegrees: (radian: number) => number;
    };
    graphics: {
        color: typeof import("./graphics/drawing/colors/color").default;
    };
};
export default _default;
