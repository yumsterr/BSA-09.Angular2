import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroup } from '@angular/forms'
import { User } from './../../services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [User]

})
export class UsersListComponent {
  allUsers = [];
  currentSortField = 'id';
  currentSortDirection = 'asc';

  constructor(private user: User) {
    this.allUsers = this.user.getAll();
  }

  ngOnInit() {
  }
  sort(field) {
    const sortDirection = this.setSortDirection(field);;
    this.allUsers.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      switch (field) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'firstName': [propertyA, propertyB] = [a.firstName, b.firstName]; break;
        case 'lastName': [propertyA, propertyB] = [a.lastName, b.lastName]; break;
        case 'email': [propertyA, propertyB] = [a.email, b.email]; break;
        case 'birthday': [propertyA, propertyB] = [a.birthday, b.birthday]; break;
      }
      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (sortDirection == 'asc' ? 1 : -1);
    }
    );

  }
  setSortDirection(field) {
    if (field === this.currentSortField) {
      this.currentSortDirection = (this.currentSortDirection === 'asc') ?'desc' : 'asc';
    } else {
      this.currentSortDirection = 'asc';
    }
    this.currentSortField = field;
    return this.currentSortDirection;
  }
}
