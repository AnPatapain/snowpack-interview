import AxiosRequestError from "../errors/AxiosRequestError";
import AxiosResponseError from "../errors/AxiosResponseError";
import express from "express";
import PixabayService from "../services/Pixabay.service";


let getImagesByQuery = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (typeof req.query.q !== 'string') return res.status(200).send("Query is missing");
    let page = "1";
    if(typeof req.query.page === "string") page = req.query.page;
    try {
        const data = await PixabayService.searchImage(PixabayService.SearchStrategy.WITH_CACHE, req.query.q, page);
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