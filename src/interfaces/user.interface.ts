import { User } from '../entity/User.entity';

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
  role?: string;
}
export interface LoginPayload {
  email: string;
  password: string;
}

export interface UserInterface {
  name: string;
  email: string;
  password: string;
  role: string;
  point: number;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserRepositoryInterface {
  signup(userData: SignupPayload): Promise<User>;
  subtractUserPoint(point: number, userId: string): Promise<void>;
  incrementUserPoint(point: number, userId: string): Promise<void>;
  checkUserAvailability(email: string): Promise<boolean>;
}
