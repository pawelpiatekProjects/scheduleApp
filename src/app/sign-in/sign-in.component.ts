import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    console.log(form.value.email.isValid)
    this.router.navigateByUrl('/dashboard');
  }

}
