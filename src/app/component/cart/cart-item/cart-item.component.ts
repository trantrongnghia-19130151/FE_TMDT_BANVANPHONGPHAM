import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../../model/item";
import {CartService} from "../../../service/cart.service";

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item!: Item;
  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
  }

  removeItem(item: Item) {
    let cart = this.cartService.items
    let index = cart.indexOf(item,0);
    this.cartService.items.splice(index,1);
    this.cartService.subjectItem.next(cart);
  }

  minusProduct(item: Item) {
    let cart = this.cartService.items
    let index = cart.indexOf(item,0);
    let exItem = cart[index];
    exItem.quantity--;
    if(exItem.quantity <=0){
      cart.splice(index,1);
    }
    this.cartService.subjectItem.next(cart);
  }

  plusProduct(item: Item) {
    let cart = this.cartService.items
    let index = cart.indexOf(item,0);
    let exItem = cart[index];
    exItem.quantity++;
    this.cartService.subjectItem.next(cart);
  }
}
