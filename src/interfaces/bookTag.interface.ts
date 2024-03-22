export interface BookTagPayload {
  tag_id: string;
  book_id: string;
}

export interface BookTagInterface {
  tag_id: string;
  book_id: string;
}

export interface BookTagRepositoryInterface {
  create(bookTag: BookTagInterface): Promise<BookTagInterface[]>;
}
