import { Order } from '../entity/Order.entity';

export interface OrderPayload {
  book_id: string;
  writer_id: string;
  point: number;
}

export interface OrderInterface {
  order_id: string;
  customer_id: string;
  book_id: string;
  writer_id: string;
  point: number;
}

export interface OrderRepositoryInterface {
  findUserOrder(
    user_id: string,
    page: number,   
    size: number
  ): Promise<OrderInterface[]>;
  create(order: OrderPayload, customer_id: string): Promise<Order>;
  delete(order_id: string): Promise<void>;
}
