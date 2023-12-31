import corsConfig from "./cors.config";
import apiConfig from "./api.config";
import databaseConfig from "./database.config";
import authConfig from "./auth.config";
import e from "cors";

import dotenv from "dotenv";
dotenv.config();

interface ConfigType {
    corsConfig: {
        corsOptions: e.CorsOptions;
    };
    apiConfig: {
        apiBaseURL: string | undefined;
        apiKey: string | undefined;
    };
    databaseConfig: {
        connect: () => void;
    };
    authConfig: {
        jwt_secret: string;
    }
    // other config type
}

export {ConfigType};

export default {
    corsConfig,
    apiConfig,
    databaseConfig,
    authConfig
};