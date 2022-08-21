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
  arrays: any = [];
  tempArray: any = [];
  newArray: any = [];
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

      this.service.getProductWithSearch(this.name).subscribe(res => {
        this.product = res;
        this.arrays = res;
      });
    })
    this.service.subjectProductByCateId.subscribe(res => {
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


  onChange(event:any) {


    if (event.target.checked) {

      this.tempArray = this.product.filter((e: any) => ( e.idNsx == event.target.value || (e.price - (e.price * e.discount / 100) <= event.target.max && e.price - (e.price * e.discount / 100) >= event.target.min)));
      this.product= [];
      this.newArray=[];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];
           this.product.push(obj);

        }
      }
    } else {

      this.tempArray = this.product.filter((e: any) => ( e.idNsx != event.target.value && (e.price - (e.price * e.discount / 100) > event.target.max || e.price - (e.price * e.discount / 100) < event.target.min)));
      this.newArray = [];
      this.product = [];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];
          this.product.push(obj);
        }
        if (firstArray.length === 0 || !event.target.value) {
           this.product = this.arrays;
        }
      }
    }
  }
addToCart(p : Product){
    this.cartService.addToCart(p, 1);
}
  // @ts-ignore
  sort(event:any){
    console.log(event[0]);
    if(event[0]==1) {
      this.service.getAllProduct().subscribe(res => {
        this.product = res;

      })
    }
    if(event[0]==2) {
       let d = new Date();

      this.tempArray =  this.product.filter((value:any)=>(value.inputDay != undefined));
      this.product=[];
      this.newArray=[];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];
          if(d.getDate()-obj.inputDay.slice(8, 10) <= 10 && d.getMonth()+1 == Number.parseInt(obj.inputDay.slice(5, 7)) && d.getFullYear() == Number.parseInt(obj.inputDay.slice(0,4))){
            this.product.push(obj);
          }

        }
      }

    }
    if(event[0]==3) {
      this.product =  this.product.filter((value:any)=> value.discount > 0);

    }
    if(event[0]==4) {
      this.product =  this.product.filter((value:any)=> value.bestSeller == false);

    }
    if(event[0]==5){
     this.product.sort((a,b)=>(a.price > b.price)? -1:1);

    }
    if(event[0]==6) {
      this.product.sort((a,b)=>(a.price > b.price)? 1:-1);

    }
}

  stopPropagation(event:any) {
    event.stopPropagation()
  }

  getCate(event:any) {
    this.service.getProductByParentCateId(event[0]).subscribe((res:any)=>{
      this.product = res;
    })
  }

  getSubCate(event:any) {
    this.service.getProductByCateId(event[0]).subscribe((res:any)=>{
      this.product = res;
    })
  }
}
