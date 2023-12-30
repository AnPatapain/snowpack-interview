import BaseService from "./api/BaseService";

const signUp = async (email: string, password: string) => {
    try {
        return await BaseService.post("/api/auth/signup/", {email, password});
    }catch(error) {
        throw error;
    }
}

const signIn = async (email: string, password: string) => {
    try {
        return await BaseService.post("/api/auth/signin/", {email, password});
    }catch(error) {
        throw error;
    }
}

export default {
    signUp,
    signIn
}