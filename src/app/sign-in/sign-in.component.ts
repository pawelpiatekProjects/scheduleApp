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
  isLoading: boolean = false;
  isError: boolean= false;
  errorMessage: string = null;
  inputClass: string = 'sign-in-form__item--blue';

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    console.log(form.value);
    const {value: {email, password}} = form;
    this.isLoading = true;
    this.authService.login(email, password).pipe(catchError(err => {
      console.log('Error: ', err);
      this.isLoading = false;
      this.isError = true;
      this.errorMessage = err.error.message;
      this.inputClass = 'sign-in-form__item--red';
      return err;
    })).subscribe(res => {
      console.log(res);
      this.isLoading = false;
      this.router.navigateByUrl('/dashboard');
    })

  }

}
