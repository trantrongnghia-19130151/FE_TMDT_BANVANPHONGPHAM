import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class Authentication {
  url='http://localhost:3000/auth/';

  constructor(private http: HttpClient) {
  }
  register(firstName:string, lastName:string, email: string, password:string, prePassword:string): Observable<any>{
    return this.http.post(this.url+ 'register', {"firstName":firstName, "lastName": lastName, "email":email, "password":password, "prePassword": prePassword});
  }
  login(email:string, pass:string){

  }
}
