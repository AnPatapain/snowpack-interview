"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_manager_1 = __importDefault(require("./routes.manager"));
const config_1 = __importDefault(require("../config"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const server = () => {
    let server = (0, express_1.default)();
    let configServer = (config) => {
        server.set("trust proxy", true);
        server.use(body_parser_1.default.json());
        server.use((0, cors_1.default)(config.corsConfig.corsOptions));
    };
    let init = () => {
        configServer(config_1.default);
        routes_manager_1.default.injectRoutes(server);
    };
    let start = () => {
        let port = process.env.PORT;
        server.listen(port, () => {
            console.log("server listening on port " + port);
        });
    };
    return {
        init,
        start
    };
};
exports.default = server;
