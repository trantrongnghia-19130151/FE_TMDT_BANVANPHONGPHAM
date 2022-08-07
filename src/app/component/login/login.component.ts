import {Component, NgModule, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Authentication} from "../../service/authentication";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
@ViewChild('loginForm')
loginForm!: NgForm;

  constructor(private authService: Authentication) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    // let email = form.value.email;
    // let pass = form.value.password;
    // this.authService.login(email, pass).subscribe(res=>{
    //   console.log(
    //     res
    //   )
    // })
  }

}
