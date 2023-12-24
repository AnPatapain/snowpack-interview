import e from "cors";

let corsOptions: e.CorsOptions = {
    origin: function(origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
        let allowed_origin = [
            "http://localhost:3000"
        ]
        if(typeof origin === 'string' && allowed_origin.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        }else {
            callback(new Error("Not Allowed by CORS"))
        }
    }
}

let corsConfig = {
    corsOptions
}

export default corsConfig;