import { check } from 'express-validator';

export const createOrderValidator = [
  check('book_id')
    .notEmpty()
    .withMessage('book_id is required')
    .isString()
    .withMessage('book_id must be a string'),
  check('writer_id')
    .notEmpty()
    .withMessage('writer_id is required')
    .isString()
    .withMessage('writer_id must be a string'),
  check('point')
    .notEmpty()
    .withMessage('point is required')
    .isNumeric()
    .withMessage('point must be a number'),
];
