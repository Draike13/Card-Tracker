import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  fakeUsername: string = 'username';
  fakePassword: string = 'password';

  constructor() {}

  login(username: string, password: string): Observable<any> {
    if (username == this.fakeUsername && password == this.fakePassword) {
      localStorage.setItem('token', 'my-secret-token');
      return of(new HttpResponse({ status: 200 }));
    } else {
      return of(new HttpResponse({ status: 401 }));
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isUserLoggedIn(): Boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    }
    return false;
  }
}