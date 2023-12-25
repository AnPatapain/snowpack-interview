import {Express} from "express";
import apiRouter from "../routes";
import errorHandler from "../errors/ErrorHandler";

let injectRoutes = (server: Express) => {
    server.get("/", (req, res, next) => {
        res.status(200).send("Backend works");
    })

    server.use("/api", apiRouter);

    server.use(errorHandler);

    server.use((req, res, next) => {
        res.status(404).send("Invalid Path");
    })
}

export default {
    injectRoutes
}