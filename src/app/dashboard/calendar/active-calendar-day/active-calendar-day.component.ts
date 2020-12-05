import {Component, Input, OnInit} from '@angular/core';
import {DatesService, Day} from "../../../services/dates.service";
import {UiService} from "../../../services/ui.service";

@Component({
  selector: 'app-active-calendar-day',
  templateUrl: './active-calendar-day.component.html',
  styleUrls: ['./active-calendar-day.component.scss']
})
export class ActiveCalendarDayComponent implements OnInit {

  constructor(private datesService: DatesService, private uiService: UiService) { }

  @Input()activeDay: Day;
  day: string;

  ngOnInit() {
    this.day = this.activeDay.date.split('.').map(el => parseInt(el))[0].toString();
  }

  onOpenEditForm(): void {
    this.uiService.onOpenEditEvent();
  }

  onOpenDeleteForm(): void {
    this.uiService.onOpenDeleteEvent();
  }

}
