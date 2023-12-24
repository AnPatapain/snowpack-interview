import express from "express";
const router = express.Router();

router.route("/pixabay")
    .get((req, res, next) => {
        res.status(200).json({"data": "con cac"});
    })

export default router;