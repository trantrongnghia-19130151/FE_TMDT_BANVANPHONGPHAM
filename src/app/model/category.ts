export class Category {
  private _cateId:number;
  private _name:string;
  constructor(cateId: number, name:string) {
    this._cateId = cateId;
    this._name = name;
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
}
