import { inject, Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { LoginService } from '../login/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  private login = inject(LoginService);
  private router = inject(Router);

  canActivate(): boolean | UrlTree {
    if (this.login.isLoggedIn()) {
      return this.router.parseUrl('/dashboard');
    }
    return true;
  }
}
