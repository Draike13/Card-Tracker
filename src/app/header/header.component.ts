import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { EeveeCardComponent } from '../cards/eevee-card/eevee-card.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authenticationService.loginState.subscribe((state) => {
      this.isLoggedIn = state;
    });
  }

  loginDialog() {
    this.dialog.open(DialogLoginComponent);
  }

  logOut(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/');
  }
  reloadPage() {
    window.location.reload();
  }
  saveList() {
    localStorage.setItem('testing', 'test');
  }
}
