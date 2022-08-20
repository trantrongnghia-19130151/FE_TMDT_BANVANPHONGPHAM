import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import * as moment from 'moment';
import {User} from "../model/user";


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
  register(user:User){
    return this.http.post<User>(this.url+ 'user', user);
  }
  login(email:string, pass:string):Observable<any>{
    let value = {"email":email, "password":pass};
    return this.http.post<User>(this.url + 'user', JSON.stringify(value), this.httpOptions);

  }
  public isLogin() {
    const str = localStorage.getItem("expires_at") || "";
    if (str=="") return false;
    const expiresAt = JSON.parse(str);

    return moment().isBefore(moment(expiresAt));
  }
}
