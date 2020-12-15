import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventsService} from "../services/events.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private eventsSubscription: Subscription = null;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    console.log('dashboard');
    this.eventsSubscription = this.eventsService.fetchEvents().subscribe(res => {
      console.log('aaa')
    });
  }

  ngOnDestroy() {
    if(this.eventsSubscription !== null) {
      this.eventsSubscription.unsubscribe();
    }
  }

}
