"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pixabay_routes_1 = __importDefault(require("./pixabay.routes"));
const router = express_1.default.Router();
router.use(pixabay_routes_1.default);
exports.default = router;
