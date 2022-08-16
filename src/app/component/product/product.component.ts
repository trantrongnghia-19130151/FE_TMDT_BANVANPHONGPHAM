import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {Category} from "../../model/category";
import {Manufactur} from "../../model/manufactur";
import {ProductService} from "../../service/product.service";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product : Product[] = [];
   category: Category[] = [];
   nsx : Manufactur[] =[];
   arrays: any = [];
   tempArray:any =[];
   newArray: any = [];


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
      this.arrays = res;
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

  onChange(event:any) {


    if (event.target.checked) {
      this.tempArray = this.arrays.filter((e: any) => (e.cateId == event.target.value || e.idNsx == event.target.value));
      this.product = [];
      this.newArray.push(this.tempArray);
      // console.log(this.newArray)
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          obj = firstArray[i];
          this.product.push(obj);

        }
      }
    } else {

      this.tempArray = this.product.filter((e: any) => (e.cateId != event.target.value && e.idNsx != event.target.value));
      this.newArray = [];
      this.product = [];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];


          this.product.push(obj);
        }

        // console.log(this.product.length)

    }
    if (firstArray.length === 0) {
      this.product = this.arrays;

    }

      // console.log(this.newArray)
    }
  }
}
