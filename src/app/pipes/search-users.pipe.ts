import { Pipe, PipeTransform } from '@angular/core';
import { INewUser } from './../services/user.service';

@Pipe({
  name: 'searchUsers'
})
export class SearchUsersPipe implements PipeTransform {

  transform(users: INewUser[], searchString?: string): any {
    console.log(searchString);
    if (searchString) {
      const search = searchString.toLowerCase();
      return users.filter(user => {
        if (user.firstName.toLowerCase().indexOf(search) >= 0) {
          return true;
        } else if (user.lastName.toLowerCase().indexOf(search) >= 0) {
          return true;
        } else if (user.email.toLowerCase().indexOf(search) >= 0) {
          return true;
        }
      });
    } else {
      return users;
    }
  }

}
