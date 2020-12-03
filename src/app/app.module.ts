import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SignInModule} from "./sign-in/sign-in.module";
import {SignUpModule} from "./sign-up/sign-up.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {DatesService} from "./services/dates.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HomeModule,
    SignInModule,
    SignUpModule,
    DashboardModule
  ],
  providers: [DatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
