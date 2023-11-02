"use client";

import { createContext, useState } from "react";
import { IModalContext } from "./interfaces";
import { IChildrenProps } from "@/@types/context.global";

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children }: IChildrenProps) => {
  const [showModal, setShowModal] = useState<string>("");

  const closeModal = () => setShowModal("");

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
