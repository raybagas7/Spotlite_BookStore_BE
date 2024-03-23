import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BookTag } from './BookTag.entity';

@Entity({ name: 'tags' })
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  tag_id: string;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => BookTag, (bookTag) => bookTag.tag)
  bookTags: BookTag[];
}
