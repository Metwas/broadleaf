/**
 * Base definition for formatting a given generic type to a string
 */
export interface IFormattable<T> {
    /**
     * Formats a value of type {T} to a string
     *
     * @param {T} value
     * @param {String} format A custom defined format for sub-classes to implement
     * @returns {String}
     */
    format(value: T, format: string): string;
}
