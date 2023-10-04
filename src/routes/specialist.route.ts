import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middleware';
import SpecialistController from '../controllers/specialist.controller';

const specialistRouter: Router = express.Router();

const authInstance = new AuthMiddleware();

const specialistInstance = new SpecialistController();

//get all specialists

specialistRouter.get('/', specialistInstance.getAllSpecialists);

//get a specialist
specialistRouter.get('/:sid', specialistInstance.getASpecialist);

//create a specialist
specialistRouter.post('/', authInstance.isAuthenticated, authInstance.isAdmin);

//update a specialist
specialistRouter.put(
  '/sid',
  authInstance.isAuthenticated,
  authInstance.isAdmin
);

//delete a specialist
specialistRouter.delete(
  ':sid',
  authInstance.isAuthenticated,
  authInstance.isAdmin
);

export default specialistRouter;
