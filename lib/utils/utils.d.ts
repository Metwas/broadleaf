declare const _default: {
    isNullOrUndefined: (value: any) => boolean;
    isNull: (value: any) => boolean;
    isUndefined: (value: any) => boolean;
    isObject: (value: any) => boolean;
    isNumber: (value: any) => boolean;
    isFinite: (value: any) => boolean;
    isArray: (value: any) => boolean;
    isBoolean: (value: any) => boolean;
    isFunction: (value: any) => boolean;
    isRegExp: (value: any) => boolean;
    isString: (value: any) => boolean;
    toString: (value: any) => string;
    noop: () => void;
    has: (obj: Object, property: string) => boolean;
    filter: (array: any[], callback: (element: any, index: number, array: any[]) => boolean) => any[];
    arrayClone: (array: any[]) => any[];
    contains: (arrayOrObject: any, propertyKey: any, propertyValue: any) => boolean;
    assign: {
        <T, U>(target: T, source: U): T & U;
        <T_1, U_1, V>(target: T_1, source1: U_1, source2: V): T_1 & U_1 & V;
        <T_2, U_2, V_1, W>(target: T_2, source1: U_2, source2: V_1, source3: W): T_2 & U_2 & V_1 & W;
        (target: object, ...sources: any[]): any;
    };
    keys: (obj: Object, callback?: (key: string) => void) => any[];
    forEach: (enumerable: Object | any[], callback: (element: any) => void) => void;
    getType: (obj: any) => string;
    __default: (type: string) => any;
    toArray: (obj: Object, parseKeys?: boolean | undefined) => any[];
    values: (obj: any, filterFn: (key: string, value: any, obj: any) => boolean, ownProperty?: boolean | undefined) => any[];
    value: (obj: any, key: string, ownProperty?: boolean | undefined) => any;
};
export default _default;
