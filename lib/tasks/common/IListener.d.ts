/**
 * Type safe event listener
 */
export interface IListener<T> {
    (event: T): any;
}
