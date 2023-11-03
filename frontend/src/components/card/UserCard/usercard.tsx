"use client";

import { IUser } from "@/contexts/Users/interfaces";
import { useUsers } from "@/hooks/useUsers";
import { TrashIcon } from "lucide-react";
import { EditInput } from "../../editables/EditInput/editInput";
import { Separator } from "@radix-ui/react-separator";

interface IUserCardProps {
  userInfo: IUser;
}

const UserCard = ({ userInfo }: IUserCardProps) => {
  const { updateUser, deleteUser } = useUsers();
  return (
    <div className="h-[120px] p-4 pt-4 rounded-lg shadow-lg m-2 min-w-max">
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
      <Separator />

      <div className="flex item-center w-full text-center justify-center">
        <EditInput
          initialValue={userInfo.email}
          onFormSubmit={({ value }) => updateUser(userInfo.id, { email: value })}
          className="border-0 outline-none"
        />
      </div>
    </div>
  );
};

export default UserCard;
