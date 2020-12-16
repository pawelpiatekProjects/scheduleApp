import {Component, Input, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {DatesService, Day} from "../../../services/dates.service";
import {UiService} from "../../../services/ui.service";
import {Event, EventsService} from '../../../services/events.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-active-calendar-day',
  templateUrl: './active-calendar-day.component.html',
  styleUrls: ['./active-calendar-day.component.scss']
})
export class ActiveCalendarDayComponent implements OnInit , OnDestroy{

  constructor(private datesService: DatesService, private uiService: UiService, private eventsService: EventsService) { }

  @Input()activeDay: Day;
  day: string;
  activeDayEvents: Event[];
  eventsSubscription: Subscription = null;

  ngOnInit() {
    this.day = this.activeDay.date.split('.').map(el => parseInt(el))[0].toString();
    this.activeDayEvents = this.activeDay.events.map(event => event.event);
    console.log('active day events', this.activeDayEvents);
    this.eventsSubscription = this.eventsService.getEvents().subscribe(events => {
      this.activeDayEvents = events.filter(event => event.date === this.activeDay.date.split('.').reverse().join('-'))
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    this.day = this.activeDay.date.split('.').map(el => parseInt(el))[0].toString();
    // this.activeDayEvents = this.activeDay.events.map(event => event.event);
    console.log('changes',this.activeDayEvents);
  }

  onOpenEditForm(id: string): void {
    this.uiService.onOpenEditEvent(id);
  }

  onOpenDeleteForm(id: string): void {
    this.uiService.onOpenDeleteEvent(id);
  }

  ngOnDestroy() {
    if(this.eventsSubscription !== null) {
      this.eventsSubscription.unsubscribe();
    }
  }

}
