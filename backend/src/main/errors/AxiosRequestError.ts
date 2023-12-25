import BaseError from "./BaseError";

class AxiosRequestError extends BaseError {
    constructor(error: any) {
        super(400, "Error during request");
    }
}

export default AxiosRequestError;