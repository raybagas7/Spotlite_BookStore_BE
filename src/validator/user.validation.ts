import { check } from 'express-validator';

export const signupValidator = [
  check('name')
    .notEmpty()
    .withMessage('Name is required')
    .isString()
    .withMessage('Name must be a string'),
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email address'),
  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .isString()
    .withMessage('Password must be a string'),
  check('role').isString().withMessage('Role must be a string').optional(),
];

export const loginValidator = [
  check('email').isEmail().notEmpty(),
  check('password').isString().notEmpty(),
];
