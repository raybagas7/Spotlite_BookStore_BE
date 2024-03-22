import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';
import { OrderRepository } from '../repository/order.repository';
import { OrderService } from '../services/order.service';

export class OrderController {
  static async getUserOrder(req: Request, res: Response) {
    try {
    } catch (error) {}
  }

  static async createOrder(req: Request, res: Response) {
    try {
      const decoded = jwt.verify(
        req.headers.authorization.split(' ')[1],
        process.env.JWT_SECRET
      ) as JwtPayload;

      const customer_id = decoded.id;

      const orderService = new OrderRepository(new OrderService());
      const order = await orderService.create(req.body, customer_id);

      return res.status(200).json({
        data: order,
        message: 'Order Created!',
      });
    } catch (error) {}
  }

  static async deleteOrder(req: Request, res: Response) {
    try {
    } catch (error) {}
  }
}
