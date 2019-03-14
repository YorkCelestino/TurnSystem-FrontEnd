import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceLogin } from 'src/app/auth/user.service';
import { Console } from '@angular/core/src/console';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private userServiceLogin: UserServiceLogin, private router: Router) { }

  model = {
    usuarios: '',
    password: ''
  };
  // tslint:disable-next-line:max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
    if (this.userServiceLogin.isLoggedIn()) {
      this.router.navigateByUrl('/atencion');
    }
  }

  onSubmit(form: NgForm) {
    this.userServiceLogin.login(form.value).subscribe(
      res => {

        console.log(this.userServiceLogin.login(form.value));
        this.userServiceLogin.setToken(res['token']);
        this.router.navigateByUrl('/atencion');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
    // this.router.navigateByUrl('/atencion');
  }

}
