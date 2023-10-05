"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = __importDefault(require("../controllers/auth.controllers"));
const authRouter = express_1.default.Router();
const authInstance = new auth_controllers_1.default();
//register
authRouter.post('/register', authInstance.register);
//login
authRouter.post('/login', authInstance.login);
exports.default = authRouter;
