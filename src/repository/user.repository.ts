import {
  SignupPayload,
  UserRepositoryInterface,
} from '../interfaces/user.interface';

export class UserRepository {
  constructor(private userRepository: UserRepositoryInterface) {}
  async signup(userData: SignupPayload) {
    return await this.userRepository.signup(userData);
  }

  async subtractUserPoint(point: number, userId: string) {
    return await this.userRepository.subtractUserPoint(point, userId);
  }

  async incrementUserPoint(point: number, userId: string) {
    return await this.userRepository.incrementUserPoint(point, userId);
  }

  async checkUserAvailability(email: string) {
    return await this.userRepository.checkUserAvailability(email);
  }
}
