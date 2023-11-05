import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/modules/users/dto/update-user.dto';
import { User } from 'src/modules/users/entities/user.entity';

export abstract class UserRepository {
  abstract create(data: CreateUserDto): Promise<User> | User;
  abstract findAll(): Promise<User[]> | User[];
  abstract getFilterByDates(
    start_date?: Date,
    end_date?: Date,
  ): Promise<User[]>;
  abstract findUserByName(query: string): Promise<User[]>;
  abstract findUsersByQuery(orderBy: 'asc' | 'desc'): Promise<User[]>;
  abstract findone(id: string): Promise<User | undefined> | User | undefined;
  abstract findByEmail(
    email: string,
  ): Promise<User | undefined> | User | undefined;
  abstract update(id: string, data: UpdateUserDto): Promise<User> | User;
  abstract delete(id: string): Promise<void> | void;
}
