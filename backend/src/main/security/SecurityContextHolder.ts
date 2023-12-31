import SecurityContext from "./SecurityContext";

class SecurityContextHolder {
    private static instance: SecurityContextHolder;
    private securityContext: SecurityContext | undefined;

    private constructor() {
    }

    public static getInstance(): SecurityContextHolder {
        if(!SecurityContextHolder.instance) {
            SecurityContextHolder.instance = new SecurityContextHolder();
        }
        return SecurityContextHolder.instance;
    }

    public setSecurityContext(securityContext: SecurityContext): void {
        SecurityContextHolder.instance.securityContext = securityContext;
    }

    public getSecurityContext(): SecurityContext | null {
        return SecurityContextHolder.instance.securityContext ? SecurityContextHolder.instance.securityContext : null;
    }
}


export default SecurityContextHolder;