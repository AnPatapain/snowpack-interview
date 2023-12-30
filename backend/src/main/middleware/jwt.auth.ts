import express from "express";

import jwt from "jsonwebtoken";
import BadCredentialError from "../errors/BadCredentialError";
import authConfig from "../config/auth.config";


let verifyJwtToken = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(!token) next(new BadCredentialError("JWT is missing"));
        const jwtReturn = jwt.verify(token as string, authConfig.jwt_secret) as jwt.JwtPayload;
        console.log(jwtReturn);
        return next()
    } catch (err) {
        next(new BadCredentialError("JWT authentication errors"));
    }
}

export default verifyJwtToken