export interface BookPayload {
  title: string;
  cover: string;
  point: number;
  writer_id: string;
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
  findPaginated(page: number, size: number): Promise<BookInterface[]>;
  create(book: BookPayload, user_id: string): Promise<BookPayload>;
  //   update(id: string, car: BookInterface): Promise<BookInterface>;
  delete(book_id: string): Promise<BookInterface>;
  findById(book_id: string): Promise<BookInterface | null>;
}
