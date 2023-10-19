export interface nameNumber {
  id: number;
  name: string;
  count:number;
  charges:nameNumber[]|null;
}
export interface nameNumberKidary {
  id: number;
  name: string;
  count:number;
  kids:nameNumberKidary[]|null;
}

export interface nnk_geo extends nameNumberKidary {
  lat:string;
  lng:string;
}


export interface nameNumberDemo {
  id: number;
  name: string;
  count:number;
  kids:demo[]|null;
}
export interface demo {
  'id': number,
                'name': string,
                'count': number,
                'sex': string,
                'race': string,
                'birthdate': string,
                'height': string,
                'weight': string,
                'eyes': string,
                'hair': string,
                'birthplace': string
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


export interface mTask {
  name: string;
  checked: boolean;
  svrName:string;
  options?:mTask[];

}








