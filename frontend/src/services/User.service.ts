import BaseService from "./api/BaseService";

const getMyProfile = async () => {
    try {
        const response = await BaseService.get("/api/me");
        return response.data;
    }catch(error) {
        throw error;
    }
}

export default {
    getMyProfile,
}