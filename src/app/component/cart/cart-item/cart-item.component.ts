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
    this.cartService.removeItem(item);
  }

  minusProduct(item: Item) {
    this.cartService.minusProduct(item)
  }

  plusProduct(item: Item) {
    this.cartService.plusProduct(item);
  }
}
