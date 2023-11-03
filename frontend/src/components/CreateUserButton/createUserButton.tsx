import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import ModalContent from "../ModalComponent/modal";

const CreateUserButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none flex gap-2"
        >
          Criar usuário
          <Plus />
        </Button>
      </DialogTrigger>
      <ModalContent />
    </Dialog>
  );
};

export default CreateUserButton;
