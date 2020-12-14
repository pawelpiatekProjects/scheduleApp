import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RestService} from "./rest.service";
import {tap} from "rxjs/operators";

export interface UserResponse {
  id: string;
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject<UserResponse>(null);


  constructor(private restService: RestService) {
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
    }));
  }

  getSignedInUSer():Observable<UserResponse> {
    return this.user.asObservable();
  }


}
