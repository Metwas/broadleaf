import { IListener } from "./IListener";
/**
 * Model for mapping an event name to a listener container
 */
export declare class EventTable<T> {
    /**
     * The name for this event
     */
    name: string;
    /**
     * The listener container associated with this event
     */
    listeners: IListener<T>[];
    /**
     * Option to keep the events persistent after emission
     */
    persistent: boolean;
    /**
     * Default constructor
     *
     * @param {String} name
     * @param {Boolean} persistent Optional - defaults to true
     */
    constructor(name: string, persistent?: boolean);
}
