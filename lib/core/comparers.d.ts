/**
 * Represents a base interface for defining a type comparer
 */
export interface IComparable<T> {
    /**
     * Compares two arguments of type {T} returning an number defining the order
     *
     * @param {T} x0
     * @param {T} x1
     * @returns {Number} Either -1 if x1 is greater than x0, 0 if both are equal or 1 if x0 is greater than x1
     */
    compare(x0: T, x1: T): number;
}
