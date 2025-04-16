import { Injectable, signal } from '@angular/core';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loggedIn = signal<boolean>(false);

  private user = signal<User | null>(null);

  get isLoggedIn() {
    return this.loggedIn;
  }

  login(): void {
    this.loggedIn.set(true);
  }

  logout(): void {
    this.loggedIn.set(false);
  }
}
