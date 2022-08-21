import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {RegisterComponent} from "./component/register/register.component";
import {LoginComponent} from "./component/login/login.component";
import {HomeComponent} from "./component/home/home.component";
import {ProductComponent} from "./component/product/product.component";
import {CartComponent} from "./component/cart/cart.component";
import {CheckoutComponent} from "./component/checkout/checkout.component";
import {ProductDetailsComponent} from "./component/product/product-details/product-details.component";
import {AboutComponent} from "./component/about/about.component";
import {ContactComponent} from "./component/contact/contact.component";
import {SecurityGuard} from "./security.guard";

const routes : Routes = [

  {path: '', component: HomeComponent},
  {path: 'shop', component: ProductComponent},
  {path: 'shop/:id', component: ProductComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'cart', component:CartComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'checkout', component: CheckoutComponent,  canActivate:[SecurityGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
