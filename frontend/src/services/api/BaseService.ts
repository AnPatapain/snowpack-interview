import axios from "axios";
import appConfig from "../../configs/APIConfig";
import {JWT_TOKEN} from "./api.constant";


const BaseService = axios.create({
    timeout: 60000,
    baseURL: appConfig.apiBaseURL
})

BaseService.interceptors.request.use((config) => {
    let jwtToken = localStorage.getItem(JWT_TOKEN);
    if (jwtToken) {
        config.headers['Authorization'] = 'Bearer ' + jwtToken;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

export default BaseService;