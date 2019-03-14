import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceLogin } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userServiceLogin: UserServiceLogin, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.userServiceLogin.isLoggedIn()) {
        this.router.navigateByUrl('/login');
        this.userServiceLogin.deleteToken();
        return false;
      }
    return true;
  }
}
