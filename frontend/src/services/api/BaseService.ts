import axios from "axios";
import appConfig from "../../configs/APIConfig";


const BaseService = axios.create({
    timeout: 60000,
    baseURL: appConfig.apiBaseURL,
    // params: {
    //     key: appConfig.apiKey
    // }
})

export default BaseService;