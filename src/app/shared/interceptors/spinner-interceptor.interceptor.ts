import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from '../components/spinner/services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  readonly #spinner = inject(SpinnerService);
  #activeRequest = 0;
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.#activeRequest === 0) {
      this.#spinner.show();
    }
    this.#activeRequest++;

    return next.handle(request).pipe(finalize(() => this.stopLoader()));
  }

  private stopLoader() {
    this.#activeRequest--;
    if (this.#activeRequest === 0) {
      this.#spinner.hide();
    }
  }
}
