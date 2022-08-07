import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {RegisterComponent} from "./component/register/register.component";
import {LoginComponent} from "./component/login/login.component";
import {ProductComponent} from "./component/product/product.component";
import {CartComponent} from "./component/cart/cart.component";
import {CheckoutComponent} from "./component/checkout/checkout.component";
import {ProductDetailsComponent} from "./component/product/product-details/product-details.component";

const routes : Routes = [
  {path: 'shop', component: ProductComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'cart', component:CartComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'checkout', component: CheckoutComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
