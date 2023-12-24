"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("../routes"));
let injectRoutes = (server) => {
    server.get("/", (req, res, next) => {
        res.status(200).send("Backend works");
    });
    server.use("/api", routes_1.default);
    server.use((req, res, next) => {
        res.status(404).send("Invalid Path");
    });
};
exports.default = {
    injectRoutes
};
