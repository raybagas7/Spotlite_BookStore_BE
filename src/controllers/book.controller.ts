import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Book } from '../entity/Book.entity';
import { BookService } from '../services/book.service';
import { BookRepository } from '../repository/book.repository';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from '../interfaces/auth.interface';

export class BookController {
  static async getBookPaginated(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const size = parseInt(req.query.pageSize as string) || 4;
      const bookService = new BookRepository(new BookService());
      const books = await bookService.findPaginated(page, size);
      return res.status(200).json({
        data: books,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async createBook(req: Request, res: Response) {
    try {
      const decoded = jwt.verify(
        req.headers.authorization.split(' ')[1],
        process.env.JWT_SECRET
      ) as JwtPayload;

      const user_id = decoded.id;

      const bookService = new BookRepository(new BookService());
      const book = await bookService.create(req.body, user_id);
      return res.status(200).json({
        data: book,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteBook(req: Request, res: Response) {
    try {
      const { book_id } = req.params;
      const bookService = new BookRepository(new BookService());
      const book = await bookService.delete(book_id);
      return res.status(200).json({
        data: book,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
