import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountPermissionGuard implements CanActivate {
  constructor(public router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const userAuthorized = localStorage.getItem('currentUser') || false;

    if (!userAuthorized) {
      this.router.navigate(['/login']);
      return true;
    }
    return true;
  }
}
