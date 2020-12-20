import {Component, OnInit, ViewChild} from '@angular/core';
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

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {
  }

  @ViewChild('f', {static: true}) ngForm: NgForm;

  isLoading: boolean = false;
  isError: boolean = false;
  errorMessage: string = null;
  inputClass: string = 'sign-in-form__item--blue';
  emailValidator = {
    valid: true,
    errorMessage: ''
  }
  passwordValidator = {
    valid: true,
    errorMessage: ''
  }

  ngOnInit() {
  }

  onChangeEmail() {
    const {status, touched} = this.ngForm.form.controls.email
    console.log(this.ngForm.form.controls.email)
    if (status === 'INVALID' && touched === true) {
      this.emailValidator = {
        valid: false,
        errorMessage: 'Email is invalid'
      }
    } else {
      this.emailValidator = {
        valid: true,
        errorMessage: ''
      }
    }
  }

  onChangePassword() {
    const {status, touched} = this.ngForm.form.controls.password;
    if (status === 'INVALID' && touched === true) {
      this.passwordValidator = {
        valid: false,
        errorMessage: 'Password is invalid'
      }
    } else {
      this.passwordValidator = {
        valid: true,
        errorMessage: ''
      }
    }
  }

  onSignIn(f: NgForm) {
    const {value: {email, password}, form: {controls, status}} = f;

    if (status === 'VALID') {
      console.log(status)
      this.isLoading = true;
      this.authService.login(email, password).pipe(catchError(err => {
        this.isLoading = false;
        this.isError = true;
        this.errorMessage = err.error.message;
        this.inputClass = 'sign-in-form__item--red';
        return err;
      })).subscribe(res => {
        this.isLoading = false;
        this.router.navigateByUrl('/dashboard');
      })
    }


  }

}
