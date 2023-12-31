import { Request, Response, NextFunction } from 'express';
import SecurityContextHolder from "../security/SecurityContextHolder";
import CollectionService from "../services/Collection.service";

let createOrUpdateCollection = async (req: Request, res: Response, next: NextFunction)=> {
    try {
        // Extracting user from security context
        const userContext = SecurityContextHolder.getInstance().getSecurityContext();

        if (userContext) {
            const { collection, image } = req.body;
            const collectionResult = await CollectionService.createOrUpdateCollection(userContext.userID, collection, image);
            return res.status(200).json({collectionResult});
        }
    } catch (error) {
        next(error);
    }
}

const collectionController = {
    createOrUpdateCollection
}

export default collectionController;
