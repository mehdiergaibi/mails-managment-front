import { getDvisions, getTypes } from "@/services/api";
import { Division } from "@/Types/Division";
import { Type } from "@/Types/Type";
import { z } from "zod";

const getT = async (): Promise<string[]> => {
  const types: Type[] = await getTypes();
  return types.map((type: Type) => type.type);
};

const getD = async (): Promise<string[]> => {
  const divisions: Division[] = await getDvisions();
  return divisions.map((division: Division) => division.name);
};

const t = await getT();
const d = await getD();
console.log(d)

export const AddMailDepValidator = z.object({
  numero: z.string().min(1),
  dateDepp: z.coerce.date(),
  destinataire: z.string().min(1),
  objet: z.string().min(1),
  type: z.enum(t),
  division: z.enum(d),
  recuPar: z.string().min(1),
  observation: z.string().min(1).optional(),
});
