import { Injectable } from '@angular/core';
import {RestService} from "./rest.service";
import {BehaviorSubject} from "rxjs";
import {Event} from "./events.service";
import {tap} from "rxjs/operators";

export interface User {
  _id: string;
  email: string;
  name: string;
  lastName: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new BehaviorSubject<User>(null);

  constructor(private restService: RestService) { }

  fetchUserData(id: string) {
    const token = localStorage.getItem('token');
    return this.restService.get<any>({
      url: `user/${id}`,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).pipe(tap(({user}) => {
      this.user.next(user);
    }))
  }

  getUserData() {
    return this.user;
  }
}
