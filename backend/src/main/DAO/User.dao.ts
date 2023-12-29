import User from "../model/User.model";
import bcrypt from "bcrypt"

let createOne = async (email: string, password: string) => {
    const getHashedPassword = (password: string) => {
        return password ? bcrypt.hashSync(password, 10) : null;
    };

    const user = new User({
        email: email,
        password: getHashedPassword(password),
    });

    return await user.save();
}

let findByEmail = async (email: string) => {
    return User.findOne({ email: email })
}

let findById = async (id: string) => {
    return User.findById(id);
}



let userDao = {
    createOne,
    findByEmail,
    findById,
}
export default userDao;