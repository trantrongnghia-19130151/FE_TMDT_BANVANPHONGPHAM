import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../model/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // @ts-ignore
  subjectProduct: BehaviorSubject<string> = new BehaviorSubject<string>("");
  subject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
}

  getProductById(id: string) : Observable<any>{
    return this.http.get<any>("http://localhost:3000/product/" + id);
  }

  getProductByCateId(cateId: number | undefined) : Observable<any>{
    return this.http.get<any>('http://localhost:3000/product?cateId=' + cateId);
  }
  getProductByParentCateId(parent_cateId: number | undefined) : Observable<any>{
    return this.http.get<any>('http://localhost:3000/product?parent_cateId=' + parent_cateId);
  }

  getAllCategory(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/category/");
  }

  getAllProduct():Observable<any>{
    return this.http.get<any>("http://localhost:3000/product/");
  }
getAllProductLimit():Observable<any>{
    return this.http.get<any>("http://localhost:3000/product?_start=0&_end=4")
}
  getAllManufacture():Observable<any>{
    return this.http.get<any>("http://localhost:3000/manufactur/");
  }

  getProductWithSearch(name: any): Observable<any>{
    return this.http.get<any>('http://localhost:3000/product?name_like='+ name);
  }

  getCategoryById(cateId : string) : Observable<any>{
    return this.http.get<any>("http://localhost:3000/category?cateId=" + cateId );
  }
  getProductByBestSell():Observable<any>{
    return this.http.get<any>("http://localhost:3000/product?bestSeller=true&_start=0&_end=4")
  }
  getProductByDiscount():Observable<any> {
    return this.http.get<any>("http://localhost:3000/product?discount_gte=1&_start=0&_limit=4")
  }
    getAllProductBestSell():Observable<any>{
    return this.http.get<any>("http://localhost:3000/product?bestSeller=true")
  }
    getAllProductByDiscount(): Observable<any>{
    return this.http.get<any>("http://localhost:3000/product?discount_gte=1")

}


}
