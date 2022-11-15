import { Injectable } from '@angular/core';
import { Observable, observable, of, BehaviorSubject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  fakeUsername: string = 'username';
  fakePassword: string = 'password';
  loginState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.isUserLoggedIn()
  );
  constructor() {}

  login(username: string, password: string): Observable<any> {
    if (username == this.fakeUsername && password == this.fakePassword) {
      localStorage.setItem('token', 'my-secret-token');
      this.loginState.next(true);
      return of(new HttpResponse({ status: 200 }));
    } else {
      this.loginState.next(false);
      return of(new HttpResponse({ status: 401 }));
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loginState.next(false);
  }

  isUserLoggedIn(): boolean {
    let loggedIn: boolean;
    if (localStorage.getItem('token') != null) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
    if (this.loginState != null) {
      this.loginState.next(loggedIn);
    }
    return loggedIn;
  }
}
