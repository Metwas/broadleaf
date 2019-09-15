import Vector2 from "./vectors/vector2";
declare const _default: {
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
    vector2: typeof Vector2;
    degreesToRadians: (degrees: number) => number;
    radiansToDegrees: (radian: number) => number;
    lerp: (x0: number, x1: number, t: number) => number;
    map: (value: number, minFrom: number, maxFrom: number, minTo: number, maxTo: number) => number;
    square: (value: number) => number;
    clamp: (val: number, min: number, max: number) => number;
    distVector: (vector0: Vector2, vector1: Vector2) => object;
    dist: (x0: number, x1: number) => number;
    random: (min: number, max: number) => number;
    randomArray: (array: any[]) => number | null;
    normalizeVectors: (vector0: Vector2, vector1: Vector2) => {
        vector0: Vector2;
        vector1: Vector2;
    };
    getMatrixIndex2D: (x: number, y: number, width: number) => number;
    getMatrixIndex: (x: number, y: number, width: number, array: any[], border: boolean) => Object | null;
    getlineGraphComponents: (from: Vector2, to: Vector2) => Object;
    oscillate: (angle: number, amplitude: number) => number;
};
export default _default;
