import { User } from './../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { FormControl, Validators, NgForm, FormGroup } from '@angular/forms'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [User]
})
export class SignupComponent implements OnInit {
  signupFormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)]),
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthday: new FormControl(),
  });

  userExist = false;
  maxDate = new Date(2010, 11, 31);
  myInput: any;

  constructor(private user: User, public router: Router) { }

  ngOnInit() {
    console.log(this.signupFormGroup);
  }

  saveUser() {
    if (this.signupFormGroup.valid) {
      const add = this.user.add(this.signupFormGroup.value);
      if (add.status === 'ok' && add.auth.status === 'ok') {
        this.cabinetRoute();
      } else {
        if (add.message === 'user exist') {
          this.userExist = true;
        }
      }
      console.log(add);
    }
  }

  loginRoute() {
    this.router.navigate(['/login']);
  }

  cabinetRoute() {
    this.router.navigate(['/account']);
  }

  forgotRoute() {
    this.router.navigate(['/forgotpassword']);
  }

}
