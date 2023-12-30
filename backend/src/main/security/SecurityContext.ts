class SecurityContext {
    userID: string;
    email: string;

    constructor(userID: string, email: string) {
        this.userID = userID;
        this.email = email;
    }

    public toString(): string {
        return `SecurityContext: { userID: ${this.userID}, email: ${this.email} }`;
    }
}

export default SecurityContext;