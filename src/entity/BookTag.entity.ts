import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Book } from './Book.entity';
import { Tag } from './Tag.entity';

@Entity({ name: 'book_tags' })
export class BookTag {
  @PrimaryColumn('uuid')
  book_id: string;

  @PrimaryColumn('uuid')
  tag_id: string;

  @ManyToOne(() => Book, (book) => book.bookTags, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @ManyToOne(() => Tag, (tag) => tag.bookTags, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tag_id' })
  tag: Tag;
}
