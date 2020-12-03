import { Component, OnInit } from '@angular/core';
import {DatesService, Day} from "../../../services/dates.service";

@Component({
  selector: 'app-next-week',
  templateUrl: './next-week.component.html',
  styleUrls: ['./next-week.component.scss']
})
export class NextWeekComponent implements OnInit {


  days: Day[] =[];
  firstDay: string;
  lastDay: string;

  constructor(private datesService: DatesService) { }

  ngOnInit() {
    const today = new Date();
    const thisDayNextWeek = new Date(today);
    thisDayNextWeek.setDate(thisDayNextWeek.getDate() + 7);
    this.days = this.datesService.setWeek(thisDayNextWeek);
    this.firstDay = this.days[0].date;
    this.lastDay = this.days[this.days.length-1].date;
  }

}
