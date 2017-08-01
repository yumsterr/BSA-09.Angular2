import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'
import { User } from './../../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  info = { email: '', pass: ''};
  notFound = false;
  constructor(private user: User, public router: ActivatedRoute) { }

  ngOnInit() {
    const email = this.router.snapshot.queryParams.email;
    if (email) {
      const pass = this.user.getPass(email);
      console.log(pass);
      if (pass) {
        this.info.email = email;
        this.info.pass = pass;
      } else {
        this.notFound = true;
      }
    }

  }

}
