import BaseError from "./BaseError";

class AxiosResponseError extends BaseError {
    constructor(error: any) {
        super(error.response.status, error.response.data || error.message || "error during response");
    }
}

export default AxiosResponseError;