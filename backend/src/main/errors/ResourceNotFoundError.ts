import BaseError from "./BaseError";

class ResourceNotFoundError extends BaseError {
    constructor(message: string) {
        super(400, message);
    }
}

export default ResourceNotFoundError;