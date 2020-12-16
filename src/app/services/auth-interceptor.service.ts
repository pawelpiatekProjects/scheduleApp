import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent, HttpResponse} from "@angular/common/http";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {



  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let modifiedReq = req;
    const token = localStorage.getItem('token');

    if ((!req.url.includes(environment.signInUrl) || req.url.includes(environment.signUpUrl)) && token) {
      modifiedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }

    return next.handle(modifiedReq).pipe(
      map((event: HttpEvent<any>) => {

        if (event instanceof HttpResponse) {
          return event;
        }
      }),
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.authService.logOut();
          }
          else if (error.status === 400) {
              return next.handle(modifiedReq);
          } else if (error.status === 500) {
            this.authService.logOut();
          }
        }
      }),
    )
  }
}
