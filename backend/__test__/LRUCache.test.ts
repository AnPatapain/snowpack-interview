import LRUCache from '../src/main/cache/LRUCache'; // adjust the import path as needed

describe('LRUCache', () => {
    let cache: LRUCache<number>;

    beforeEach(() => {
        cache = new LRUCache<number>(2);
    });

    test('should return undefined for non-existent keys', () => {
        expect(cache.get('nonexistent')).toBeUndefined();
    });

    test('should put and get items', () => {
        cache.put('key1', 1);
        expect(cache.get('key1')).toBe(1);
        cache.put('key2', 2);
        expect(cache.get('key2')).toBe(2);
    });

    test('should evict least recently used item', () => {
        cache.put('key1', 1);
        cache.put('key2', 2);
        cache.get('key1'); // key1 becomes recently used
        cache.put('key3', 3); // key2 should be evicted

        expect(cache.get('key1')).toBe(1);
        expect(cache.get('key2')).toBeUndefined();
        expect(cache.get('key3')).toBe(3);
    });
});
