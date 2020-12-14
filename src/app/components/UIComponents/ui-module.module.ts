import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashedBorderAreaComponent} from "./dashed-border-area/dashed-border-area.component";
import {HeaderWithGoldCornersComponent} from "./header-with-gold-corners/header-with-gold-corners.component";
import { ActiveCalendarDayComponent } from '../../dashboard/calendar/active-calendar-day/active-calendar-day.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [DashedBorderAreaComponent, HeaderWithGoldCornersComponent, BackdropComponent, SpinnerComponent],
  imports: [
    CommonModule
  ],
    exports: [DashedBorderAreaComponent, HeaderWithGoldCornersComponent, BackdropComponent, SpinnerComponent]
})
export class UiModuleModule { }
