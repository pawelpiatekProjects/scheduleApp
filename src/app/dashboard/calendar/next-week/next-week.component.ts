import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-week',
  templateUrl: './next-week.component.html',
  styleUrls: ['./next-week.component.scss']
})
export class NextWeekComponent implements OnInit {


  daysName = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  constructor() { }

  ngOnInit() {
  }

}
