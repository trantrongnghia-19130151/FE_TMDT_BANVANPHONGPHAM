import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Authentication} from "../../service/authentication";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: Authentication) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    let email = form.value.email;
    let pass = form.value.password;
    let fmame = form.value.firstName;
    let lname = form.value.lastName;
    let repass = form.value.prePassword;
    this.authService.register(fmame, lname, email, pass, repass).subscribe(res=>{
      console.log(
        res
      )
    })
    form.reset();
  }
}
