import { check } from 'express-validator';

export const createBookValidator = [
  check('title')
    .notEmpty()
    .withMessage('title is required')
    .isString()
    .withMessage('title must be a string'),
  check('cover')
    .notEmpty()
    .withMessage('cover is required')
    .isString()
    .withMessage('cover must be a string'),
  check('point')
    .notEmpty()
    .withMessage('point is required')
    .isNumeric()
    .withMessage('point must be a number'),
];
