import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../model/product";
import {HeaderComponent} from "../component/header/header.component";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // @ts-ignore
  private value :HeaderComponent = new HeaderComponent();
  subjectProduct: BehaviorSubject<string> = new BehaviorSubject<string>("");

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

  getAllManufacture():Observable<any>{
    return this.http.get<any>("http://localhost:3000/manufactur/");
  }

  getProductWithSearch(name: any): Observable<any>{
    return this.http.get<any>('http://localhost:3000/product?name_like='+ name);
  }

  getCategoryById(cateId : string) : Observable<any>{
    return this.http.get<any>("http://localhost:3000/category?cateId=" + cateId );
  }

}
