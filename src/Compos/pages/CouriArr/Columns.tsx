import DeleteDialoge from "@/Compos/DeleteDialogue";
import { deleteMailArr } from "@/services/api";
import { ColumnDef } from "@tanstack/react-table";
import EditMail from "./EditMail";
import { CourierArr } from "@/Types/CourierArr";

export const CouriDepColumns: ColumnDef<CourierArr>[] = [
  {
    header: "ID",
    accessorKey: "_id",
  },
  {
    header: "Numero",
    accessorKey: "numero",
  },
  {
    header: "Date d'arrive",
    accessorKey: "dateArr",
  },
  {
    header: "Emmeteur",
    accessorKey: "emmeteur",
  },
  {
    header: "objet",
    accessorKey: "objet",
  },
  {
    header: "Type",
    accessorKey: "type",
  },
  {
    header: "Division",
    accessorKey: "division",
  },
  {
    header: "Observation",
    accessorKey: "observation",
  },
  {
    header: "Recu par",
    accessorKey: "recuPar",
  },
  {
    header: "Actions",
    accessorKey: "action",
    cell: ({ row }) => {
      const id: string | undefined = row.original._id;

      const currentMail: CourierArr = {
        _id: id,
        numero: row.original.numero,
        dateArr: row.original.dateArr,
        emmeteur: row.original.emmeteur,
        objet: row.original.objet,
        type: row.original.type,
        division: row.original.division,
        recuPar: row.original.recuPar,
        observation: row.original.observation,
      };
      return (
        <div className="flex justify-between">
          <DeleteDialoge
            hadelDel={() => deleteMailArr(id as string)}
            desc="Cette action ne peut pas être annulée. Cela supprimera définitivement ce courrier et supprimera ses données de nos serveurs."
          />
          <EditMail editedMail={currentMail as CourierArr} />
        </div>
      );
    },
  },
];
