"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IEditInputProps } from "./interfaces";
import { IEditFormValues } from "@/@types/form.globals";

export const EditInput = ({ initialValue, onFormSubmit, ...rest }: IEditInputProps) => {
  const [editing, setEditing] = useState(false);

  const { register, handleSubmit, watch } = useForm<IEditFormValues>({
    values: { value: initialValue },
  });

  const submit: SubmitHandler<IEditFormValues> = () => {
    const activeElement = document.activeElement;

    if (activeElement instanceof HTMLInputElement) activeElement.blur();
  };

  const onInputBlur = async () => {
    const value = watch("value");
    await onFormSubmit({ value });
    setEditing(false);
  };

  const onInputClick = () => {
    if (!editing) setEditing(true);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        {...register("value")}
        {...rest}
        onBlur={onInputBlur}
        onClick={onInputClick}
        readOnly={!editing}
      />
    </form>
  );
};
