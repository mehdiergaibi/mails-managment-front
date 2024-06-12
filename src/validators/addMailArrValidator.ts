import { z } from "zod";

export const AddMailArrValidator = z.object({
  numero: z.string().min(1),
  dateArr: z.coerce.date(),
  emmeteur: z.string().min(1),
  objet: z.string().min(1),
  type: z.string().min(1),
  division: z.string().min(1),
  recuPar: z.string().min(1),
  observation: z.string().min(1).optional(),
});
