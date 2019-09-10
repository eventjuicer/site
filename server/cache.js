
import LRUCache from 'lru-cache'

export default new LRUCache({
    max: 100,
    maxAge: 1000 * 60 * 60 // 1hour
});