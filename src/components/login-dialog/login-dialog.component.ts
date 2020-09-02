import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth.service';

export interface DialogData {
  something?: any;
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  loginForm = this.formBuilder.group({
    username: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(4)
    ]]
  });


  ngOnInit(): void {
  }

  onLogin(): void {
    this.authService.authorize(
      this.loginForm.controls.username.value, this.loginForm.controls.password.value
    );
    this.dialogRef.close();
  }
}
