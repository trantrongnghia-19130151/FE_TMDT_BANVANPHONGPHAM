import {Component,  OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product !: Product;
  relateProduct : Product[] = [];
  id = '';
  qty = 1;
  constructor(private pService : ProductService, private cartService: CartService,private routLink: ActivatedRoute) { }

  ngOnInit(): void {
    this.routLink.paramMap.subscribe(params => {
      this.id = params.get('id') || ''
    })
    this.pService.getProductById(this.id).subscribe(p => {
      this.product = p;
      this.pService.getProductByCateId(this.product?.cateId).subscribe(products =>{
        this.relateProduct = products;
      })
    })
  }
  minus() {
    if(this.qty > 1){
      this.qty--
    }
  }

  plus() {
    this.qty++
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.qty)
  }
}
