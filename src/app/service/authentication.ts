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


  constructor(private http: HttpClient) {
  }
  register(user:User){
    return this.http.post<User>(this.url+ 'user', user);
  }
  login():Observable<any>{
    return this.http.get<User>(this.url + 'user');
  }
  public isLogin() {
    const str = localStorage.getItem("user") || "";
    if (str==""){
      return false;
    } else{
      return true;
    }

  }

  logout(){
    localStorage.removeItem("user");
  }
}
