export interface fpData {
  id: number;
  name: string;
  race: string;
  gender: string;
  employer: string;
  sheet: string;
  charges:charges[]|null;
}

export interface charges{

  "id": number,
  "sheet_id": number,
  "charge1": string | null,
  "severity": string | null,
  "disp": string | null,
  "comments": string | null,
  "fullLine":string | null
  //"sheet": string
}
