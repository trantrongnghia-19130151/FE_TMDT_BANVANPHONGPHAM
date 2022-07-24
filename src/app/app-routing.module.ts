import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {RegisterComponent} from "./component/register/register.component";
import {LoginComponent} from "./component/login/login.component";
import {ProductComponent} from "./component/product/product.component";

const routes : Routes = [
  {path: '', component: AppComponent},
  {path: 'shop', component: ProductComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
