import axios from "axios";
import apiConfig from "../../config/api.config";


const BaseService = axios.create({
    timeout: 60000,
    baseURL: apiConfig.apiBaseURL,
    params: {
        key: apiConfig.apiKey
    }
})

export default BaseService;