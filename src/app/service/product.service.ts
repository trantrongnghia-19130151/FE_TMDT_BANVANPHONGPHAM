import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HeaderComponent} from "../component/header/header.component";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
// @ts-ignore
  private value : HeaderComponent= new HeaderComponent();

  constructor(private http: HttpClient) { }
public get ValueFromChild():Observable<any>{
    return this.value.pName;
}
public send(pName: any){
    return pName;
}
  getProductById(id: string) : Observable<any>{

    return this.http.get<any>("http://localhost:3000/product/" + id);
  }

  getProductByCateId(cateId: number): Observable<any> {
    return this.http.get<any>('http://localhost:3000/product?idNsx=' + cateId);
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

}
