import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-this-week',
  templateUrl: './this-week.component.html',
  styleUrls: ['./this-week.component.scss']
})
export class ThisWeekComponent implements OnInit {

  daysName = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  days: {name: string, date: string}[] = [];

  constructor() { }

  private initializeDaysArray(dayNumber: number) {

      console.log('day number', dayNumber)
      const today = new Date()
      const monday =  new Date(today);
      if(dayNumber !== 1) {
        monday.setDate(monday.getDate() - dayNumber + 1);
      }
      for(let i = 0; i <7 ; i++) {
        let currentDay = new Date(monday);
        const nextDay = new Date(currentDay);
        nextDay.setDate(nextDay.getDate() + i);
        this.days.push({name: this.daysName[i], date:nextDay.toLocaleDateString()})
        currentDay = new Date(nextDay);
      }
  }

  ngOnInit() {
    const todayNumber = new Date().getDay();
    this.initializeDaysArray(todayNumber);
  }

}
