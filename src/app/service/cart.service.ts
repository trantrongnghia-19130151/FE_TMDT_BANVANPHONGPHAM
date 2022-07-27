import { Injectable } from '@angular/core';
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
  }
  addToCart(product : Product, quantity: number){
    let exItem = this.items.find(i => i.product.id == product.id);
    if(exItem == undefined){
      let item:Item = new Item(product, quantity);
      this.items.push(item);

    }else{
      exItem.quantity += quantity;
    }
    this.subjectItem.next(this.items);
    this.getTotalCart();
  }
  getTotalCart():number {
    let total = 0;
    this.items.forEach( e => {
      total += e.getTotal();
    })
    return total;
  }
}
