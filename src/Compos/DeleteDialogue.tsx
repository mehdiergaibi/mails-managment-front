import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Toaster, toast } from "sonner";

interface DeleteDialogeProps {
  desc: string;
  hadelDel: () => void;
}

function DeleteDialoge({ desc, hadelDel }: DeleteDialogeProps) {
  // toast handler state
  const [openAddToastSucc, setOpenAddtoastSucc] = useState(false);

  // Show success toast
  useEffect(() => {
    if (openAddToastSucc) {
      toast.success("Courier supprime avec succes");
      setOpenAddtoastSucc(false);
    }
  }, [openAddToastSucc]);
  const handelAction = () => {
    hadelDel();
    setOpenAddtoastSucc(true);
  };
  return (
    <div>
      <Toaster />
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <AiFillDelete size={25} className="text-red-500 cursor-pointer" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tu es absolument sure?</AlertDialogTitle>
            <AlertDialogDescription>{desc}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={handelAction}>
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default DeleteDialoge;
