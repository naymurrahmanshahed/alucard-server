import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middleware';
import beautyPackageController from '../controllers/beautyPackage.controller';

const beautyPackageRouter: Router = express.Router();

const authInstance = new AuthMiddleware();
const beautyPackageInstance = new beautyPackageController();
//get all beauty packages

beautyPackageRouter.get('/', beautyPackageInstance.getAnBeautypackages);

//get a beauty package
beautyPackageRouter.get('/:bid');

//create a beauty package

beautyPackageRouter.post(
  '/',
  authInstance.isAuthenticated,
  authInstance.isAdmin
);

//update a beauty package
beautyPackageRouter.put(
  '/:bid',
  authInstance.isAuthenticated,
  authInstance.isAdmin
);

//delete a beauty package

beautyPackageRouter.delete(
  '/:bid',
  authInstance.isAuthenticated,
  authInstance.isAdmin
);

export default beautyPackageRouter;
