import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  hours: {hour: string, event: string}[] = [];
  today = new Date().toLocaleDateString();

  constructor() { }

  ngOnInit() {
    for(let i =0; i < 24; i++) {
      const hour = i.toString().length == 1 ? `0${i}:00` : `${i}:00`;
      this.hours.push({hour: hour, event: ''});
    }
  }

}
