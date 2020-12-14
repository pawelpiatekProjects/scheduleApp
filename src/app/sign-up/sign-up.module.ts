import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignUpComponent} from "./sign-up.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import {ButtonPrimaryComponent} from "../components/UIComponents/button-primary/button-primary.component";
import {UiModuleModule} from "../components/UIComponents/ui-module.module";



@NgModule({
  declarations: [SignUpComponent, ButtonPrimaryComponent],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        UiModuleModule
    ]
})
export class SignUpModule { }
