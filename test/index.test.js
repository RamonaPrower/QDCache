/* eslint-disable no-undef */
const qdCache = require('../index');

beforeEach(() => {
    qdCache.clear();
});
describe('Data', () => {
    test('should be storable', () => {
        const key = Math.random().toString(36).substr(2, 16);
        const data = {
            test: 'this is being stored in the cache',
        };
        qdCache.set(key, data);
        const store = qdCache.get(key);
        expect(store).toEqual(data);
    });
    test('should be the correct one', () => {
        const key = Math.random().toString(36).substr(2, 16);
        const data = {
            test: 'this is being stored in the cache',
        };
        qdCache.set(key, data);
        const newKey = Math.random().toString(36).substr(2, 16);
        const newData = {
            test2: 'this shouldn\'t match with the other data',
        };
        qdCache.set(newKey, newData);
        const firstStore = qdCache.get(key);
        const secondStore = qdCache.get(newKey);
        expect(firstStore).not.toEqual(secondStore);
    });
    test('should return null if data isn\'t in cache', () => {
        const key = Math.random().toString(36).substr(2, 16);
        const data = {
            test: 'this is being stored in the cache',
        };
        qdCache.set(key, data);
        const newKey = Math.random().toString(36).substr(2, 16);
        const store = qdCache.get(newKey);
        expect(store).toBeNull();
    });
    test('should be all cleared on clear()', () => {
        const key = Math.random().toString(36).substr(2, 16);
        const data = {
            test: 'this is being stored in the cache',
        };
        qdCache.set(key, data);
        qdCache.clear();
        const store = qdCache.get(key);
        expect(store).toBeNull();
    });
});

