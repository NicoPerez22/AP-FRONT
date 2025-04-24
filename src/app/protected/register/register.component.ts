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
import { RegisterRequest } from './models/register';
import { HttpRegisterService } from './services/http-register.service';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export default class RegisterComponent {
  private fb = inject(FormBuilder);
  private httpRegisterService = inject(HttpRegisterService);
  private router = inject(Router);
  private messageService = inject(NzMessageService);

  passwordVisible = false;

  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const registerForm: RegisterRequest = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      };
      this.httpRegisterService.registerForm(registerForm).subscribe({
        next: (response) => {
          if (response.data == null && response.httpCode == 200) {
            this.messageService.error(response?.message);
          } else if (response?.id) {
            this.messageService.success('Se registró correctamente');
            setTimeout(() => {
              this.registerForm.reset(), this.router.navigate(['dashboard']);
            }, 200);
          }
        },
        error: () => {
          this.messageService.error(
            'No se pudo registrar el usuario, la conexión falló'
          );
        },
      });
    } else {
      this.messageService.error('El formulario es inválido');
    }
  }
}
