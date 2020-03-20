/**
 * Represents a base enumeration definition
 */
declare function Enumerator(): void;
declare namespace Enumerator {
    var validate: (enumerator: any, value: any) => boolean;
    var create: (values: any[], startIndex: number) => Enumerator<any>;
    var isValidEnumType: (value: any) => boolean;
}
export { Enumerator };
