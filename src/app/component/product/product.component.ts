import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {Category} from "../../model/category";
import {Manufactur} from "../../model/manufactur";
import {ProductService} from "../../service/product.service";
import {CartService} from "../../service/cart.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product : Product[] = [];
   category: Category[] = [];
   nsx : Manufactur[] =[];
name:any;

  options = [
    { value: '1', label: 'Sản phẩm mới nhất' },
    { value: '2', label: 'Sản phẩm giảm giá' },
    { value: '3', label: 'Sản phẩm bán chạy' },
    { value: '4', label: 'Giá giảm dần' },
    { value: '5', label: 'Giá tăng dần' },
  ];


  constructor(private service: ProductService, private cartService: CartService) { }



  ngOnInit(): void {
    this.getCategory();
    this.getManufactur();
     this.getProduct();



  }
  getProduct(){
    this.service.subjectProduct.subscribe(res => {
      this.name = res;
      this.service.getProductWithSearch(this.name).subscribe(res=>{
        this.product = res;


      })
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

addToCart(p : Product){
    this.cartService.addToCart(p, 1);
}

}
