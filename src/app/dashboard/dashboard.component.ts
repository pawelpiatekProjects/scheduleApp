import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventsService} from "../services/events.service";
import {Subscription} from "rxjs";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private eventsSubscription: Subscription = null;
  private userSubscription: Subscription = null

  constructor(private eventsService: EventsService, private userService: UserService) { }

  ngOnInit() {
    this.eventsSubscription = this.eventsService.fetchEvents().subscribe();
    this.userSubscription = this.userService.fetchUserData(localStorage.getItem('userId'))
      .subscribe(res => {

      });
  }

  ngOnDestroy() {
    if(this.eventsSubscription !== null) {
      this.eventsSubscription.unsubscribe();
    }

    if(this.userSubscription !== null) {
      this.userSubscription.unsubscribe();
    }
  }

}
