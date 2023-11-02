import { Dispatch } from "react";
import { SetStateAction } from "react";

export type IModalContext = {
  showModal: string;
  setShowModal: Dispatch<SetStateAction<string>>;
  closeModal: () => void;
};
