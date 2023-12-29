import BaseError from "./BaseError";

class DuplicateEmailError extends BaseError {
    constructor(message: string) {
        super(400, message);
    }
}

export default DuplicateEmailError;