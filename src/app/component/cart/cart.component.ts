import { Component, OnInit } from '@angular/core';
import {Item} from "../../model/item";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items : Item[] = [];
  headElements = ["Sản phẩm", "Giá", "Số lượng", "Tổng cộng"]
  headBillElements = ["Tổng số lượng",""]
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.subjectItem.subscribe(items =>{
      this.items = items
    })
  }
  getTotalCart():number {
    let total = 0;
    this.items.forEach( e => {
      total += e.getTotal();
    })
    return total;
  }
}
