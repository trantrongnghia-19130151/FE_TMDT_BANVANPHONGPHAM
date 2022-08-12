import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {Category} from "../../model/category";
import {Manufactur} from "../../model/manufactur";
import {ProductService} from "../../service/product.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product : Product[] = [];
   category: Category[] = [];
   nsx : Manufactur[] =[];
  options = [
    { value: '1', label: 'Sản phẩm mới nhất' },
    { value: '2', label: 'Sản phẩm giảm giá' },
    { value: '3', label: 'Sản phẩm bán chạy' },
    { value: '4', label: 'Giá giảm dần' },
    { value: '5', label: 'Giá tăng dần' },
  ];
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
    this.getManufactur();
  }
  getProduct(){
    this.service.getAllProduct().subscribe(res => {
      this.product = res;
    })

  }
  getCategory(){
    this.service.getAllCategory().subscribe(res => {
      this.category = res;
    })
  }
  getManufactur(){
    this.service.getAllManufacture().subscribe(res => {
      this.nsx = res;
    })
  }

}
