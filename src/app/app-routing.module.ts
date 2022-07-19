import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
// import {CartComponent} from" ./component/cart/cart.component"


// const routes : Routes = [
//   {path: "cart", component: CartComonent},
//   {path: "login" , component: L}
//
//
// ];


@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
