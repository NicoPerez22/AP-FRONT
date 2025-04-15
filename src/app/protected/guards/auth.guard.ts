import { inject, Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private login = inject(LoginService);
  private router = inject(Router);

  canActivate(): boolean | UrlTree {
    if (this.login.isLoggedIn()) {
      return true;
    }
    return this.router.parseUrl('/login');
  }
}
