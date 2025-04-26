import { Injectable, signal } from '@angular/core';
import { User } from '../../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private $$user = signal<User | null>(null);

  get user() {
    return this.$$user;
  }

  login(user: User): void {
    this.$$user.set(user);
  }

  logout(): void {
    this.$$user.set(null);
  }
}
