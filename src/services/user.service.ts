import {
  SignupPayload,
  UserRepositoryInterface,
} from '../interfaces/user.interface';
import { encrypt } from '../helpers/encrypt';
import { User } from '../entity/User.entity';
import { AppDataSource } from '../data-source';

export class UserService implements UserRepositoryInterface {
  async signup(userData: SignupPayload) {
    const { name, email, password, role } = userData;

    const encryptedPassword = await encrypt.encryptpass(password);
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = encryptedPassword;
    user.role = role;
    user.point = 100;

    const userRepository = AppDataSource.getRepository(User);
    await userRepository.save(user);

    return user;
  }

  async subtractUserPoint(point: number, userId: string) {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error('User not found');
    }

    if (user.point < point) {
      throw new Error('Insufficient points');
    }

    user.point -= point;
    await userRepository.save(user);
  }
}
