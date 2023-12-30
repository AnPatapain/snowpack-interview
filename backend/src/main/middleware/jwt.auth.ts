import express from "express";

import jwt from "jsonwebtoken";
import BadCredentialError from "../errors/BadCredentialError";
import authConfig from "../config/auth.config";
import UserDao from "../DAO/User.dao";
import SecurityContext from "../security/SecurityContext";
import SecurityContextHolder from "../security/SecurityContextHolder";


let verifyJwtToken = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(!token) next(new BadCredentialError("JWT is missing"));
        const jwtReturn = jwt.verify(token as string, authConfig.jwt_secret) as jwt.JwtPayload;

        const user = await UserDao.findById(jwtReturn.id);

        if(user) {
            const securityContext = new SecurityContext(user.id, user.email);
            const securityContextHolder =  SecurityContextHolder.getInstance();
            securityContextHolder.setSecurityContext(securityContext);
        }

        return next()
    } catch (err) {
        next(new BadCredentialError("JWT authentication errors"));
    }
}

export default verifyJwtToken