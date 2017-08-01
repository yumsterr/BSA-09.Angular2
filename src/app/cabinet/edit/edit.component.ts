import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroup } from '@angular/forms'
import { User } from './../../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [User]

})
export class EditComponent implements OnInit {
  userEmail: string;
  userInfo: object = {};
  editFormGroup = new FormGroup({
    email: new FormControl({value: '', disabled: true}),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)]),
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthday: new FormControl(),
  });
  constructor(private user: User) {
    this.userEmail = localStorage.getItem('currentUser');
    this.userInfo = this.user.findByEmail(this.userEmail); 
  }

  ngOnInit() { }

  saveUser() {
    if (this.editFormGroup.valid) {
      console.log(this.editFormGroup.value);
      this.user.update(this.editFormGroup.value, this.userEmail);
    }
  }

}
