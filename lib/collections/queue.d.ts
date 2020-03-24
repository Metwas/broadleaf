import { EventEmitter } from "../tasks/common/eventEmitter";
/**
 * Represents a first-in, first-out ordered container
 */
export declare class Queue extends EventEmitter<any> {
    /**
     * The queue limit
     */
    limit: number;
    /**
     * The underlying array of items ordered by queue
     */
    protected _data: Array<any>;
    /**
     * Initializes the queue with a specified limit
     *
     * @param {Number} limit
     */
    constructor(limit?: number);
    /**
     * Gets the current queue count
     *
     * @returns {Number}
     */
    get Count(): number;
    /**
     * Gets the underlying queue container
     *
     * @returns {Array}
     */
    get Queue(): Array<any>;
    /**
     * Adds an entry to the back of the queue
     *
     * @param {Any} queueItem
     */
    append(queueItem: any): void;
    /**
     * Adds a range of entries to the end of the queue
     *
     * @param {Array} items
     */
    appendRange(items: Array<any>): void;
    /**
     * Retrieves the first entry within a queue, then removes it from the store
     *
     * @returns {Any} The next in-line queue entry
     */
    next(): any;
    /**
     * Removes a queue entry at the specified index
     *
     * @param {Number} index
     * @returns {Any} The removed queue entry
     */
    remove(index: number): any;
    /**
     * Removes a index range of entries from the queue
     *
     * @param {Number} start
     * @param {Number} end
     * @returns {Array} An array of removed queue entries
     */
    removeRange(start: number | any, end?: number): Array<any>;
    /**
     * Calculates whether the current queue can take a set range of entries, returning the overflow amount for processing
     *
     * @private
     * @param {Array} items
     * @returns {Object} inRange, overflowCount
     */
    private _calculateQueueLoad;
}
/**
 * Adds a priority to a queue by defining a property to order by
 */
export declare class PriorityQueue extends Queue {
    /**
     * The property name for which to prioritize over
     */
    priorityProperty: string;
    /**
     * Option to retain the priority once full
     */
    retainQueue: boolean;
    /**
     * Initializes the priority by defining a property to set a priority order
     *
     * @param {String} priorityProperty
     * @param {Number} limit
     * @param {Boolean} retain
     */
    constructor(priorityProperty: string, limit: number, retain?: boolean);
    /**
     * Overrides the default base queue behaviour, which creates a priority property on the item if not provided
     *
     * @param {Object | Number | String} item
     */
    append(item: any): void;
    /**
     * Creates a priority item, using defaults if not already specified
     *
     * @private
     * @param {Object | Number | String} item
     * @returns {Object | Array}
     */
    private _createPriorityItem;
    /**
     * Handles the base item addition, which sorts the base queue
     *
     * @private
     */
    private _handleItemAddition;
    /**
     * Sorts the array based on the priorityProperty
     *
     * @private
     * @param {Array} items
     */
    private _sortByPriority;
    /**
     * Intercepts the base addRange to filter out entries with the least priority, if the outOfRange is set to true
     *
     * @private
     * @param {ITransferQueueState} state
     */
    private _handleRangeAddition;
    /**
     * Adds given set of items, replacing current entries within the queue if the priority is greater
     *
     * @private
     * @param {Array | Object} items
     */
    private _add;
}
