import express, {response} from "express";
import BaseService from "../services/APIService/BaseService";
import AxiosResponseError from "../errors/AxiosResponseError";
import AxiosRequestError from "../errors/AxiosRequestError";

const router = express.Router();

router.route("/pixabay")
    .get(async (req, res, next) => {
        // if(typeof req.query.q === 'string') console.log(req.query.q, encodeURIComponent(req.query.q));

        if (typeof req.query.q !== 'string') return res.status(200).send("Query is missing");
        try {
            const response = await BaseService.get("",
                { params: {q: req.query.q, image_type: "photo", pretty: "tr"} });
            return res.status(200).json(response.data);
        } catch (error: any) {
            if (error.request) return next(new AxiosRequestError(error));
            else if (error.response) return next(new AxiosResponseError(error));
            else console.log('Error', error.message);
        }

    })

export default router;