import DeleteDialoge from "@/Compos/DeleteDialogue";
import { deleteMailDep } from "@/services/api";
import { CourierDep } from "@/Types/CourierDep";
import { ColumnDef } from "@tanstack/react-table";
import EditMail from "./EditMail";

export const CouriDepColumns: ColumnDef<CourierDep>[] = [
  {
    header: "ID",
    accessorKey: "_id",
  },
  {
    header: "Numero",
    accessorKey: "numero",
  },
  {
    header: "Date de Depart",
    accessorKey: "dateDepp",
  },
  {
    header: "Destinataire",
    accessorKey: "destinataire",
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

      const currentMail: CourierDep = {
        _id: id,
        numero: row.original.numero,
        dateDepp: row.original.dateDepp,
        destinataire: row.original.destinataire,
        objet: row.original.objet,
        type: row.original.type,
        division: row.original.division,
        recuPar: row.original.recuPar,
        observation: row.original.observation,
      };
      return (
        <div className="flex justify-between">
          <DeleteDialoge
            hadelDel={() => deleteMailDep(id as string)}
            desc="Cette action ne peut pas être annulée. Cela supprimera définitivement ce courrier et supprimera ses données de nos serveurs."
          />
          <EditMail editedMail={currentMail as CourierDep} />
        </div>
      );
    },
  },
];
