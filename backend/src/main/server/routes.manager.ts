import {Express} from "express";
import apiRouter from "../routes";

let injectRoutes = (server: Express) => {
    server.get("/", (req, res, next) => {
        res.status(200).send("Backend works");
    })

    server.use("/api", apiRouter);

    server.use((req, res, next) => {
        res.status(404).send("Invalid Path");
    })
}

export default {
    injectRoutes
}