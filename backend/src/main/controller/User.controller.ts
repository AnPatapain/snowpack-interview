import express, {response} from "express";
import SecurityContextHolder from "../security/SecurityContextHolder";
import SecurityContext from "../security/SecurityContext";
import UserDao from "../DAO/User.dao";

const getMe = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const securityContextHolder= SecurityContextHolder.getInstance();
    const securityContext = securityContextHolder.getSecurityContext();
    if(securityContext) {
        const user = await UserDao.findById(securityContext.userID);
        return res.status(200).json(user);
    }
}

export default {
    getMe
}