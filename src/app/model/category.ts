
export class Category {

  private _cateId:number;
  private _name:string;
  private _subc:Category[];
  constructor(cateId: number, name:string, subc:Category[]) {
    this._cateId = cateId;
    this._name = name;
    this._subc = subc;
  }



  get cateId(): number {
    return this._cateId;
  }
  set cateId(value: number) {
    this._cateId = value;
  }
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get subc(): Category[] {
    return this._subc;
  }

  set subc(value: Category[]) {
    this._subc = value;
  }
}
