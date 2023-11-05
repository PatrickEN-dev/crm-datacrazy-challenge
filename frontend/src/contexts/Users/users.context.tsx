"use client";

import { API } from "@/services/API";
import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { IChildrenProps } from "@/@types/context.global";
import { IUser, IUserCrudContext, IUserRequest, IUserUpdate } from "./interfaces";

export const UsersContext = createContext<IUserCrudContext>({} as IUserCrudContext);

export const UsersProvider = ({ children }: IChildrenProps) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const searchParams = useSearchParams();

  const search = searchParams.get("query");
  const usersFilterByOrder = searchParams.get("orderBy");
  const usersFilterByDate = searchParams.get("date");

  const fetchDataBySearch = async () => {
    const response = await API.get(`/users/search?query=${search}`);
    setUsers(response.data);
  };

  const fetchDataByOrder = async () => {
    const response = await API.get(`/users?orderBy=${usersFilterByOrder}`);
    setUsers(response.data);
  };

  const fetchDataByDate = async () => {
    const [startDateParam, endDateParam] = usersFilterByDate!
      .split("-")
      .map((date) => new Date(date));

    const endpoint = `/users/date?createdAt-gte=${startDateParam.toISOString()}&createdAt-lte=${endDateParam.toISOString()}`;
    const response = await API.get(endpoint);

    setStartDate(startDateParam);
    setEndDate(endDateParam);
    setUsers(response.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        await fetchDataBySearch();
      } else if (usersFilterByOrder) {
        await fetchDataByOrder();
      } else if (usersFilterByDate) {
        await fetchDataByDate();
      } else {
        const response = await API.get("/users/all");
        setUsers(response.data);
      }
    };

    fetchData();
  }, [search, usersFilterByOrder, usersFilterByDate]);

  const addUser = async (formData: IUserRequest) => {
    try {
      const { data } = await API.post<IUser>(`/users`, formData);

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

  function searchUserBy(by: String) {
    return async () => {
      try {
        const response = await API.get<IUser[]>(`/users/${by}`);
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar o usuário:", error);
      }
    };
  }

  const searchUsersMostRecent = () => searchUserBy("most-recent");

  const searchUsersMostOld = () => searchUserBy("most-older");

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        addUser,
        updateUser,
        deleteUser,
        searchUsersMostRecent,
        searchUsersMostOld,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
