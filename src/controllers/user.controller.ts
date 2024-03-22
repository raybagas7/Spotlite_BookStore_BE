import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entity/User.entity';
import { encrypt } from '../helpers/encrypt';
import * as cache from 'memory-cache';
import { UserRepository } from '../repository/user.repository';
import { UserService } from '../services/user.service';

export class UserController {
  static async signup(req: Request, res: Response) {
    try {
      const userService = new UserRepository(new UserService());
      const user = await userService.signup(req.body);
      const token = encrypt.generateToken({ id: user.id });

      delete user.password;

      return res.status(200).json({
        message: 'User created successfully',
        token,
        user,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async getUsers(req: Request, res: Response) {
    const data = cache.get('data');
    if (data) {
      console.log('serving from cache');
      return res.status(200).json({
        data,
      });
    } else {
      console.log('serving from db');
      const userRepository = AppDataSource.getRepository(User);
      const users = await userRepository.find();

      cache.put('data', users, 6000);
      return res.status(200).json({
        data: users,
      });
    }
  }
}
