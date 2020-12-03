import { Component, OnInit } from '@angular/core';
import {DatesService, Day} from "../../../services/dates.service";

@Component({
  selector: 'app-this-week',
  templateUrl: './this-week.component.html',
  styleUrls: ['./this-week.component.scss']
})
export class ThisWeekComponent implements OnInit {

  days: Day[] = [];
  firstDay: string;
  lastDay: string;

  constructor(private datesService: DatesService) { }


  ngOnInit() {
    this.days = this.datesService.setWeek(new Date());
    this.firstDay = this.days[0].date.toString();
    this.lastDay = this.days[this.days.length-1].date.toString();
  }

}
