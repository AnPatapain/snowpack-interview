import express from "express";
import BaseError from "./BaseError";

const errorHandler = (error: BaseError, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(error.statusCode ? error.statusCode : 500).json({
        message: error.message,
    });
}

export default errorHandler;