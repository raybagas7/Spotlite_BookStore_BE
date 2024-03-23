import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';
import { OrderRepository } from '../repository/order.repository';
import { OrderService } from '../services/order.service';
import { UserRepository } from '../repository/user.repository';
import { UserService } from '../services/user.service';

export class OrderController {
  static async getUserOrder(req: Request, res: Response) {
    try {
      const decoded = jwt.verify(
        req.headers.authorization.split(' ')[1],
        process.env.JWT_SECRET
      ) as JwtPayload;
      const page = parseInt(req.query.page as string) || 1;
      const size = parseInt(req.query.size as string) || 2;
      const user_id = decoded.id;
      const orderService = new OrderRepository(new OrderService());
      const orders = await orderService.findUserOrder(user_id, page, size);

      return res.status(200).json({
        data: orders,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async createOrder(req: Request, res: Response) {
    try {
      const decoded = jwt.verify(
        req.headers.authorization.split(' ')[1],
        process.env.JWT_SECRET
      ) as JwtPayload;
      const customer_id = decoded.id;
      const { point } = req.body;

      const userService = new UserRepository(new UserService());
      await userService.subtractUserPoint(point, customer_id);

      const orderService = new OrderRepository(new OrderService());
      const order = await orderService.create(req.body, customer_id);

      return res.status(200).json({
        data: order,
        message: 'Order Created!',
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteOrder(req: Request, res: Response) {
    try {
      const { order_id } = req.params;
      const orderService = new OrderRepository(new OrderService());
      await orderService.detele(order_id);
      return res.status(200).json({
        message: 'Order has been deleted',
      });
    } catch (error) {}
  }
}
