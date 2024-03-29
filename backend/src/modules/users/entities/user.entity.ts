import { Exclude } from 'class-transformer';

export class User {
  readonly id: string;

  constructor() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.deletedAt = null;
  }

  name: string;
  email: string;
  phone: string;

  @Exclude()
  readonly createdAt: Date;

  @Exclude()
  readonly updatedAt: Date;

  @Exclude()
  readonly deletedAt: Date | null;
}
