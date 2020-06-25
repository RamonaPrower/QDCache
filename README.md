# QDCache
A quick and dirty singleton in-memory storage system with zlib compression

## Installation
```
>npm i QDCache
```
## Use
```javascript
const qdCache = require('QDCache');
```

## qdCache.set(key, value)
Sets the item in the cache, this must be in a format that can be JSON.stringify'd
```javascript
const qdCache = require('QDCache')
qdCache.set(key, value)
```

## qdCache.get(key)
Returns the data from the cache, or returns null if it doesn't exist.
```javascript
const qdCache = require('QDCache')
qdCache.set(key, value);
const data = qdCache.get(key);
```

## qdCache.delete(key)
Deletes a value from the cache, or returns null if it doesn't exist.
```javascript
const qdCache = require('QDCache')
qdCache.set(key, value);
qdCache.delete(key);
```

## qdCache.clear()
Clears all of the records from the cache.
```javascript
const qdCache = require('QDCache')
qdCache.set(key, value);
qdCache.clear();
```

The hope is to build on this, and not break things via updates, but this is mostly for my own personal use. Still, if you just want to globally store things in memory and get them anywhere, you're welcome to try this out, or pull request new features if you wish to help out.