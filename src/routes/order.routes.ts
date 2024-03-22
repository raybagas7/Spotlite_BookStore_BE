import * as express from 'express';
import { authentification } from '../middleware/auth.middleware';
import { createOrderValidator } from '../validator/order.validator';
import { validate } from '../middleware/validate.middleware';
import { OrderController } from '../controllers/order.controller';

const Router = express.Router();

Router.get('/orders', authentification, OrderController.getUserOrder);
Router.post(
  '/orders',
  createOrderValidator,
  validate,
  authentification,
  OrderController.createOrder
);
Router.delete(
  '/orders/:order_id',
  authentification,
  OrderController.deleteOrder
);
export { Router as orderRouter };
