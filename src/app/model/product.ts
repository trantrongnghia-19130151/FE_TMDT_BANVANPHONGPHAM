export class Product {
  private _id: string;
  private _name:string;
  private _img:string;
  private _price:number;

  constructor(id: string, name: string, img: string, price: number) {
    this._id = id;
    this._name = name;
    this._img = img;
    this._price = price;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
