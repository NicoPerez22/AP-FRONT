import { Injectable, computed, signal } from '@angular/core';
import { User } from '../../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private $$user = signal<User | null>(null);

  readonly isAuthenticated = computed(() => {
    const user = this.$$user();
    return user !== null && Date.now() < user.expiryToken;
  });

  constructor() {
    const userLocalStorage = localStorage.getItem('user');
    if (userLocalStorage) {
      try {
        const userParsed: User = JSON.parse(userLocalStorage);
        if (Date.now() < userParsed.expiryToken) {
          this.$$user.set(userParsed);
        } else {
          localStorage.removeItem('user');
        }
      } catch (error) {
        console.error('Error parsing user from localStorage', error);
        localStorage.removeItem('user');
      }
    }
  }

  get user() {
    return this.$$user;
  }

  login(user: User): void {
    this.$$user.set(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(): void {
    this.$$user.set(null);
    localStorage.removeItem('user');
  }
}
