import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  category: Category[] = [];
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getCategory();
  }
getCategory(){
    this.service.getAllCategory().subscribe(res => {
      this.category = res;
      console.log(res);
    })
}
}
