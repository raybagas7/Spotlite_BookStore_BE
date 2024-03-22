import * as express from 'express';
import { authentification } from '../middleware/auth.middleware';
import { UserController } from '../controllers/user.controller';
import { authorization } from '../middleware/authorization';
import { AuthController } from '../controllers/auth.controller';
import { check } from 'express-validator';
import { validate } from '../middleware/validate.middleware';
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
Router.post(
  '/signup',
  [
    check('name').isString().notEmpty(),
    check('email').isEmail().notEmpty(),
    check('password').isString().notEmpty(),
    check('role').isString().optional(),
  ],
  validate,
  UserController.signup
);
Router.post(
  '/login',
  [
    check('email').isEmail().notEmpty(),
    check('password').isString().notEmpty(),
  ],
  AuthController.login
);
Router.put(
  '/update/:id',
  authentification,
  authorization(['user', 'admin']),
  UserController.updateUser
);
Router.delete(
  '/delete/:id',
  authentification,
  authorization(['admin']),
  UserController.deleteUser
);
export { Router as userRouter };
