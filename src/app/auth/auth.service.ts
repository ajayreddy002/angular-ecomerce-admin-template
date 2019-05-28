import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  public login() {
    localStorage.setItem('token', 'ajServiceToken');
    this.router.navigate(['/home/dashboard']);
  }
  public isAuthenticated = (): boolean => {
    return localStorage.getItem('token') !== null;
  }
  logout(): void {
    localStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
