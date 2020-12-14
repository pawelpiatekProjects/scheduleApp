import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }



  onSignUp(form: NgForm) {
    console.log(form.value)
    const {value: {email, name, lastName, phone, password, confirmPassword}} = form;
    this.authService.signUp(name, lastName, email, phone, password).subscribe(res => {
      console.log(res);
    })
  }

}
