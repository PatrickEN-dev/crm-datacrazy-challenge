import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Patrick' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'patrick@mail.com' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description:
      'O número de telefone deve ser um número válido no formato brasileiro.',
    example: '(14)991335454',
  })
  @IsPhoneNumber('BR')
  @IsString()
  phone: string;
}
