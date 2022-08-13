import { Injectable } from '@angular/core';
import {Order} from "../model/order";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(private http: HttpClient) { }
  placeOrder(order: Order){
    return this.http.post<Order>("http://localhost:3000/order",order)
  }
}
