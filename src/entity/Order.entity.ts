import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
