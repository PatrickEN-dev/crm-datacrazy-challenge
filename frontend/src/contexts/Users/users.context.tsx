"use client";

import { API } from "@/services/API";
import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { IChildrenProps } from "@/@types/context.global";
import { IUser, IUserCrudContext, IUserRequest, IUserUpdate } from "./interfaces";

export const UsersContext = createContext<IUserCrudContext>({} as IUserCrudContext);

export const UsersProvider = ({ children }: IChildrenProps) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchUsers, setSearchUsers] = useState("");
  const [filterUsers, setFilterUsers] = useState<IUser[]>([]);

  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  useEffect(() => {
    const getUsersRequest = async () => {
      try {
        if (search) {
          const response = await API.get(`/users/search?query=${search}`);

          setUsers(response.data);
          return response.data;
        } else {
          const response = await API.get("/users/all");
          setUsers(response.data);
          return response.data;
        }
      } catch (error) {
        console.error("Erro ao buscar resultados da pesquisa:", error);
        throw error;
      }
    };
    getUsersRequest();
  }, [search]);

  const addUser = async (formData: IUserRequest) => {
    try {
      const { data } = await API.post<IUser>(`/users`, formData);

      console.log(data);

      setUsers((users) => [...users, data]);
    } catch (error) {
      console.error("Erro ao criar o usuário:", error);
    }
  };

  const updateUser = async (id: string, data: IUserUpdate) => {
    try {
      await API.patch(`/users/${id}`, data);

      setUsers((users) => users.map((User) => (User.id === id ? { ...User, ...data } : User)));
    } catch (error) {
      console.error("Erro ao atualizar o usuário:", error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      await API.delete(`/users/${id}`);

      setUsers((users) => users.filter((User) => User.id !== id));
    } catch (error) {
      console.error("Erro ao excluir o usuário:", error);
    }
  };

  const searchUsersByQuery = async (searchQuery: string) => {
    try {
      const response = await API.get(`/users/search?query=${searchQuery}`);
      setFilterUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar os usuários por consulta:", error);
    }
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        addUser,
        updateUser,
        deleteUser,
        searchUsers,
        setSearchUsers,
        filterUsers,
        setFilterUsers,
        searchUsersByQuery,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
