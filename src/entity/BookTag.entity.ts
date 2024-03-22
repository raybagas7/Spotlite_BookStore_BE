import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'book_tags' })
export class BookTag {
  @PrimaryColumn('uuid')
  book_id: string;

  @PrimaryColumn('uuid')
  tag_id: string;
}
