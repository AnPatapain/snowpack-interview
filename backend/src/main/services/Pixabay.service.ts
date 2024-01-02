import LRUCache from "../cache/LRUCache";
import BaseService from "./APIService/BaseService";
import config from "../config"

enum SearchStrategy {
    WITH_CACHE="searchWithCache",
    NO_CACHE="searchNoCache"
}

const searchWithCache = async (query: string) => {
    // Search on Cache first
    const lruCache: LRUCache<Object[]> = LRUCache.getInstance(config.cacheConfig.CACHE_MAX_SIZE);
    const data = lruCache.get(query);

    // If there is no such data in Cache then search on Database and update Cache
    if(!data) {
        const response = await BaseService.get("",
            { params: {q: query, image_type: "photo", pretty: "tr"} });
        lruCache.put(query, response.data);
        return response.data;
    }

    return data;
}

const searchNoCache = async (query: string) => {
    const response = await BaseService.get("",
        { params: {q: query, image_type: "photo", pretty: "tr"} });
    return response.data;
}

const searchImageStrategy = {
    searchWithCache,
    searchNoCache
}

const searchImage = async (strategy: SearchStrategy, query: string) => {
    return await searchImageStrategy[strategy](query);
}

export default {
    SearchStrategy,
    searchImage
};