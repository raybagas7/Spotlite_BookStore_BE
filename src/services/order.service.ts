import { AppDataSource } from '../data-source';
import { Order } from '../entity/Order.entity';
import {
  OrderPayload,
  OrderRepositoryInterface,
} from '../interfaces/order.interface';

export class OrderService implements OrderRepositoryInterface {
  async findUserOrder(user_id: string, page: number, size: number) {
    const orderRepository = AppDataSource.getRepository(Order);
    const skip = (page - 1) * size;

    const orders = await orderRepository
      .createQueryBuilder('order')
      .innerJoinAndSelect('order.book', 'book')
      .leftJoinAndSelect('order.writer', 'writer')
      .select([
        'order.order_id',
        'order.book_id',
        'order.customer_id',
        'order.writer_id',
        'order.point',
        'writer.id',
        'writer.name',
        'writer.email',
        'book.book_id',
        'book.title',
        'book.cover',
      ])
      .where('order.customer_id = :user_id', { user_id })
      .skip(skip)
      .take(size)
      .getMany();

    return orders;
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
