import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css'],
})
export class DialogLoginComponent implements OnInit {
  public user: SocialUser = new SocialUser();

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
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }

  login(): void {
    let username: any = this.loginForm.get('username')?.value;
    let password: any = this.loginForm.get('password')?.value;
    this.authenicationService
      .login(username, password)
      .subscribe(() => this.router.navigateByUrl('cardpage'));
  }
  public loginWithGoogle(): void {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['mainpage']));
  }
}
