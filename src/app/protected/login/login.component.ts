import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginRequest } from './models/login';
import { HttpLoginService } from './services/http-login.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private httpLoginService = inject(HttpLoginService);
  private messageService = inject(NzMessageService);

  passwordVisible = false;

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const loginForm: LoginRequest = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.httpLoginService.login(loginForm).subscribe({
        next: (response) => {
          if (response.data == null && response.httpCode == 200) {
            this.messageService.error(response?.message);
          } else if (response?.id) {
            // this.messageService.success('Se registró correctamente');
            // setTimeout(() => {
            //   this.loginForm.reset(), this.router.navigate(['dashboard']);
            // }, 200);
          }
        },
        error: () => {
          this.messageService.error('No se pudo ingresar, la conexión falló');
        },
      });
    } else {
      this.messageService.error('El formulario es inválido');
    }
  }

  redirectTo(path: string) {
    this.router.navigate([path]);
  }
}
