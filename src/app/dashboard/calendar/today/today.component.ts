import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventsService, Event} from "../../../services/events.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit, OnDestroy {

  todayEvents: Event[] = null;
  hours: {hour: string, event: Event }[] = [];
  today = new Date().toLocaleDateString();
  eventsSubscription: Subscription;

  constructor(private eventsService: EventsService) { }



  ngOnInit() {
    this.eventsService.getEvents().subscribe(events => {
      if(events !== null) {
        const today = new Date().toLocaleDateString().split('.').reverse().join('-');
        const todayEvents = events.filter(event => event.date === today);
        console.log('events', todayEvents);
        this.todayEvents = todayEvents;

        for(let i =0; i < 24; i++) {
          const hour = i.toString().length == 1 ? `0${i}:00` : `${i}:00`;
          console.log(hour.slice(0,2));
          this.todayEvents.map(event => {
            if (event.hour.slice(0,2) === hour.slice(0,2)) {
              this.hours.push({hour: hour, event: event});
            } else {
              const emptyEvent: Event = {
                id: '',
                name: '',
                date: '',
                hour: '',
                createdAt: '',
                updatedAt: '',
                creator: ''

              }
              this.hours.push({hour: hour, event: emptyEvent});
            }
          })

        }
      }
    })
  }

  ngOnDestroy() {
      this.eventsSubscription.unsubscribe();
  }
}
