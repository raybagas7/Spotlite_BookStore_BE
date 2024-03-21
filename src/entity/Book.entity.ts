import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn('uuid')
  book_id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  cover: number;

  @Column({ nullable: false })
  point: number;

  @Column({ nullable: false })
  writer_id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
