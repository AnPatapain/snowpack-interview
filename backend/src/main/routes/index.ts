import express from "express";
import pixabayRouter from "./Pixabay.routes";
import authRoutes from "./Auth.routes";
import collectionRoutes from "./Collection.routes";
import userRoutes from "./User.routes";
const router = express.Router();

router.use(authRoutes);
router.use(pixabayRouter);
router.use(collectionRoutes);
router.use(userRoutes);

export default router;