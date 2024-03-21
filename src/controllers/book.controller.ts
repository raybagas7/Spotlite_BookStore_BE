import { Request, Response } from 'express';
import * as cache from 'memory-cache';
import { AppDataSource } from '../data-source';
import { Book } from '../entity/Book.entity';

export class BookController {
  static async getAllBook(req: Request, res: Response) {
    const data = cache.get('data');
    if (data) {
      console.log('serving from cache');
      return res.status(200).json({
        data,
      });
    } else {
      console.log('serving from db');
      const movieRepository = AppDataSource.getRepository(Book);
      const books = await movieRepository.find();
      cache.put('data', books, 10000);

      return res.status(200).json({
        data: books,
      });
    }
  }
  static async createBook(req: Request, res: Response) {
    const { title, cover, point, writer_id } = req.body;
    const book = new Book();
    book.title = title;
    book.cover = cover;
    book.point = point;
    book.writer_id = writer_id;
    const bookRepository = AppDataSource.getRepository(Book);
    await bookRepository.save(book);
    return res.status(200).json({ message: 'Book created successfully', book });
  }

  //   static async updateBook(req: Request, res: Response) {
  //     const { id } = req.params;
  //     const { title, description, director, year, rating, image, cast } =
  //       req.body;
  //     const movieRepository = AppDataSource.getRepository(Book);
  //     const movie = await movieRepository.findOne({
  //       where: { id },
  //     });
  //     movie.title = title;
  //     movie.description = description;
  //     movie.director = director;
  //     movie.year = year;
  //     movie.rating = rating;
  //     movie.image = image;
  //     movie.cast = cast;
  //     await movieRepository.save(movie);
  //     return res
  //       .status(200)
  //       .json({ message: 'Movie updated successfully', movie });
  //   }

  static async deleteBook(req: Request, res: Response) {
    const { book_id } = req.params;
    const bookRepository = AppDataSource.getRepository(Book);
    const book = await bookRepository.findOne({
      where: { book_id },
    });
    await bookRepository.remove(book);
    return res.status(200).json({ message: 'Book deleted successfully', book });
  }
}
