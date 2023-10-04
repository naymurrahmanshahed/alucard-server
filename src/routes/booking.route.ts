import express, { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middleware';
import BookingController from '../controllers/booking.controller';

const bookingRouter: Router = express.Router();

const authInstance = new AuthMiddleware();

const bookingInstance = new BookingController();

//create a booking

bookingRouter.post(
  '/create/:bid',
  authInstance.isAuthenticated,
  bookingInstance.createABooking
);

//get all bookings for an user

bookingRouter.get('/read/:uid', authInstance.isAuthenticated);

//delete a booking

bookingRouter.delete('/bid', authInstance.isAuthenticated);

//get all bookings

bookingRouter.get('/', authInstance.isAuthenticated, authInstance.isAdmin);

export default bookingRouter;
