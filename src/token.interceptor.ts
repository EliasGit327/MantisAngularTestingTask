import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth-service/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('jwt-api')) {
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.authService.jwtToken}`)
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
