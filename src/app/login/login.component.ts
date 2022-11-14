import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl([
      '',
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private authenicationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    let username: any = this.loginForm.get('username')?.value;
    let password: any = this.loginForm.get('password')?.value;
    this.authenicationService
      .login(username, password)
      .subscribe(() => this.router.navigateByUrl(''));
  }
}
