import UserDao from "../DAO/User.dao";


const createOrUpdateCollection = async (userId: string, collectionName: string, imageUrl: string)=> {

    return await UserDao.createOrUpdateCollection(userId, collectionName, imageUrl);
}

export default {
    createOrUpdateCollection,
}