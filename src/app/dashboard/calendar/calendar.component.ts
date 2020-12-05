import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private router: Router) { }

  activeButton = null;

  setActiveButtonStyle() {

  }

  buttonClick(button) {
    console.log(button);
  }

  ngOnInit() {

  }

}
