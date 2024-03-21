import * as express from 'express';
import { authentification } from '../middleware/auth.middleware';
import { BookController } from '../controllers/book.controller';
import { authorization } from '../middleware/authorization';

const Router = express.Router();

Router.get('/books', authentification, BookController.getAllBook);
Router.post('/books', authentification, BookController.createBook);

// Router.put(
//   '/movies/:id',
//   authentification,
//   authorization(['admin']),
//   MovieController.updateMovie
// );
Router.delete(
  '/movies/:id',
  authentification,
  authorization(['admin']),
  BookController.deleteBook
);
export { Router as bookRouter };
