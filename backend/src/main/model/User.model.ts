import mongoose from "mongoose";

interface ICollection {
    name: string;
    images: string[];
}

interface IUser {
    email: string;
    password: string;
    collections: ICollection[];
}

const collectionSchema = new mongoose.Schema<ICollection>({
    name: {type: String, required: true},
    images: [{type: String}]
})

const userSchema = new mongoose.Schema<IUser>({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true},
    collections: [collectionSchema]
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;