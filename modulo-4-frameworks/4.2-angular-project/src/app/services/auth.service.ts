import { Injectable } from '@angular/core';
import { Login } from '../model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private readonly VALID_USERNAME = 'master8@lemoncode.net';
  private readonly VALID_PASSWORD = '12345678';
  public isLoggedIn = false;

  login({
    username,
    password,
  }: Login): Observable<boolean> {
    if (username === this.VALID_USERNAME && password === this.VALID_PASSWORD) {
      localStorage.setItem("isLoggedIn", `${this.isLoggedIn}`);
      localStorage.setItem("username", `${username}`);
      return of(true).pipe(delay(2000));
    }
    return of(false).pipe(delay(2000));
  }
  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
  }
  getUsername(): string {
    return localStorage.getItem("username") || "";
  }
}
