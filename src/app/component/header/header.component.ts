import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  category: Category[] = [];
  product: Product[] = [];
name:any;
   constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getCategory();

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
    console.log("hello")
  }

  closeReesult() {
    this.name=""
  }
}
