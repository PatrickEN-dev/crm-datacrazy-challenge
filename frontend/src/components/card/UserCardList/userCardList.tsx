"use client";

import { useUsers } from "@/hooks/useUsers";
import UserCard from "../UserCard/usercard";
import { IUser } from "@/contexts/Users/interfaces";

const UserCardList = () => {
  const { users } = useUsers();

  return (
    <>
      {users.length > 0 ? (
        <ul className="md:flex md:flex-row mt-3 md:w-full md:min-w-fit md:overflow-x-auto md: px-4 md:flex-wrap md:max-w-[100%] md:m-auto">
          {users.map((user: IUser) => (
            <li key={user.id}>
              <UserCard userInfo={user} />
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h1>não há usuários aqui</h1>
        </div>
      )}
    </>
  );
};

export default UserCardList;
