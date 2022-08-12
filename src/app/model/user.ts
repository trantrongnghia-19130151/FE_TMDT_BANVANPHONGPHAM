export class User {
  private _fName:string;
  private _lName:string;
  private _email:string;
  private _password:string;

  constructor(fName: string, lName: string, email: string, password: string ) {
    this._fName = fName;
    this._lName = lName;
    this._email = email;
    this._password = password;
  }

  get fName(): string {
    return this._fName;
  }

  set fName(value: string) {
    this._fName = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get lName(): string {
    return this._lName;
  }

  set lName(value: string) {
    this._lName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
