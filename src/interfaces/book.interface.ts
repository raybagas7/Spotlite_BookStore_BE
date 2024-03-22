import { Book } from '../entity/Book.entity';

export interface BookPayload {
  title: string;
  cover: string;
  point: number;
}
export interface BookInterface {
  book_id: string;
  title: string;
  cover: string;
  point: number;
  writer_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface BookRepositoryInterface {
  findPaginated(page: number, size: number): Promise<Book[]>;
  create(book: BookPayload, user_id: string): Promise<Book>;
  addTagsToBook(book_id: string, tagIds: string[]): Promise<void>;
  delete(book_id: string): Promise<BookInterface>;
  findById(book_id: string): Promise<BookInterface | null>;
}
