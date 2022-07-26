import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {Category} from "../../model/category";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product! : Product;
  @Input() category!: Category;
  options = [
    { value: '1', label: 'Sản phẩm mới nhất' },
    { value: '2', label: 'Sản phẩm giảm giá' },
    { value: '3', label: 'Sản phẩm bán chạy' },
    { value: '4', label: 'Giá giảm dần' },
    { value: '5', label: 'Giá tăng dần' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
