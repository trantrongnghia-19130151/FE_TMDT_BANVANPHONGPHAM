import {Component, NgModule, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import * as moment from 'moment';
import {Authentication} from "../../service/authentication";
import {Router} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
@ViewChild('loginForm')
loginForm!: NgForm;

  constructor(private authService: Authentication, private router:Router) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    let email = form.value.email;
    let pass = form.value.password;
    console.log(email, pass)
    this.authService.login().subscribe(res=>{
      console.log(res);
      const user = res.find((a:any)=>{
        return a.email === email && a.password === pass;
      });
      if(user){
        form.reset();
        this.router.navigateByUrl("/");
        localStorage.setItem("user", JSON.stringify(user));
      }else{
        alert("Không tồn tại người dùng này");
      }
      });
  }

}
