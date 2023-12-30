import mongoose from "mongoose";

interface IUser {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema<IUser>({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true},
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;