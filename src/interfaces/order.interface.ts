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
  findUserOrder(): Promise<OrderInterface[]>;
  create(order: OrderPayload): Promise<Order>;
  delete(order_id: string): Promise<void>;
}
