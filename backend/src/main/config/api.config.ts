import dotenv from "dotenv";
dotenv.config();

const apiConfig = {
    apiBaseURL: process.env.PIXAPAY_ENDPOINT,
    apiKey: process.env.PIXABAY_API_KEY
}

export default apiConfig;