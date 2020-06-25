const zlib = require('zlib');
/**
 * QDCache Singleton
 */
class QDCache {
    /**
     * creates the singleton
     * @hideconstructor
     */
    constructor() {
        if (!QDCache.instance) {
            this._data = new Map;
            this.size = 0;
            QDCache.instance = this;
        }
        return QDCache.instance;
    }
    /**
     * Gets data from the QDCache
     * @param {string} key The key of the data you wish to retrieve
     * @returns {*} the data stored in the cache as original state
     */
    get(key) {
        const data = this._data.get(key);
        if (!data) {
            return null;
        }
        const compressedData = data.value;
        const jsonBuffer = zlib.inflateRawSync(compressedData);
        const parsed = JSON.parse(jsonBuffer);
        return parsed;
    }
    /**
     *
     * @param {string} key The key of the data you wish to store
     * @param {*} value the data you wish to store
     * @returns {*} the original value set
     */
    set(key, value) {

        this.delete(key);

        const jsonBuffer = JSON.stringify(value);
        const compressedData = zlib.deflateRawSync(jsonBuffer);

        const compressedDataBuffer = Buffer.from(compressedData);
        const bytes = Buffer.byteLength(compressedDataBuffer);

        const dataStore = {
            value: compressedData,
            bytes: bytes,
        };
        this._data.set(key, dataStore);
        this.size += dataStore.bytes;
        return value;
    }
    /**
     * removes an entry
     * @param {String} key the key of the data you wish to delete
     */
    delete(key) {
        const test = this._data.get(key);
        if (!test) {
            return null;
        }
        this.size -= test.bytes;
        this._data.delete(key);
    }
}

const instance = new QDCache();
Object.freeze(instance);

module.exports = instance;