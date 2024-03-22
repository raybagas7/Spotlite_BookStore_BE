import * as express from 'express';
import { authentification } from '../middleware/auth.middleware';
import { BookController } from '../controllers/book.controller';
import { authorization } from '../middleware/authorization';

const Router = express.Router();

Router.get('/orders', authentification, BookController.getBookPaginated);
Router.post(
  '/orders',
  authentification,
  authorization(['user', 'admin']),
  BookController.createBook
);
Router.delete(
  '/orders/:order_id',
  authentification,
  authorization(['user', 'admin']),
  BookController.deleteBook
);
export { Router as bookRouter };
