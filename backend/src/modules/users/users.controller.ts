import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get('date')
  getFilterByDates(
    @Query('createdAt-gte') start_date: Date,
    @Query('createdAt-lte') end_date: Date,
  ) {
    return this.usersService.getFilterByDates(start_date, end_date);
  }

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('most-recent')
  async findUsersByMostRecentData(@Query('orderBy') orderBy: 'asc') {
    return this.usersService.findUsersByMostRecentData(orderBy);
  }

  @Get('most-older')
  async findUsersByMostOlderData(@Query('orderBy') orderBy: 'desc') {
    return this.usersService.findUsersByMostOlderData(orderBy);
  }

  @Get()
  async searchUsers(@Query('query') query: string): Promise<User[]> {
    return await this.usersService.findUserByName(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }
}
