/**
 * @template T
 * @extends Observable<'change'>
 *
 * Yjs maps don't perform well when there are a lot of entries that are frequently updated in alternating order.
 * This is a more efficient key-value store that allows frequently updating alternating entries.
 *
 * Note that this implementation does not support any nested Yjs types.
 *
 * Rough concept: We store { key, val } pairs in an Y.Array. When you write a new entry,
 * we append the { key, val } pair to the yarray and remove all existing entries with the same key.
 * Items that are more to the right have precedence.
 *
 * This type fires events similarly to Y.Map
 *
 * ```js
 * yefficientmap.on('change', changes => {
 *   changes // => Map<string, { action: 'delete', oldValue: T } | { action: 'update', oldValue: T, newValue: T } | { action: 'add', newValue: T }>
 * })
 * ```
 */
export class YKeyValue<T> extends Observable<"change"> {
    /**
     * @param {Y.Array<{ key: string, val: T }>} yarray
     */
    constructor(yarray: Y.Array<{
        key: string;
        val: T;
    }>);
    yarray: Y.Array<{
        key: string;
        val: T;
    }>;
    doc: Y.Doc;
    /**
     * Store the key-val pair so we can do identity-based comparisons.
     *
     * @type {Map<string, { key: string, val: T }>}
     */
    map: Map<string, {
        key: string;
        val: T;
    }>;
    /**
     * @param {string} key
     * @param {T} val
     */
    set(key: string, val: T): void;
    /**
     * @param {string} key
     */
    delete(key: string): void;
    /**
     * @param {string} key
     * @return {T | undefined}
     */
    get(key: string): T | undefined;
    /**
     * @param {string} key
     */
    has(key: string): boolean;
}
import { Observable } from 'lib0/observable';
import * as Y from 'yjs';
//# sourceMappingURL=y-keyvalue.d.ts.map