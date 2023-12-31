import express from "express";
import verifyJwtToken from "../middleware/jwt.auth";
import pixabayController from "../controller/Pixabay.controller";

const router = express.Router();

router.route("/pixabay").get(pixabayController.getImagesByQuery)

export default router;