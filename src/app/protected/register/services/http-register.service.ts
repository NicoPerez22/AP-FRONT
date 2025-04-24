import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { RegisterRequest } from '../models/register';

@Injectable({
  providedIn: 'root',
})
export class HttpRegisterService {
  private http = inject(HttpClient);
  private apiBackUrl = environment.apiBackUrl;

  public registerForm(registerForm: RegisterRequest): Observable<any> {
    return this.http
      .post<any>(`${this.apiBackUrl}auth/register`, registerForm)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
