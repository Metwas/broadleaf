declare const _default: {
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
export default _default;
