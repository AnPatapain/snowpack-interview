import User from "../model/User.model";
import bcrypt from "bcrypt"
import ResourceNotFoundError from "../errors/ResourceNotFoundError";

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

let createOrUpdateCollection = async (userId: string, collectionName: string, image: string) => {
    const user = await User.findById(userId);
    if (!user) throw new ResourceNotFoundError(`User with ID ${userId} not found`);
    let collection = user.collections.find(c => c.name === collectionName);
    if (!collection) {
        // If the collection does not exist, create a new one with the image
        collection = { name: collectionName, images: [image] };
        user.collections.push(collection);
    } else {
        // If the collection exists and does not contain the image, add the image
        if (!collection.images.includes(image)) {
            collection.images.push(image);
        }
    }
    // Mark the collections array as modified
    user.markModified('collections');

    try {
        await user.save();
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }

    return collection;
}


let userDao = {
    createOne,
    findByEmail,
    findById,
    createOrUpdateCollection
}
export default userDao;