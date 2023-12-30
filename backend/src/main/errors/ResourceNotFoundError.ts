import BaseError from "./BaseError";

class ResourceNotFoundError extends BaseError {
    constructor(message: string) {
        super(404, message);
    }
}

export default ResourceNotFoundError;