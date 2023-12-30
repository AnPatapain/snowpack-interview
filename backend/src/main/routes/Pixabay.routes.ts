import express, {response} from "express";
import BaseService from "../services/APIService/BaseService";
import AxiosResponseError from "../errors/AxiosResponseError";
import AxiosRequestError from "../errors/AxiosRequestError";
import verifyJwtToken from "../middleware/jwt.auth";

const router = express.Router();

router.route("/pixabay")
    .get([verifyJwtToken], async (req: express.Request, res: express.Response, next: express.NextFunction) => {
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