import {Injectable} from '@angular/core';
import {Item} from "../model/item";
import {Product} from "../model/product";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = [];
  subjectItem: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() {
    this.getData();
    this.subjectItem.next(this.items);
  }

  addToCart(product: Product, quantity: number) {
    let exItem = this.items.find(i => i.product.id == product.id);
    if (exItem == undefined) {
      let item: Item = new Item(product, quantity);
      this.items.push(item);

    } else {
      exItem.quantity += quantity;
    }
    this.setData();
    this.subjectItem.next(this.items);
  }
  removeItem(item:Item){
    let index = this.items.indexOf(item,0);
    this.items.splice(index,1);
    this.setData();
    this.subjectItem.next(this.items);
  }
  minusProduct(item: Item) {
    let index = this.items.indexOf(item,0);
    let exItem = this.items[index];
    exItem.quantity--;
    if(exItem.quantity <=0){
      this.items.splice(index,1);
    }
    this.setData();
    this.subjectItem.next(this.items);
  }
  plusProduct(item: Item) {
    let index = this.items.indexOf(item,0);
    let exItem = this.items[index];
    exItem.quantity++;
    this.setData();
    this.subjectItem.next(this.items);
  }

  getData() {
    let jsonCart = localStorage.getItem('cart');
    let data: any = jsonCart != null ? JSON.parse(jsonCart) : [];
    data.forEach((value: any) => {
      let product: Product = value._product;
      let quantity: number = value._quantity
      this.items.push(new Item(product, quantity))
    })
  }

  setData() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}
