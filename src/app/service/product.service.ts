import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductById(id: string) : Observable<any>{
    return this.http.get<any>("http://localhost:3000/product/" + id);
  }
  getProductByCateId(cateId : string) : Observable<any>{
    return this.http.get<any>('http://localhost:3000/product?cateId=' + cateId);
  }
  getAllProduct():Observable<any>{
    return this.http.get<any>("http://localhost:3000/product/");
  }
  getAllCategory():Observable<any>{
    return this.http.get<any>("http://localhost:3000/category/");
  }
  getAllManufacture():Observable<any>{
    return this.http.get<any>("http://localhost:3000/manufactur/");
  }
  getCategoryById(cateId : string) : Observable<any>{
    return this.http.get<any>("http://localhost:3000/category?cateId=" + cateId );
  }


}
