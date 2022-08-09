import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Authentication} from "../../service/authentication";
import {User} from "../../model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user!: User;

  constructor(private authService: Authentication) { }

  ngOnInit(): void {
  }

  checkPass(pass:string, repass:string):boolean{
    if(pass===repass){
      return true;
    }else{
      return false;
    }
  }
  onSubmit(form: NgForm) {
    console.log('DK')
    let email = form.value.email;
    let pass = form.value.password;
    let fname = form.value.firstName;
    let lname = form.value.lastName;
    let repass = form.value.prePassword;
    if(this.checkPass(pass, repass)){
      this.authService.register(fname, lname, email, pass, repass).subscribe(res=> {
        this.user = res;
      })
      form.reset();
    }

  }
}
