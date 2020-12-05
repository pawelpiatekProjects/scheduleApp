import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarComponent} from "./calendar.component";
import {TodayComponent} from "./today/today.component";
import {ThisWeekComponent} from "./this-week/this-week.component";
import {NextWeekComponent} from "./next-week/next-week.component";
import {AppRoutingModule} from "../../app-routing.module";
import {UiModuleModule} from "../../components/UIComponents/ui-module.module";
import { EventFormComponent } from './event-form/event-form.component';
import {FormsModule} from "@angular/forms";
import {ActiveCalendarDayComponent} from "./active-calendar-day/active-calendar-day.component";



@NgModule({
  declarations: [CalendarComponent, TodayComponent, ThisWeekComponent, NextWeekComponent, EventFormComponent, ActiveCalendarDayComponent],
  imports: [
    CommonModule,
    CommonModule,
    AppRoutingModule,
    UiModuleModule,
    FormsModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
