import {Item} from "./item";

export class Order {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  city: string = '';
  address: string = '';
  phone: number = 0;
  message: string = '';
  date: Date = new Date();
  items: Item[] = [];

}
