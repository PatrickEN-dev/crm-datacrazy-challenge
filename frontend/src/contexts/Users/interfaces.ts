import { Dispatch, SetStateAction } from "react";

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface IUserUpdate extends Partial<IUser> {}

export interface IUserRequest extends Omit<IUser, "id" | "createdAt" | "updatedAt" | "deletedAt"> {}

export interface IUserCrudContext {
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;

  addUser: (User: IUserRequest) => void;
  updateUser: (id: string, updatedUser: IUserUpdate) => void;
  deleteUser: (id: string) => void;

  searchUsers: string;
  setSearchUsers: React.Dispatch<React.SetStateAction<string>>;
  filterUsers: IUser[];
  setFilterUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}
