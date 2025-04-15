import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MessageHandlerService } from '../message-handler/message-handler.service';

@Injectable()
export class MessageInterceptor implements HttpInterceptor {
  readonly #messageHandler = inject(MessageHandlerService);
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.#messageHandler.handleError(error);
        return throwError(() => error);
      })
    );
  }
}
