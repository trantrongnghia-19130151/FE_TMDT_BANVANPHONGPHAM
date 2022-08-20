import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Authentication} from "../../service/authentication";
import {User} from "../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 user!: User;

  constructor(private authService: Authentication, private router: Router) { }

  ngOnInit(): void {
  }

  checkPass(pass:string, repass:string):boolean{

    console.log(typeof pass===repass)
    if(pass === repass){
      return true;
    }else{
      return false;
    }
  }
  onSubmit(form: NgForm) {
let u=  new User();
    u.fName = form.control.get("fname")?.value;
    u.lName = form.control.get("lname")?.value;
    u.email = form.control.get("email")?.value;
    u.password = form.control.get("password")?.value;
    u.rePassword = form.control.get("rePassword")?.value;

      if(this.checkPass(u.password, u.rePassword)){
      this.authService.register(u).subscribe(res =>{
        form.reset();
        this.router.navigateByUrl("/login");
      })

    }else{
      alert("mật khẩu sai");
    }


  }
}
