import express from "express"
import verifyJwtToken from "../middleware/jwt.auth";
import UserController from "../controller/User.controller";
const router = express.Router();

router.route("/me")
    .get([verifyJwtToken], UserController.getMe);

export default router;