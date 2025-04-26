import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
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
