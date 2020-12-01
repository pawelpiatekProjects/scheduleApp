import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "../app-routing.module";
import { SidenavComponent } from './sidenav/sidenav.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SheduleComponent } from './shedule/shedule.component';
import { UserDataComponent } from './user-data/user-data.component';
import { MonthCalendarModule } from 'simple-angular-calendar';
import { TodayComponent } from './calendar/today/today.component';
import { ThisWeekComponent } from './calendar/this-week/this-week.component';
import { NextWeekComponent } from './calendar/next-week/next-week.component';
import {CalendarModule} from "./calendar/calendar.module";


@NgModule({
  declarations: [DashboardComponent, SidenavComponent, SheduleComponent, UserDataComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MonthCalendarModule,
    CalendarModule
  ]
})
export class DashboardModule { }
