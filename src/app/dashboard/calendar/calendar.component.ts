import { Component, OnInit } from '@angular/core';
import {UiService} from "../../services/ui.service";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {


  buttonsStyles = ['buttons-group__button--active','',''];
  isBackdropOpen: boolean;
  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.uiService.isBackdropOpen.subscribe(isOpen => {
      this.isBackdropOpen = isOpen;
    })
  }

  setActiveButton(buttonNum: number): void {
    this.buttonsStyles.forEach((button, index) => {
      if(index === buttonNum) {
        this.buttonsStyles[index] = 'buttons-group__button--active'
      } else {
        this.buttonsStyles[index] = '';
      }
    })
  }

  buttonClick(buttonName: string) {
    switch (buttonName) {
      case 'today': {
       this.setActiveButton(0);
        break;
      }
      case 'thisWeek': {
      this.setActiveButton(1);
        break;
      }
      case 'nextWeek': {
        this.setActiveButton(2);
        break;
      }
    }

  }

  onOpenBackDrop() {
    this.uiService.onOpenBackdrop();
  }


}
