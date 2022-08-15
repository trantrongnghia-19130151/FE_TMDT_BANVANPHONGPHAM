export class Product {

  private _id: string;
  private _name: string;
  private _img: string;
  private _price: number;
  private _discount: number;
  private _idNsx: number;

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

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    this._discount = value;
  }

  get idNsx(): number {
    return this._idNsx;
  }

  set idNsx(value: number) {
    this._idNsx = value;
  }

  constructor(id: string, name: string, img: string, price: number, discount: number, idNsx: number) {
    this._id = id;
    this._name = name;
    this._img = img;
    this._price = price;
    this._discount = discount;
    this._idNsx = idNsx;

  }


}
