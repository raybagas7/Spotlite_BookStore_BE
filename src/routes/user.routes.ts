import * as express from 'express';
import { authentification } from '../middleware/auth.middleware';
import { UserController } from '../controllers/user.controller';
import { authorization } from '../middleware/authorization';
import { AuthController } from '../controllers/auth.controller';
import { validate } from '../middleware/validate.middleware';
import { loginValidator, signupValidator } from '../validator/user.validator';
const Router = express.Router();

Router.get(
  '/users',
  authentification,
  authorization(['admin']),
  UserController.getUsers
);
Router.get(
  '/profile',
  authentification,
  authorization(['user', 'admin']),
  AuthController.getProfile
);
Router.post('/signup', signupValidator, validate, UserController.signup);
Router.post('/login', loginValidator, AuthController.login);

export { Router as userRouter };
