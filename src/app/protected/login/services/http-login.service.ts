import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LoginRequest } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class HttpLoginService {
  private http = inject(HttpClient);
  private apiBackUrl = environment.apiBackUrl;

  public login(loginForm: LoginRequest): Observable<any> {
    return this.http.post<any>(`${this.apiBackUrl}auth/login`, loginForm).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
