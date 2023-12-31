import express from "express";
import pixabayRouter from "./Pixabay.routes";
import authRoutes from "./Auth.routes";
const router = express.Router();

router.use(authRoutes);
router.use(pixabayRouter);

export default router;