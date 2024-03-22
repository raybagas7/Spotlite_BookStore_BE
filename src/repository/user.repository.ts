import {
  SignupPayload,
  UserRepositoryInterface,
} from '../interfaces/user.interface';

export class UserRepository {
  constructor(private bookRepository: UserRepositoryInterface) {}
  async signup(userData: SignupPayload) {
    return await this.bookRepository.signup(userData);
  }

  async subtractUserPoint(point: number, userId: string) {
    return await this.bookRepository.subtractUserPoint(point, userId);
  }
}
