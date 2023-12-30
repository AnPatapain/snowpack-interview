import express from "express"
import authController from "../controller/Auth.controller";
const router = express.Router()

router.route("/auth/signup")
    .post(authController.signUp);


router.route("/auth/signin")
    .post(authController.signIn);


export default router;