import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public username: string;
  public jwtToken: string;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.jwtToken = localStorageService.jwtToken.value;
    this.username = localStorageService.userName.value;
  }

  authorize(username: string, password: string): void {
    const token = `QFD-${username}-!@##ASD1231DAS@-${password}-!DAF`;
    this.localStorageService.jwtToken.value = token;
    this.localStorageService.userName.value = username;
    this.username = username;
    this.jwtToken = token;
  }

  logOut(): void {
    this.jwtToken = null;
    this.localStorageService.jwtToken.removeValue();
    this.localStorageService.userName.removeValue();
    this.router.navigate(['home']);
  }
}
