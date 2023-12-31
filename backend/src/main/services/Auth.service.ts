import userDao from "../DAO/User.dao";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ResourceNotFoundError from "../errors/ResourceNotFoundError";
import DuplicateEmailError from "../errors/DuplicateEmailError";
import BadCredentialError from "../errors/BadCredentialError";
import config from "../config";

interface AuthDTO {
    email: string;
    password: string;
}


let signUp = async (data: AuthDTO) => {
    const existingUser = await userDao.findByEmail(data.email)
    if (existingUser) throw new DuplicateEmailError("Email is already existed")
    return await userDao.createOne(data.email, data.password)
}

let signIn = async (data: AuthDTO) => {
    const existingUser = await userDao.findByEmail(data.email)
    if (!existingUser) throw new ResourceNotFoundError("User not found");

    let passwordIsValid = bcrypt.compareSync(data.password, existingUser.password)

    if (!passwordIsValid) {
        throw new BadCredentialError("Wrong username or password")
    }

    const token = jwt.sign({ id: existingUser.id },
        config.authConfig.jwt_secret,
        {
            algorithm: "HS256",
            expiresIn: 30 * 24 * 60 * 60
        });
    return {
        id: existingUser._id,
        token: token,
        email: existingUser.email,
    }
}
let authService = {
    signUp,
    signIn,
}

export default authService;