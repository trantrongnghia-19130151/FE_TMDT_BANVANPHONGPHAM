import { Injectable } from '@angular/core';
import {Item} from "../model/item";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = [];
  constructor() { }
  addToCart(product : Product, quantity: number){
    let exItem = this.items.find(i => i.product.id == product.id);
    if(exItem == undefined){
        let item:Item = new Item(product, quantity);
        this.items.push(item);
    }else{
      exItem.quantity +=quantity;
    }
  }
}
