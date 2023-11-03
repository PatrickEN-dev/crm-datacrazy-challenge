"use client";

import { useUsers } from "@/hooks/useUsers";
import UserCard from "../UserCard/usercard";
import { IUser } from "@/contexts/Users/interfaces";

const UserCardList = () => {
  const { users } = useUsers();
  return (
    <>
      {users ? (
        <ul className="md:flex md:flex-row mt-3 md:w-full md:min-w-fit md:overflow-x-auto">
          {users.map((user: IUser) => (
            <li key={user.id}>
              <UserCard userInfo={user} />
            </li>
          ))}
        </ul>
      ) : (
        <div>não há usuários aqui</div>
      )}
    </>
  );
};

export default UserCardList;
