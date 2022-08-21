import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {NgForm} from "@angular/forms";
import {CartService} from "../../service/cart.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  category: Category[] = [];
  product: Product[] = [];
  name:any;
  pName: any;
  quantity = 0;

   constructor(private service: ProductService, private  cartService: CartService) { }

  ngOnInit(): void {
    this.getCategory();
    this.cartService.subjectItem.subscribe(resp =>{
      this.quantity = resp.length
    });
  }
getCategory(){
    this.service.getAllCategory().subscribe(res => {
      this.category = res;
    })

}
  change(event: any){
if(event.target.value) {
  this.name = event.target.value;
  this.service.subjectProduct.next(this.name);
  this.service.getProductWithSearch(event.target.value).subscribe(res =>{
    this.product = res;

  });
}else{
  this.product=[]
}

}

  reset(form: NgForm) {
     this.name= "";
    form.reset();
  }

  closeReesult() {
    this.name=""
  }
}
