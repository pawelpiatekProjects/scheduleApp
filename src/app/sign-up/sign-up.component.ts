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



  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
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
