import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'
import { User } from './../../services/user.service';
import { MathValidateService } from './../../services/math-validate.service';
import { FormControl, Validators, NgForm, FormGroup } from '@angular/forms'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
  providers: [User, MathValidateService]
})
export class ForgotPassComponent {
  validated = false;
  validation = new MathValidateService();
  validationShow = false;
  validationError = false;
  forgotFormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]),
    validateConfirm: new FormControl(),
  });
  constructor(private user: User, public router: Router) { }

  forgot() {
    if (this.forgotFormGroup.valid) {
      if (!this.validationShow) {
        this.validationShow = true;
      } else {
        const valRes = this.validation.confirmValidation(this.forgotFormGroup.value.validateConfirm);
        if (valRes) {
          this.validated = true;
        } else {
          this.validationError = true;
          this.validation = new MathValidateService();
        }
      }
      if (this.validated) {
        let navigationExtras: NavigationExtras = {
          queryParams: { 'email': this.forgotFormGroup.value.email },
        };
        this.router.navigate(['/forgotpassword/change'], navigationExtras);
      }
    }
  }

  mathExpCreate
  signupRoute() {
    this.router.navigate(['/signup']);
  }

  loginRoute() {
    this.router.navigate(['/login']);
  }
}
