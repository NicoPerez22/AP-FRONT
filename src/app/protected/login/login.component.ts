import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    //this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    //this.isText ? this.type = "text" : this.type = "password";
    if (this.isText) {
      this.eyeIcon = 'fa-eye';
      this.type = 'text';
    } else {
      this.eyeIcon = 'fa-eye-slash';
      this.type = 'password';
    }
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
      this.validateAllFormFields(this.loginForm);
      //this.toastr.error('Your form is invalid');
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
