import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashedBorderAreaComponent} from "./dashed-border-area/dashed-border-area.component";
import {HeaderWithGoldCornersComponent} from "./header-with-gold-corners/header-with-gold-corners.component";
import { ActiveCalendarDayComponent } from './active-calendar-day/active-calendar-day.component';
import { BackdropComponent } from './backdrop/backdrop.component';



@NgModule({
  declarations: [DashedBorderAreaComponent, HeaderWithGoldCornersComponent, ActiveCalendarDayComponent, BackdropComponent],
  imports: [
    CommonModule
  ],
    exports: [DashedBorderAreaComponent, HeaderWithGoldCornersComponent, ActiveCalendarDayComponent, BackdropComponent]
})
export class UiModuleModule { }
