import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Order} from "../../model/order";
import {CartService} from "../../service/cart.service";
import {CheckoutService} from "../../service/checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private checkoutService: CheckoutService, private cartSv:CartService) { }
  order !: Order;
  headElements = ["Sản phẩm", "Giá", "Số lượng", "Tổng cộng"]
  total : number = 0;
  ngOnInit(): void {
  }
  onSubmit(f : NgForm){
    let order = new Order();
    order.firstName = f.control.get('firstName')?.value;
    order.lastName = f.control.get('lastName')?.value;
    order.city = f.control.get('city')?.value;
    order.address = f.control.get('address')?.value;
    order.phone = f.control.get('phone')?.value;
    order.message = f.control.get('mess')?.value;
    order.items = this.cartSv.items;
    this.checkoutService.placeOrder(order).subscribe(res =>{
      if(res){
        this.order = res
        this.order.items.forEach( item =>{
          this.total += item.product.price * item.quantity
        })
        localStorage.removeItem('cart');
        this.cartSv.subjectItem.next(this.cartSv.items = [])
      }
    })
  }

}
