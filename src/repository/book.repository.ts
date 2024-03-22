import {
  BookPayload,
  BookRepositoryInterface,
} from '../interfaces/book.interface';

export class BookRepository {
  constructor(private bookRepository: BookRepositoryInterface) {}
  async findPaginated(page: number, size: number) {
    return await this.bookRepository.findPaginated(page, size);
  }

  async create(book: BookPayload, user_id: string) {
    return await this.bookRepository.create(book, user_id);
  }

  async delete(book_id: string) {
    return await this.bookRepository.delete(book_id);
  }

  async addTagsToBook(bookId: string, tagIds: string[]) {
    return await this.bookRepository.addTagsToBook(bookId, tagIds);
  }

  async findById(book_id: string) {
    return await this.bookRepository.findById(book_id);
  }
}
