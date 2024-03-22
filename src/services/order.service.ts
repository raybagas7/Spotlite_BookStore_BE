import { AppDataSource } from '../data-source';
import { Order } from '../entity/Order.entity';
import {
  OrderPayload,
  OrderRepositoryInterface,
} from '../interfaces/order.interface';

export class OrderService implements OrderRepositoryInterface {
  async findUserOrder(user_id: string) {
    const orderRepository = AppDataSource.getRepository(Order);
    const data = await orderRepository.find({
      where: { customer_id: user_id },
    });
    return data;
  }

  async create(order: OrderPayload, customer_id: string) {
    const { book_id, writer_id, point } = order;
    const orderData = new Order();
    orderData.book_id = book_id;
    orderData.customer_id = customer_id;
    orderData.point = point;
    orderData.writer_id = writer_id;
    const orderRepository = AppDataSource.getRepository(Order);
    const data = await orderRepository.save(orderData);

    return data;
  }

  async delete(order_id: string) {
    try {
      return 'a';
    } catch (error) {
      return error;
    }
  }
}
