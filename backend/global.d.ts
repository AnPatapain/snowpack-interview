declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            PIXAPAY_ENDPOINT: string;
            PIXABAY_API_KEY: string;
            MONGO_URI: string;
            DB_NAME: string;
            JWT_SECRET: string;
        }
    }
}
export {};