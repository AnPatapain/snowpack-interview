declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            PIXAPAY_ENDPOINT: string;
            PIXABAY_API_KEY: string;
        }
    }
}
export {};