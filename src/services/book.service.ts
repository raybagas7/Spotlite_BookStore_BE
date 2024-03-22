import * as cache from 'memory-cache';
import { AppDataSource } from '../data-source';
import { Book } from '../entity/Book.entity';
import {
  BookPayload,
  BookRepositoryInterface,
} from '../interfaces/book.interface';
import { BookTag } from '../entity/BookTag.entity';

export class BookService implements BookRepositoryInterface {
  async findPaginated(page: number = 1, size: number = 4) {
    const offset = (page - 1) * size;
    const data = cache.get(`data_${page}`);
    if (data) {
      console.log('serving from cache');
      return data;
    } else {
      console.log('serving from db');
      const bookRepository = AppDataSource.getRepository(Book);
      const books = await bookRepository.find({ skip: offset, take: size });
      cache.put(`data_${page}`, books, 10000);
      return books;
    }
  }

  async create(book: BookPayload, user_id: string) {
    const { title, cover, point } = book;
    const bookData = new Book();
    bookData.title = title;
    bookData.cover = cover;
    bookData.point = point;
    bookData.writer_id = user_id;
    const bookRepository = AppDataSource.getRepository(Book);
    const data = await bookRepository.save(bookData);

    return data;
  }

  async delete(book_id: string) {
    try {
      const bookRepository = AppDataSource.getRepository(Book);
      const book = await bookRepository.findOne({
        where: { book_id },
      });
      const res = await bookRepository.remove(book);
      return res;
    } catch (error) {
      return error;
    }
  }

  async addTagsToBook(book_id: string, tagIds: string[]): Promise<void> {
    const bookTagRepository = AppDataSource.getRepository(BookTag);
    const promises = tagIds.map(async (tagId) => {
      const bookTag = new BookTag();
      bookTag.book_id = book_id;
      bookTag.tag_id = tagId;
      return bookTagRepository.save(bookTag);
    });
    await Promise.all(promises);
  }

  async findById(book_id: string) {
    try {
      return 'a';
    } catch (error) {
      return error;
    }
  }
}
