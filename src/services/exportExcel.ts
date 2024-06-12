import xlsx, { IJsonSheet } from "json-as-xlsx";
export function exportExcelDep(dt: any, file: string, sheet: string) {
  let columns: IJsonSheet[] = [
    {
      sheet: sheet,
      columns: [
        { label: "Numero", value: "numero" },
        { label: "Date de Depart", value: "dateDepp" },
        {
          label: "Destinataire",
          value: "destinataire",
        },
        { label: "Objet", value: "objet" },
        { label: "Type", value: "type" },
        { label: "Division", value: "division" },
        { label: "Observation", value: "observation" },
        { label: "Recu par", value: "recuPar" },
      ],
      content: dt,
    },
  ];
  let settings = {
    fileName: file,
  };
  xlsx(columns, settings);
}
export function exportExcelArr(dt: any, file: string, sheet: string) {
  let columns: IJsonSheet[] = [
    {
      sheet: sheet,
      columns: [
        { label: "Numero", value: "numero" },
        { label: "Date d'arrive", value: "dateArr" },
        {
          label: "Emmeteur",
          value: "emmeteur",
        },
        { label: "Objet", value: "objet" },
        { label: "Type", value: "type" },
        { label: "Division", value: "division" },
        { label: "Observation", value: "observation" },
        { label: "Recu par", value: "recuPar" },
      ],
      content: dt,
    },
  ];
  let settings = {
    fileName: file,
  };
  xlsx(columns, settings);
}
