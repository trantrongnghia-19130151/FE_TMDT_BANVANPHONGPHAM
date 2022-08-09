import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class Authentication {
  url='http://localhost:3000/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    }),
  }

  constructor(private http: HttpClient) {
  }
  register(firstName:string, lastName:string, email: string, password:string, prePassword:string): Observable<any>{
    return this.http.post(this.url+ 'register', {"firstName":firstName, "lastName": lastName, "email":email, "password":password, "prePassword": prePassword});
  }
  login(email:string, pass:string):Observable<any>{
    return this.http.post(this.url + 'login', {"email":email, "password":pass}, this.httpOptions);
  }
  public isLogin() {
    const str = localStorage.getItem("expires_at") || "";
    if (str=="") return false;
    const expiresAt = JSON.parse(str);
    return moment().isBefore(moment(expiresAt));
  }
}
