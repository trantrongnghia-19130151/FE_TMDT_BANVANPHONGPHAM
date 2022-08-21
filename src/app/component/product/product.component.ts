import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {Category} from "../../model/category";
import {Manufactur} from "../../model/manufactur";
import {ProductService} from "../../service/product.service";
import {CartService} from "../../service/cart.service";
import {animate} from "@angular/animations";
import {log10} from "chart.js/helpers";



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
   arrays: any = [];
   tempArray:any =[];
   newArray: any = [];
   copArray:any=[];
   p: number =1;


  options = [
    { value: 1, label: 'Tất cả sản phẩm' },
    { value: 2, label: 'Sản phẩm mới nhất' },
    { value: 3, label: 'Sản phẩm giảm giá' },
    { value: 4, label: 'Sản phẩm bán chạy' },
    { value: 5, label: 'Giá giảm dần' },
    { value: 6, label: 'Giá tăng dần' },
  ];



  constructor(private service: ProductService, private cartService: CartService) { }




  ngOnInit(): void {
    this.getCategory();
    this.getManufactur();
     this.getProduct();



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

      this.tempArray = this.product.filter((e: any) => (e.cateId == event.target.value || e.idNsx == event.target.value || (e.price - (e.price * e.discount / 100) <= event.target.max && e.price - (e.price * e.discount / 100) >= event.target.min)));
      this.product= [];
      this.newArray=[];
      console.log(this.product)
      this.newArray.push(this.tempArray);
      // console.log(this.newArray)
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];
           this.product.push(obj);
          console.log(this.product)

          // console.log(this.product)
        }
      }
    } else {

      this.tempArray = this.product.filter((e: any) => (e.cateId != event.target.value && e.idNsx != event.target.value && (e.price - (e.price * e.discount / 100) > event.target.max || e.price - (e.price * e.discount / 100) < event.target.min)));
      this.newArray = [];
      this.product = [];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let i = 0; i < firstArray.length; i++) {
          var obj = firstArray[i];


          this.product.push(obj);


          // console.log(this.product.length)

        }
        if (firstArray.length === 0 || !event.target.value) {
          // console.log(firstArray.length)
           this.product = this.arrays;


        }

        // console.log(this.newArray)
      }
    }
  }
addToCart(p : Product){
    this.cartService.addToCart(p, 1);
}

  // @ts-ignore

  sort(event:any){
    console.log(event.target.value);
    if(event.target.value==1) {
      this.service.getAllProduct().subscribe(res => {
        this.product = res;

      })
    }
    if(event.target.value==2) {
       let d = new Date();

      this.tempArray =  this.product.filter((value:any)=>(value.inputDay != undefined));
      this.product=[];
      this.newArray=[];
      this.newArray.push(this.tempArray);
      // console.log(this.newArray)
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
    if(event.target.value==3) {
      this.product =  this.product.filter((value:any)=> value.discount > 0);

    }
    if(event.target.value==4) {
      this.product =  this.product.filter((value:any)=> value.bestSeller == false);

    }
    if(event.target.value==5){
     this.product.sort((a,b)=>(a.price > b.price)? -1:1);

    }
    if(event.target.value==6) {
      this.product.sort((a,b)=>(a.price > b.price)? 1:-1);

    }
}

}
