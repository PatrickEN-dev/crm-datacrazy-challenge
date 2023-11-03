"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ICreateFormValues } from "./interfaces";
import { useUsers } from "@/hooks/useUsers";
import { IUserRequest } from "@/contexts/Users/interfaces";

const ModalContent = () => {
  const { addUser } = useUsers();

  const { register, handleSubmit } = useForm<ICreateFormValues>();

  const submit: SubmitHandler<ICreateFormValues> = (formData: IUserRequest) => {
    console.log("FORMDATA", formData);
    addUser(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create user</DialogTitle>
          <DialogDescription>
            Crie seu usuário aqui, clique em criar e estará feito.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Name" className="text-right">
              Nome
            </Label>
            <input id="name" className="col-span-3" {...register("name")} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Email" className="text-right">
              Email
            </Label>
            <input id="Email" className="col-span-3" type="mail" {...register("email")} />
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="Phone" className="text-right">
            Telephone
          </Label>
          <input id="Phone" className="col-span-3" type="tel" {...register("phone")} />
        </div>
        <DialogFooter>
          <button type="submit">criar</button>
        </DialogFooter>
      </DialogContent>
    </form>
  );
};

export default ModalContent;
