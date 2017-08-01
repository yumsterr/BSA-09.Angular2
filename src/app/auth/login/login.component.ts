import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { User } from './../../services/user.service';
import { FormControl, Validators, NgForm, FormGroup } from '@angular/forms'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [User]
})
export class LoginComponent implements OnInit {
  authFailed = false;
  loginFormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)]),
  });
  constructor(private user: User, public router: Router) { }

  ngOnInit() {
    console.log(this.router);
  }

  login() {
    if (this.loginFormGroup.valid) {
      const auth = this.user.login(this.loginFormGroup.value);
      if (auth.status == 'ok') {
        this.cabinetRoute();
      } else {
        this.authFailed = true;
      }
    }
  }

  cabinetRoute() {
    this.router.navigate(['/account']);
  }

  forgotRoute() {
    this.router.navigate(['/forgotpassword']);
  }

  signupRoute() {
    this.router.navigate(['/signup']);
  }

}
