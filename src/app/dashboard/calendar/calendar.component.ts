import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {


  buttonsStyles = ['buttons-group__button--active','',''];
  isBackdropOpen = false;
  constructor() { }

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
    this.isBackdropOpen = true;
  }

  oncloseBackdrop() {
    this.isBackdropOpen = false;
  }

  ngOnInit() {

  }

}
