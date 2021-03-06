import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RestService} from "./rest.service";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

export interface UserResponse {
  userId: string;
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject<UserResponse>(null);

  get getUSer() {
    return this.user;
  }


  constructor(private restService: RestService, private router: Router) {
  }

  login(email: string, password: string) {
    return this.restService.post<any>({
      url: 'auth/login',
      data: {
        email: email,
        password: password
      }
    }).pipe(tap(user => {
      this.user.next(user);
      localStorage.setItem('userId', this.user.value.userId);
      localStorage.setItem('token', this.user.value.token);
    }));
  }

  signUp(name: string, lastName: string, email: string, phone: string, password: string) {
    return this.restService.post<any>({
      url: 'auth/signup',
      data: {
        email: email,
        password: password,
        name: name,
        lastName: lastName,
        phone: phone
      }
    })
  }

  logOut() {
    this.router.navigateByUrl('/sign-in');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
  }

  getSignedInUSer():Observable<UserResponse> {
    return this.user.asObservable();
  }


}
