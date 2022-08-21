import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {CartService} from "../../service/cart.service";
import {Authentication} from "../../service/authentication";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  category: Category[] = [];
  product: Product[] = [];
  pName: any;
  quantity = 0;
  fullName='';

   constructor(private service: ProductService, private  cartService: CartService, private auth: Authentication) { }

  ngOnInit(): void {
    this.getCategory();
    this.cartService.subjectItem.subscribe(resp =>{
      this.quantity = resp.length
    });
    this.fullName;
    console.log(this.auth.getFullName().fName + " " + this.auth.getFullName().lName);
  }
getCategory(){
    this.service.getAllCategory().subscribe(res => {
      this.category = res;
      this.fullName = this.auth.getFullName().fName + " " + this.auth.getFullName().lName
    })
}

  change(event: any){

     this.service.getProductWithSearch(event.target.value).subscribe(res =>{
       console.log(res)
     });
}
isLogin(){
     return this.auth.isLogin();

}

  logOut() {
    this.auth.logout();
  }
}
