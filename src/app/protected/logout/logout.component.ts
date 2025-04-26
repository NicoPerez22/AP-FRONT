import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent {
  private loginService = inject(LoginService);
  private router = inject(Router);

  constructor() {
    setTimeout(() => {
      this.loginService.logout();
      this.router.navigate(['/login']);
    }, 2000);
  }
}
