import {
  OrderPayload,
  OrderRepositoryInterface,
} from '../interfaces/order.interface';

export class OrderRepository {
  constructor(private orderRepository: OrderRepositoryInterface) {}

  async findUserOrder() {
    return await this.orderRepository.findUserOrder();
  }

  async create(order: OrderPayload) {
    return await this.orderRepository.create(order);
  }

  async detele(order_id: string) {
    return await this.orderRepository.delete(order_id);
  }
}
