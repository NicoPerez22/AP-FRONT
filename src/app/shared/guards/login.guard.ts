import { inject, Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { LoginService } from '../../protected/login/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  private loginService = inject(LoginService);
  private router = inject(Router);

  canActivate(): boolean | UrlTree {
    if (this.loginService.isAuthenticated()) {
      return this.router.parseUrl('/dashboard');
    }
    return true;
  }
}
