import {
  OrderPayload,
  OrderRepositoryInterface,
} from '../interfaces/order.interface';

export class OrderRepository {
  constructor(private orderRepository: OrderRepositoryInterface) {}

  async findUserOrder(user_id: string, page: number, size: number) {
    return await this.orderRepository.findUserOrder(user_id, page, size);
  }

  async create(order: OrderPayload, customer_id: string) {
    return await this.orderRepository.create(order, customer_id);
  }

  async detele(order_id: string) {
    return await this.orderRepository.delete(order_id);
  }
}
