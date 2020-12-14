import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthService} from "../services/auth.service";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router,  private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password).pipe(catchError(err => {
      console.log('Error: ', err);
      return err;
    })).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/dashboard');
    })

   // this.http.post(`http://${environment.serverApiUrl}auth/login`, {
   //   email: email,
   //   password: password
   // }).subscribe(res => {
   //   console.log(res);
   // })
  }

}
