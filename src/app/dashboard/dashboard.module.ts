import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "../app-routing.module";
import { SidenavComponent } from './sidenav/sidenav.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SheduleComponent } from './shedule/shedule.component';
import { UserDataComponent } from './user-data/user-data.component';



@NgModule({
  declarations: [DashboardComponent, SidenavComponent, CalendarComponent, SheduleComponent, UserDataComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DashboardModule { }
