import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashedBorderAreaComponent} from "./dashed-border-area/dashed-border-area.component";
import {HeaderWithGoldCornersComponent} from "./header-with-gold-corners/header-with-gold-corners.component";



@NgModule({
  declarations: [DashedBorderAreaComponent, HeaderWithGoldCornersComponent],
  imports: [
    CommonModule
  ],
  exports: [DashedBorderAreaComponent, HeaderWithGoldCornersComponent]
})
export class UiModuleModule { }
