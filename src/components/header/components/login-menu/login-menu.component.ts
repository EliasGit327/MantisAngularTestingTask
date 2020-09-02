import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from '../../../login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../../services/auth-service/auth.service';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  openLoginDialog(): void {
    this.matDialog.open(LoginDialogComponent, {
      data: {}
    });
  }

  logOut(): void {
    this.authService.logOut();
  }
}
