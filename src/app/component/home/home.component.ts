import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {CartService} from "../../service/cart.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product: Product[] = [];
  productBest: Product[] = [];
  productDis: Product[] = [];

  constructor(private service: ProductService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.getProduct();
    this.getProductByBestSell();
    this.getProductByDis();
  }

  getProduct() {
    this.service.getAllProductLimit().subscribe(res => {
      this.product = res;
    })
  }

  getAllProduct() {
    this.service.subjectProduct.next("")
  }

  getProductByBestSell() {
    this.service.getProductByBestSell().subscribe(res => {
      this.productBest = res;
    })
  }

  getAllProductByBestSell() {
    this.service.subjectProduct.next("bestSeller")
  }


  getAllProductByDis() {
    this.service.subjectProduct.next("discount")
  }

  getProductByDis() {
    this.service.getProductByDiscount().subscribe(res => {
      this.productDis = res;
    })
  }

  addToCart(p: Product) {
    this.cartService.addToCart(p, 1);
  }

  stopPropagation(event: any) {
    event.stopPropagation()
  }

}
