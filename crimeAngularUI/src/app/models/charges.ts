export interface nameNumber {
    id: number;
    name: string;
    count:number;
    charges:nameNumber[]|null;
  }

  export interface charges {
    id: number;
    crime: string|null;
    severity:number;
    fullLine:String;
  }

  export interface orders {
    id: number;
    name: string;
    count:number;
    charges:nameNumber[]|null;
  }
  export interface orders {
    id: number;
    name: string;
    race:string;
    gender:string;
    employer:string;

    mycrimes:charges[]|null;
  }