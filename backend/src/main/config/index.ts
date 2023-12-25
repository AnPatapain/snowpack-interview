import corsConfig from "./cors.config";
import apiConfig from "./api.config";

import e from "cors";

interface ConfigType {
    corsConfig: {
        corsOptions: e.CorsOptions;
    };
    apiConfig: {
        apiBaseURL: string | undefined;
        apiKey: string | undefined;
    }
    // other config type
}

export {ConfigType};

export default {
    corsConfig,
    apiConfig
};