import {Component, Input, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DatesService, Day} from "../../../services/dates.service";
import {UiService} from "../../../services/ui.service";
import {Event, EventsService} from '../../../services/events.service';
import {Subscription} from "rxjs";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-active-calendar-day',
  templateUrl: './active-calendar-day.component.html',
  styleUrls: ['./active-calendar-day.component.scss']
})
export class ActiveCalendarDayComponent implements OnInit , OnDestroy{

  constructor(private datesService: DatesService, private uiService: UiService, private eventsService: EventsService, private router: Router) { }

  @Input()activeDay: Day;
  @ViewChild('f', {static: true}) ngForm: NgForm;
  day: string;
  activeDayEvents: Event[];
  eventsSubscription: Subscription = null;
  isEditBackdropOpen = false;
  isDeleteBackdropOpen = false;
  activeEvent: Event;

  ngOnInit() {
    this.day = this.activeDay.date.split('.').map(el => parseInt(el))[0].toString();
    this.activeDayEvents = this.activeDay.events.map(event => event.event);
    this.eventsSubscription = this.eventsService.getEvents().subscribe(events => {
      this.activeDayEvents = events.filter(event => event.date === this.activeDay.date.split('.').reverse().join('-'))
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    this.day = this.activeDay.date.split('.').map(el => parseInt(el))[0].toString();
    this.activeDayEvents = this.activeDay.events.map(event => event.event);
    this.eventsSubscription = this.eventsService.getEvents().subscribe(events => {
      this.activeDayEvents = events.filter(event => event.date === this.activeDay.date.split('.').reverse().join('-'))
    })
  }

  onOpenEditForm(event: Event): void {
    this.activeEvent = event;
    this.isEditBackdropOpen = true;
    console.log(this.ngForm)
  }

  onOpenDeleteModal(event: Event) {
    this.activeEvent = event;
    this.isDeleteBackdropOpen = true;
  }

  onDeleteEvent() {
    this.eventsService.deleteEvent(this.activeEvent._id).subscribe(res => {
      this.eventsService.fetchEvents().subscribe();
      this.router.navigateByUrl('/dashboard');
      this.onCloseDeleteBackdrop();
    })
  }



  onEditEvent(form: NgForm) {
      const  {value: {name, date, hour, description}} = form;
      this.eventsService.editEvent(this.activeEvent._id, name, date, hour, description).subscribe(res => {
        this.eventsService.fetchEvents().subscribe(res => {
          this.onCloseEditBackdrop();
          this.router.navigateByUrl('/dashboard');
        })
      })
  }


  onCloseEditBackdrop() {
    this.isEditBackdropOpen = false;
  }

  onCloseDeleteBackdrop() {
    this.isDeleteBackdropOpen = false;
  }


  ngOnDestroy() {
    if(this.eventsSubscription !== null) {
      this.eventsSubscription.unsubscribe();
    }
  }

}
