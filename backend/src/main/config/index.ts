import corsConfig from "./cors.config";
import e from "cors";

interface ConfigType {
    corsConfig: {
        corsOptions: e.CorsOptions
    };
    // other config type
}

export {ConfigType};

export default {
    corsConfig
};