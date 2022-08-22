import {Item} from "./item";
import {User} from "./user";

export class Order {
  id: number = 0;
  user!: User;
  firstName: string = '';
  lastName: string = '';
  city: string = '';
  address: string = '';
  phone: number = 0;
  message: string = '';
  date: Date = new Date();
  items: Item[] = [];

}
