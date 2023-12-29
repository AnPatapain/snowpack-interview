import express from "express";
import pixabayRouter from "./Pixabay.routes";
import authRoutes from "./Auth.routes";
const router = express.Router();

router.use(pixabayRouter);
router.use(authRoutes);

export default router;