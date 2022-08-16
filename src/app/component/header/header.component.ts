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
    console.log(this.pName)
this.change();
  }
getCategory(){
    this.service.getAllCategory().subscribe(res => {
      this.category = res;
      console.log(res);
    })
}
change(){
     this.service.send(this.pName);
  console.log(this.pName)
}
}
