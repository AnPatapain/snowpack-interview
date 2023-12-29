import BaseError from "./BaseError";

class BadCredentialError extends BaseError {
    constructor(message: string) {
        super(401, message);
    }
}

export default BadCredentialError;