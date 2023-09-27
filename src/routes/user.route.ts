import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middleware';
import UserController from '../controllers/user.controller';

const userRouter: Router = express.Router();

const authInstance = new AuthMiddleware();
const userInstance = new UserController();
//get an user

userRouter.get('/:uid', authInstance.isAuthenticated, userInstance.getAnUser);

//delete an user
userRouter.delete('/:uid', authInstance.isAuthenticated);

//update an user

userRouter.put('/:uid', authInstance.isAuthenticated);

//get all users

userRouter.get('/', authInstance.isAuthenticated, authInstance.isAdmin);

export default userRouter;
