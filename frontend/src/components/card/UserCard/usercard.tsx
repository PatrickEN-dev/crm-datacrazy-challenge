"use client";

import { IUser } from "@/contexts/Users/interfaces";
import { useUsers } from "@/hooks/useUsers";
import { TrashIcon } from "lucide-react";
import { EditInput } from "../../editables/EditInput/editInput";

interface IUserCardProps {
  userInfo: IUser;
}

const UserCard = ({ userInfo }: IUserCardProps) => {
  const { updateUser, deleteUser } = useUsers();
  return (
    <div className={`h-[300px] p-4 pt-4 rounded-lg shadow-lg m-2 relative min-w-max`}>
      <header className="flex justify-between items-center pb-3 font-bold">
        <EditInput
          initialValue={userInfo.name}
          onFormSubmit={({ value }) => updateUser(userInfo.id, { name: value })}
          className="border-0 outline-none"
        />
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => deleteUser(userInfo.id)}>
            <TrashIcon />
          </button>
        </div>
      </header>
      <div className="border-t-2 mt-2 flex justify-between items-center absolute bottom-2 left-2 right-2">
        <div className="flex items-center space-x-2  h-6 spt-6 ml-4">
          <EditInput
            initialValue={userInfo.email}
            onFormSubmit={({ value }) => updateUser(userInfo.id, { email: value })}
            className="border-0 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
