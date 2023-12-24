import express from "express";
import pixabayRouter from "./pixabay.routes";
const router = express.Router();

router.use(pixabayRouter);

export default router;