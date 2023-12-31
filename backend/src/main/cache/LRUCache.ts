/**
 * LRUCache<string, T>: Simple least recently used cache that has a get and put in O(1).
 * Methods:
 *  - get(key: string): T
 *  - put(key: string, value: T): void
 **/
class LRUCache<T> {
    private static instance: LRUCache<any>;
    private readonly maxSize: number;
    private cache: Map<string, Node<T>>;


    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.cache = new Map<string, Node<T>>
    }

    public static getInstance<T>(maxSize: number): LRUCache<T> {
        if (!LRUCache.instance) {
            LRUCache.instance = new LRUCache<T>(maxSize);
        }
        return LRUCache.instance;
    }

    public get(key: string): T | undefined {
        if(this.cache.has(key)) {
            let node: Node<T> = this.cache.get(key) as Node<T>;
            this.cache.delete(key);
            this.cache.set(key, node);
            return node.value;
        }
        return undefined;
    }


    public put(key: string, value: T) {
        if(this.cache.size == this.maxSize) {
            let lruKey: string = this.cache.keys().next().value;
            this.cache.delete(lruKey);
        }
        this.cache.set(key, new Node<T>(key, value));
    }
}


class Node<T> {
    key: string;
    value: T;


    constructor(key: string, value: T) {
        this.key = key;
        this.value = value;
    }
}

export default LRUCache;
