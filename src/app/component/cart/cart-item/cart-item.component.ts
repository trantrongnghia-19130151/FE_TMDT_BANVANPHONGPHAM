import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../../model/item";

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item?: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
