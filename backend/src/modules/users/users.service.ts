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

    if (findUser) throw new ConflictException('Email já existente');

    const user = await this.UserRepository.create(createUserDto);
    return user;
  }

  async findAll() {
    const users = await this.UserRepository.findAll();
    if (!users) {
      throw new NotFoundException('Nenhum usuário encontrado');
    }
    return users;
  }

  async getFilterByDates(start_date?: Date, end_date?: Date): Promise<User[]> {
    const userData = await this.UserRepository.getFilterByDates(
      start_date,
      end_date,
    );
    if (!userData || userData.length === 0) {
      throw new NotFoundException(
        'Nenhum usuário encontrado com as datas especificadas',
      );
    }
    return userData;
  }

  async findUsersByMostRecentData(orderBy: 'asc') {
    const users = await this.UserRepository.findUsersByQuery(orderBy);
    if (!users) {
      throw new NotFoundException(
        'Nenhum usuário encontrado com a ordenação especificada',
      );
    }
    return users;
  }

  async findUsersByMostOlderData(orderBy: 'desc') {
    const users = await this.UserRepository.findUsersByQuery(orderBy);
    if (!users) {
      throw new NotFoundException(
        'Nenhum usuário encontrado com a ordenação especificada',
      );
    }
    return users;
  }

  async findUserByName(query: string) {
    const userQuery = await this.UserRepository.findUserByName(query);

    if (userQuery.length === 0) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return userQuery;
  }

  async findByEmail(email: string) {
    const userEmail = await this.UserRepository.findByEmail(email);
    if (!userEmail) throw new NotFoundException('Usuário não encontrado');
    return userEmail;
  }

  async findOne(id: string) {
    const findUser = await this.UserRepository.findone(id);
    if (!findUser) throw new NotFoundException('Usuário não encontrado');

    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.UserRepository.findone(id);
    if (!findUser) throw new NotFoundException('Usuário não encontrado');
    return this.UserRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const findUser = await this.UserRepository.findone(id);
    if (!findUser) throw new NotFoundException('Usuário não encontrado');
    return this.UserRepository.delete(id);
  }
}
