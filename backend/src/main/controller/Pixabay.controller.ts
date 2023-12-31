import BaseService from "../services/APIService/BaseService";
import AxiosRequestError from "../errors/AxiosRequestError";
import AxiosResponseError from "../errors/AxiosResponseError";
import express from "express";
import LRUCache from "../cache/LRUCache";


let getImagesByQuery = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (typeof req.query.q !== 'string') return res.status(200).send("Query is missing");
    try {
        // Search on Cache first
        const lruCache: LRUCache<Object[]> = LRUCache.getInstance(100);
        const data = lruCache.get(req.query.q);

        // If there is no such data in Cache then search on Database and update Cache
        if(!data) {
            const response = await BaseService.get("",
                { params: {q: req.query.q, image_type: "photo", pretty: "tr"} });
            lruCache.put(req.query.q, response.data);
            return res.status(200).json(response.data);
        }

        return res.status(200).json(data);

    } catch (error: any) {
        if (error.request) return next(new AxiosRequestError(error));
        else if (error.response) return next(new AxiosResponseError(error));
        else next(new Error("Unknown Error with Axios"));
    }
}

const pixabayController = {
    getImagesByQuery
}
export default pixabayController;