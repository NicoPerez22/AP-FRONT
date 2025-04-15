import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class MessageHandlerService {
  snack = inject(NzMessageService);
  showSuccessMsg(msg: string) {
    this.snack.success(`${msg}`, {
      nzDuration: 5000,
    });
  }

  handleError(error: HttpErrorResponse) {
    switch (error.status) {
      case 500: // internal server error
        this.snack.error(
          'Ocurrió un problema interno en el servidor.',
          this.snackConfig()
        );
        break;
      case 400:
        this.snack.error(
          `${error.error['invalid-params'].entries}`,
          this.snackConfig()
        );
        break;
      case 401:
      case 403:
        this.snack.info(
          'No tiene permisos para realizar esta consulta.',
          this.snackConfig()
        );
        break;
      case 503:
      case 409:
        this.snack.error(`${error.error.Detail}`, this.snackConfig());
        break;
      case 0:
        this.snack.info(
          `Verifique la conexión con el servidor.`,
          this.snackConfig()
        );
        break;
      default:
        this.snack.success(
          `Ha ocurrido un error al procesar la solicitud.`,
          this.snackConfig()
        );
        break;
    }
  }

  private snackConfig(): any {
    return {
      nzDuration: 5000,
    };
  }
}
