import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @ViewChild('f', {static: true}) ngForm: NgForm;
  isLoading: boolean = false;
  isError: boolean= false;
  isAccountCreated: boolean = false;
  errorMessage: string = null;
  inputClass: string = 'sign-up-form__item--blue';

  nameValidator = {
    valid: true,
    errorMessage: ''
  }
  lastNameValidator = {
    valid: true,
    errorMessage: ''
  }
  emailValidator = {
    valid: true,
    errorMessage: ''
  }
  phoneValidator = {
    valid: true,
    errorMessage: ''
  }
  passwordValidator = {
    valid: true,
    errorMessage: ''
  }
  confirmPasswordValidator = {
    valid: true,
    errorMessage: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onChangeName() {
    const {status, touched} = this.ngForm.form.controls.name
    console.log(this.ngForm.form.controls.name);
    if (status === 'INVALID' && touched === true) {
      this.nameValidator = {
        valid: false,
        errorMessage: 'Name is invalid'
      }
    } else {
      this.nameValidator = {
        valid: true,
        errorMessage: ''
      }
    }
  }

  onChangeLastName() {
    const {status, touched} = this.ngForm.form.controls.lastName
    console.log(status)
    if (status === 'INVALID' && touched === true) {
      this.lastNameValidator = {
        valid: false,
        errorMessage: 'Last name is invalid'
      }
    } else {
      this.nameValidator = {
        valid: true,
        errorMessage: ''
      }
    }
  }

  onChangeEmail() {
    const {status, touched} = this.ngForm.form.controls.email
    console.log(status)
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

  onChangePhone() {
    const {status, touched} = this.ngForm.form.controls.phone
    console.log(status)
    if (status === 'INVALID' && touched === true) {
      this.phoneValidator = {
        valid: false,
        errorMessage: 'Phone is invalid'
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





  onSignUp(form: NgForm) {
    const {value: {email, name, lastName, phone, password, confirmPassword}} = form;
    this.isLoading = true;
    this.authService.signUp(name, lastName, email, phone, password)
      .pipe(catchError(err => {
        this.isLoading = false;
        this.isError = true;
        this.errorMessage = err.error.message;
        this.inputClass = 'sign-up-form__item--red';
        return err;
      }))
      .subscribe(res => {
        this.isLoading = false;
        this.isAccountCreated = true;
    })
  }

  onNavigateToSignIn() {
    this.router.navigateByUrl('/sign-in');
  }

}
