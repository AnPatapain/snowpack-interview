"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let corsOptions = {
    origin: function (origin, callback) {
        let allowed_origin = [
            "http://localhost:3000"
        ];
        if (typeof origin === 'string' && allowed_origin.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not Allowed by CORS"));
        }
    }
};
let corsConfig = {
    corsOptions
};
exports.default = corsConfig;
