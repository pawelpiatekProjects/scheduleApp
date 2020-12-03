import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarComponent} from "./calendar.component";
import {TodayComponent} from "./today/today.component";
import {ThisWeekComponent} from "./this-week/this-week.component";
import {NextWeekComponent} from "./next-week/next-week.component";
import {AppRoutingModule} from "../../app-routing.module";
import {UiModuleModule} from "../../components/UIComponents/ui-module.module";



@NgModule({
  declarations: [CalendarComponent, TodayComponent, ThisWeekComponent, NextWeekComponent],
  imports: [
    CommonModule,
    CommonModule,
    AppRoutingModule,
    UiModuleModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
