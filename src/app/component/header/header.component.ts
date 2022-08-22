import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {NgForm} from "@angular/forms";
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
  name:any;
  quantity = 0;
  fullName='';

   constructor(private service: ProductService, private  cartService: CartService, private auth: Authentication) { }

  ngOnInit(): void {
    this.getCategory();
    this.cartService.subjectItem.subscribe(resp =>{
      this.quantity = resp.length
    });
    this.getUsername();

  }
  getCategory(){
    this.service.getAllCategory().subscribe(res => {
      this.category = res;
    })

}
  change(event: any) {
    if (event.target.value) {
      this.name = event.target.value;
      this.service.subjectProduct.next(this.name);
      this.service.getProductWithSearch(event.target.value).subscribe(res => {
        this.product = res;

      });
    } else {
      this.product = []
    }
  }
isLogin(){
     return this.auth.isLogin();

}
async getUsername(){
  const fullName = localStorage.getItem("user");
  const str:any = fullName != null ?  JSON.parse(fullName): [];
    this.fullName = str.fName + " " + str.lName
}
  logOut() {
    this.auth.logout();
}
  closeReesult() {
    this.name=""
  }

  getCate(event:any) {
    this.service.getProductByParentCateId(event[0]).subscribe((res:any)=>{
      this.product = res;

    })
  }

  getSubCate(event:any) {
    this.service.getProductByCateId(event[0]).subscribe((res:any)=>{
      this.product = res;

    })
  }
}
