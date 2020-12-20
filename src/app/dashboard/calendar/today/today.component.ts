import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventsService, Event} from "../../../services/events.service";
import {Subscription} from "rxjs";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

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
  selectedEventHoursArr: string[] = null;
  isLoading: boolean = false;
  isEditBackdropOpen = false;
  isDeleteBackdropOpen = false;

  constructor(private eventsService: EventsService, private router: Router) {
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
          console.log('hour: ', hour);
          console.log(hour.slice(0, 2));
          const ev = this.todayEvents.find(event => {
            if(event !== null) {
              return event.hour.slice(0, 2) === hour.slice(0, 2);
            }
          });
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

  //todo add event description

  onSelectEvent(hour: Hour) {
    const {event: {_id}} = hour;
    if (_id.length !== 0) {
      this.selectedEvent = hour;
      console.log('selected hour: ', hour);
      const eventHour = this.selectedEvent.hour.slice(0,2);
      let previousEventHour;
      let nextEvenHour;
      if(eventHour[0] === '0' && parseInt(eventHour[1]) !== 9){
        previousEventHour = '0'+(parseInt(eventHour[1]) - 1).toString();
        nextEvenHour = '0'+(parseInt(eventHour[1]) + 1).toString();
        console.log(previousEventHour);
      } else {
        previousEventHour = parseInt(eventHour) - 1;
        nextEvenHour = parseInt(eventHour) + 1;
        console.log(previousEventHour);
      }
      console.log('hour: ', eventHour);
      this.selectedEventHoursArr = [previousEventHour, eventHour, nextEvenHour];
    }
  }

  onCloseDeleteBackdrop() {
    this.isDeleteBackdropOpen = false;
  }

  onCloseEditBackdrop() {
    this.isEditBackdropOpen = false;
  }

  onOpenEditModal() {
    this.isEditBackdropOpen = true;
  }

  onOpenDeleteModal() {
    this.isDeleteBackdropOpen = true;
  }

  onDeleteEvent() {
    this.eventsService.deleteEvent(this.selectedEvent.event._id).subscribe(res => {
      this.eventsService.fetchEvents().subscribe();
      this.router.navigateByUrl('/dashboard');
      this.onCloseDeleteBackdrop();
      this.selectedEvent = null;
    })
  }



  onEditEvent(form: NgForm) {
    const  {value: {name, date, hour, description}} = form;
    this.eventsService.editEvent(this.selectedEvent.event._id, name, date, hour, description).subscribe(res => {
      console.log(res);
      this.eventsService.fetchEvents().subscribe(res => {
        console.log(res);
        this.onCloseEditBackdrop();
        this.router.navigateByUrl('/dashboard');
        this.selectedEvent = null;
      })
    })
  }


  ngOnDestroy() {
    if (this.eventsSubscription !== null) {
      this.eventsSubscription.unsubscribe();

    }
  }
}
