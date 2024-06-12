export interface CourierDep {
  numero: string;
  dateDepp: string | Date;
  destinataire: string;
  objet: string;
  type: string;
  division: string;
  recuPar: string;
  observation?: string;
  _id?: string;
}
