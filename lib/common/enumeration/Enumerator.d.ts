/**
 * Represents a base enumeration definition
 */
declare function Enumerator(): void;
declare namespace Enumerator {
    var validate: (enumerator: any, value: any) => boolean;
    var isEnumerator: (enumerator: any) => boolean;
    var create: (values: any[], startIndex: number) => Enumerator<any>;
    var isValidEnumType: (value: any) => boolean;
    var toString: (enumeration: any, index: number) => string;
}
export { Enumerator };
