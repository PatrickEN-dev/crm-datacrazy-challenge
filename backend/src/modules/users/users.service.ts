import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from 'src/modules/users/repositories/users.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private UserRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.UserRepository.findByEmail(createUserDto.email);

    if (findUser) throw new ConflictException('email already exists');

    const user = await this.UserRepository.create(createUserDto);
    return user;
  }

  async findAll() {
    return this.UserRepository.findAll();
  }

  getFilterByDates = async (
    start_date?: Date,
    end_date?: Date,
  ): Promise<User[]> => {
    const userData = await this.UserRepository.getFilterByDates(
      start_date,
      end_date,
    );
    return userData;
  };

  async findUserByMostRecentData(): Promise<User[]> {
    const users = await this.UserRepository.findUSerByMostRecentData();
    return users;
  }

  async findUserByMostOlderData(): Promise<User[]> {
    const users = await this.UserRepository.findUserByMostOlderData();
    return users;
  }

  async findByEmail(email: string) {
    const userEmail = await this.UserRepository.findByEmail(email);
    if (!userEmail) throw new NotFoundException('User not found');
    return userEmail;
  }

  async findhUserByName(query?: string) {
    const userQuery = await this.UserRepository.findUserByName(query);
    return userQuery;
  }

  async findOne(id: string) {
    const findUser = await this.UserRepository.findone(id);
    if (!findUser) throw new NotFoundException('User not found');

    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.UserRepository.findone(id);
    if (!findUser) throw new NotFoundException('User not found');
    return this.UserRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const findUser = await this.UserRepository.findone(id);
    if (!findUser) throw new NotFoundException('User not found');
    return this.UserRepository.delete(id);
  }
}
