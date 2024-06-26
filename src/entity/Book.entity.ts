import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from './Order.entity';
import { BookTag } from './BookTag.entity';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn('uuid')
  book_id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  cover: string;

  @Column({ nullable: false })
  point: number;

  @Column({ nullable: false })
  writer_id: string;

  @OneToMany(() => Order, (order) => order.book)
  orders: Order[];

  @OneToMany(() => BookTag, (bookTag) => bookTag.book)
  bookTags: BookTag[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
