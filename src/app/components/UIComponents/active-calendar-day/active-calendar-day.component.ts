import {Component, Input, OnInit} from '@angular/core';
import {DatesService, Day} from "../../../services/dates.service";

@Component({
  selector: 'app-active-calendar-day',
  templateUrl: './active-calendar-day.component.html',
  styleUrls: ['./active-calendar-day.component.scss']
})
export class ActiveCalendarDayComponent implements OnInit {

  constructor(private datesService: DatesService) { }

  @Input()activeDay: Day;
  day: string;

  ngOnInit() {
    this.day = this.activeDay.date.split('.').map(el => parseInt(el))[0].toString();
  }

}
