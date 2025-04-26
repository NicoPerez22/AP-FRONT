import { inject, Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { LoginService } from '../login/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private loginService = inject(LoginService);
  private router = inject(Router);

  canActivate(): boolean | UrlTree {
    if (this.loginService.isAuthenticated()) {
      return true;
    }
    return this.router.parseUrl('/login');
  }
}
