import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../../protected/login/services/login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private loginService = inject(LoginService);

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Se excluyen las llamadas a 'auth/login' y 'auth/register'
    const exemptUrls = ['auth/login', 'auth/register'];
    if (!exemptUrls.some((url) => request.url.includes(url))) {
      const user = this.loginService.user;
      if (user && user()!.bearerToken) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${user()!.bearerToken}`,
          },
        });
      }
    }
    return next.handle(request);
  }
}
