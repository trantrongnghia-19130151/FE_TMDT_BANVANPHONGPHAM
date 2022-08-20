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
    this.authService.login(email, pass).subscribe(res=>{
        let d = JSON.parse(res);
        console.log("Đăng nhập thành công ", res);
        const expiresAt = moment().add(d.expiresIn,'second');
        localStorage.setItem('id_token', d.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
        this.router.navigateByUrl('/', { skipLocationChange: false });
       ;
      });
  }

}
