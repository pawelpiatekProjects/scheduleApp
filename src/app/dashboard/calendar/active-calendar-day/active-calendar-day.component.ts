import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {DatesService, Day} from "../../../services/dates.service";
import {UiService} from "../../../services/ui.service";
import {Event} from '../../../services/events.service';

@Component({
  selector: 'app-active-calendar-day',
  templateUrl: './active-calendar-day.component.html',
  styleUrls: ['./active-calendar-day.component.scss']
})
export class ActiveCalendarDayComponent implements OnInit {

  constructor(private datesService: DatesService, private uiService: UiService) { }

  @Input()activeDay: Day;
  day: string;
  activeDayEvents: Event[];

  ngOnInit() {
    this.day = this.activeDay.date.split('.').map(el => parseInt(el))[0].toString();
    this.activeDayEvents = this.activeDay.events.map(event => event.event);
    console.log('active day events', this.activeDayEvents)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.day = this.activeDay.date.split('.').map(el => parseInt(el))[0].toString();
    this.activeDayEvents = this.activeDay.events.map(event => event.event);
    console.log('changes',this.activeDayEvents);
  }

  onOpenEditForm(): void {
    this.uiService.onOpenEditEvent();
  }

  onOpenDeleteForm(): void {
    this.uiService.onOpenDeleteEvent();
  }

}
