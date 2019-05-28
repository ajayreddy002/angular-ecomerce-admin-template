import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  submitLoginData = () => {
    if (this.loginForm.valid) {
      if (this.loginForm.controls.email.value === 'ajay@gmail.com' &&
        this.loginForm.controls.password.value === 'ajay@123') {
          this.authService.isLoggedIn = true;
          localStorage.setItem('token', 'ajTokenService');
          this.authService.login();
      }
    }
  }
}
