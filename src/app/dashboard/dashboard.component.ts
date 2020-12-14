import { Component, OnInit } from '@angular/core';
import {EventsService} from "../services/events.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    console.log('dashboard');
    this.eventsService.fetchEvents().subscribe(res => {
      console.log('aaa')
    });
  }

}
