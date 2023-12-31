import express from 'express';
import verifyJwtToken from '../middleware/jwt.auth';
import collectionController from "../controller/Collection.controller";
const router = express.Router();

router.post('/collections', [verifyJwtToken], collectionController.createOrUpdateCollection);

export default router;
