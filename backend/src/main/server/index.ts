import express from "express";
import config, {ConfigType} from "../config";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const server = () => {
    let server = express();
    let configServer = (config: ConfigType) => {
        server.set("trust proxy", true);
        server.use(bodyParser.json());
        server.use(cors(config.corsConfig.corsOptions));
    }
    let init = () => {
        configServer(config);
    }

    let start = () => {
        let port = process.env.PORT;
        server.listen(port, () => {
            console.log("server listening on port " + port);
        })
    }

    return {
        init,
        start
    }
}
export default server;