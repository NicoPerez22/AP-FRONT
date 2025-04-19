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

  passwordVisible = false;

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Send the obj to databse
      console.log(this.loginForm.value);
      // this.auth.login(this.loginForm.value).subscribe({
      //   next: (res: any) => {
      //     alert(res.message),
      //       this.loginForm.reset(),
      //       this.router.navigate(['dashboard']);
      //   },
      //   error: (err: any) => {
      //     alert(err?.error.message);
      //   },
      // });
    } else {
      // Throw the error using toaster and with required fields
      //this.toastr.error('Your form is invalid');
    }
  }
}
