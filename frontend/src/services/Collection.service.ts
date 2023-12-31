import BaseService from "./api/BaseService";

const addUpdateCollections = async (collection: string, image: string) => {
    try {
        return await BaseService.post("/api/collections", {collection, image});
    }catch(error) {
        throw error;
    }
}

export default {
    addUpdateCollections,
}