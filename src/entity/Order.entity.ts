import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Book } from './Book.entity';
import { User } from './User.entity';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  order_id: string;

  @Column('uuid', { nullable: false })
  book_id: string;

  @Column('uuid', { nullable: false })
  customer_id: string;

  @Column('uuid', { nullable: false })
  writer_id: string;

  @Column({ nullable: false })
  point: number;

  @ManyToOne(() => Book, (book) => book.orders)
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @ManyToOne(() => User, (user) => user.writerOrders)
  @JoinColumn({ name: 'writer_id', referencedColumnName: 'id' })
  writer: User;
}
