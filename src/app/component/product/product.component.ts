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
  @Input() product: Product[] = [];

  category: Category[] = [];
  nsx: Manufactur[] = [];
  name: any;
  arrays: Product[] = [];
  firstArray: any = [];
  p: number = 1;


  options = [
    {value: 1, label: 'Tất cả sản phẩm'},
    {value: 2, label: 'Sản phẩm mới nhất'},
    {value: 3, label: 'Sản phẩm giảm giá'},
    {value: 4, label: 'Sản phẩm bán chạy'},
    {value: 5, label: 'Giá giảm dần'},
    {value: 6, label: 'Giá tăng dần'},
  ];


  constructor(private service: ProductService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.getManufactur();
    this.getProduct();
  }
  getProduct() {
    this.service.subjectProduct.subscribe(res => {
      this.name = res;
      switch (this.name) {
        case 'bestSeller' : {
          this.service.getAllProductBestSell().subscribe(resp => {
            this.product = resp;
            this.arrays = resp;
          })
          break;
        }
        case 'discount' : {
          this.service.getAllProductByDiscount().subscribe(resp => {
            this.product = resp;
            this.arrays = resp;
            console.log(this.product)
          })
          break;
        }
        default: {
          this.service.getProductWithSearch(this.name).subscribe(resp => {
            this.product = resp;
            this.arrays = resp;
          })
          break;
        }
      }
    })
    this.service.subject.subscribe(res=>{
      this.product=res;
      this.arrays=res;
    })

  }
  getCategory() {
    this.service.getAllCategory().subscribe(res => {
      this.category = res;

    })
  }

  getManufactur() {
    this.service.getAllManufacture().subscribe(res => {
      this.nsx = res;
    })
  }


  onChange(event: any) {
    let max = event.target.max;
    let min = event.target.min;
    if (event.target.checked) {
      this.arrays = this.product.filter((e: any) => ((e.price - (e.price * e.discount / 100) <= max && e.price - (e.price * e.discount / 100) >= min)));
    } else {
      this.arrays = this.product;
    }
  }
  addToCart(p: Product) {
    this.cartService.addToCart(p, 1);
  }

  // @ts-ignore
  sort(event: any) {

    if (event[0] == 1) {
      this.arrays = this.product
    }
    if (event[0] == 2) {
      let d = new Date();
      this.arrays = this.product.filter((value: any) => (value.inputDay != undefined));
      this.arrays = this.arrays.filter((value : any) => (d.getDate()- Number.parseInt(value.inputDay.slice(8, 10)) <= 10 && d.getMonth()+1 == Number.parseInt(value.inputDay.slice(5, 7)) && d.getFullYear() == Number.parseInt(value.inputDay.slice(0,4))));
      console.log(this.arrays)
    }
    if (event[0] == 3) {
      this.arrays = this.product.filter((value: any) => value.discount > 0);
    }
    if (event[0] == 4) {
      this.arrays = this.product.filter((value: any) => value.bestSeller == true);

    }
    if (event[0] == 5) {
      this.arrays.sort((a, b) => (a.price > b.price) ? -1 : 1);

    }
    if (event[0] == 6) {
      this.arrays.sort((a, b) => (a.price > b.price) ? 1 : -1);

    }
  }

  stopPropagation(event: any) {
    event.stopPropagation()
  }

  getCate(event: any) {
    this.service.getProductByParentCateId(event[0]).subscribe((res: any) => {
      this.product = res;
      this.arrays = res;
    })
  }

  getSubCate(event: any) {
    this.service.getProductByCateId(event[0]).subscribe((res: any) => {
      this.product = res;
      this.arrays = res;
    })
  }
}
