const appConfig = {
    apiBaseURL: process.env.NODE_ENV==='development' ? process.env.REACT_APP_LOCAL_BASE_URL :
                                                       process.env.REACT_APP_PROD_BASE_URL,
    apiKey: process.env.REACT_APP_PIXABAY_API_KEY
}

export default appConfig;