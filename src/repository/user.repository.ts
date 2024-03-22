import {
  SignupPayload,
  UserRepositoryInterface,
} from '../interfaces/user.interface';

export class UserRepository {
  constructor(private bookRepository: UserRepositoryInterface) {}
  async signup(userData: SignupPayload) {
    return await this.bookRepository.signup(userData);
  }
  //   async findPaginated(page: number, size: number) {
  //     return await this.bookRepository.findPaginated(page, size);
  //   }

  //   async create(book: BookPayload, user_id: string) {
  //     return await this.bookRepository.create(book, user_id);
  //   }

  //   async delete(book_id: string) {
  //     return await this.bookRepository.delete(book_id);
  //   }

  //   async addTagsToBook(book_id: string, tagIds: string[]) {
  //     return await this.bookRepository.addTagsToBook(book_id, tagIds);
  //   }

  //   async findById(book_id: string) {
  //     return await this.bookRepository.findById(book_id);
  //   }
}
