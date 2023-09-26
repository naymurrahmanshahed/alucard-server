import express, { Router } from 'express';
import AuthController from '../controllers/auth.controllers';

const authRouter: Router = express.Router();

const authInstance = new AuthController();

//register

authRouter.post('/register', authInstance.register);

//login

authRouter.post('/login');

export default authRouter;
