import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventsService, Event} from "../../../services/events.service";
import {Subscription} from "rxjs";

interface Hour {
  hour: string,
  event: Event
}

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit, OnDestroy {

  todayEvents: Event[] = null;
  hours: Hour[] = [];
  today = new Date().toLocaleDateString();
  eventsSubscription: Subscription = null;
  selectedEvent: Hour = null;
  isLoading: boolean = false;

  constructor(private eventsService: EventsService) {
  }


  ngOnInit() {
    this.eventsService.getEvents().subscribe(events => {
      this.isLoading = true;
      console.log(events);
      if (events !== null) {
        this.hours = [];
        const today = new Date().toLocaleDateString().split('.').reverse().join('-');
        const todayEvents = events.filter(event => event.date === today);
        console.log('events', todayEvents);
        this.todayEvents = todayEvents;

        for (let i = 0; i < 24; i++) {
          const hour = i.toString().length == 1 ? `0${i}:00` : `${i}:00`;
          console.log(hour.slice(0, 2));
          const ev = this.todayEvents.find(event => event.hour.slice(0, 2) === hour.slice(0, 2));
          console.log(ev);
          if (ev) {
            this.hours.push({hour: hour, event: ev});
          } else {
            const emptyEvent: Event = {
              _id: '',
              name: '',
              date: '',
              hour: '',
              createdAt: '',
              updatedAt: '',
              creator: ''
            }
            this.hours.push({hour: hour, event: emptyEvent});
          }
          this.isLoading = false;
        }
      }

    })
  }

  onSelectEvent(hour: Hour) {
    const {event: {_id}} = hour;
    if (_id.length !== 0) {
      this.selectedEvent = hour;
    }
  }


  ngOnDestroy() {
    if (this.eventsSubscription !== null) {
      this.eventsSubscription.unsubscribe();
    }
  }
}
