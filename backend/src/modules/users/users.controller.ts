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
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('all')
  findAll(@Query('createdAt-gte') start_date?: Date, end_date?: Date) {
    return this.usersService.getFilterByDates(start_date, end_date);
  }

  @Get('most-recent')
  async findUserByMostRecentData() {
    return this.usersService.findUserByMostRecentData();
  }

  @Get('most-older')
  async findUserByMostOlderData() {
    return this.usersService.findUserByMostOlderData();
  }

  @Get('search')
  async searchUsers(@Query('query') query: string): Promise<User[]> {
    return this.usersService.findhUserByName(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
