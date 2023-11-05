import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { plainToInstance } from 'class-transformer';
import { UserRepository } from '../users.repository';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, { ...data });
    const newUser = await this.prisma.user.create({
      data: { ...user },
    });

    return plainToInstance(User, newUser);
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findone(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    return plainToInstance(User, user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user;
  }

  async findUserByName(query: string): Promise<User[]> {
    if (!query) return this.prisma.user.findMany();

    const users = await this.prisma.user.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
    });

    return users;
  }

  async findUsersByQuery(orderBy: 'asc' | 'desc'): Promise<User[]> {
    if (!orderBy) return this.prisma.user.findMany();

    const users = await this.prisma.user.findMany({
      orderBy: {
        createdAt: orderBy,
      },
    });

    return users;
  }

  async getFilterByDates(start_date?: Date, end_date?: Date): Promise<User[]> {
    if (!start_date || !end_date) return this.prisma.user.findMany();

    const userData = await this.prisma.user.findMany({
      where: {
        createdAt: {
          gte: start_date,
          lte: end_date,
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return userData;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { ...data },
    });
    return user;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
