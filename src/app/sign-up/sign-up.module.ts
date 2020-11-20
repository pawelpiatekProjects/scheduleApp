import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignUpComponent} from "./sign-up.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import {ButtonPrimaryComponent} from "../components/UIComponents/button-primary/button-primary.component";



@NgModule({
  declarations: [SignUpComponent, ButtonPrimaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class SignUpModule { }
