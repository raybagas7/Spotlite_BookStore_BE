import * as express from 'express';
import { authentification } from '../middleware/auth.middleware';
import { BookController } from '../controllers/book.controller';
import { authorization } from '../middleware/authorization';
import { createBookValidator } from '../validator/book.validation';
import { validate } from '../middleware/validate.middleware';

const Router = express.Router();

Router.get('/books', BookController.getBookPaginated);
Router.post(
  '/books',
  authentification,
  createBookValidator,
  validate,
  BookController.createBook
);

// Router.put(
//   '/movies/:id',
//   authentification,
//   authorization(['admin']),
//   MovieController.updateMovie
// );
Router.delete(
  '/books/:id',
  authentification,
  authorization(['admin']),
  BookController.deleteBook
);
export { Router as bookRouter };
