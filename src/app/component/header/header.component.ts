import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  category: Category[] = [];
  product: Product[] = [];
  pName: any;

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

     this.service.getProductWithSearch(event.target.value).subscribe(res =>{
       console.log(res)
     });
}
}
