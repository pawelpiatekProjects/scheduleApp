import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatesService, Day, onGetDate} from "../../../services/dates.service";
import {Event, EventsService} from "../../../services/events.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-next-week',
  templateUrl: './next-week.component.html',
  styleUrls: ['./next-week.component.scss']
})
export class NextWeekComponent implements OnInit, OnDestroy {


  days: Day[] =[];
  firstDay: string;
  lastDay: string;
  activeDay: Day = null;
  nextWeekEvents: {date: string, event: {date: string, event: Event}[]}[];
  eventsSubscription: Subscription = null;

  constructor(private datesService: DatesService, private eventsService: EventsService) { }

  ngOnInit() {
    const today = new Date();
    const thisDayNextWeek = new Date(today);
    thisDayNextWeek.setDate(thisDayNextWeek.getDate() + 7);
    this.days = this.datesService.setWeek(thisDayNextWeek);
    this.firstDay = this.days[0].date;
    this.lastDay = this.days[this.days.length-1].date;
    this.eventsSubscription = this.eventsService.getEvents().subscribe(events => {
      if(events !== null) {
        const filteredEvents = events.filter(event => {
          const eventDate = onGetDate(event.date, '-').getTime();
          const firstDay = onGetDate(this.firstDay, '.').getTime();
          const lastDay = onGetDate(this.lastDay, '.').getTime();
          if( eventDate >= firstDay && eventDate <= lastDay) {
            return event
          }
        });

        const newArr = filteredEvents.map(event => {
          return {
            date: event.date.split('-').reverse().join('.'),
            event: event
          }
        });

        const reducedArr = newArr.reduce(function (r, a) {
          r[a.date] = r[a.date] || [];
          r[a.date].push(a);
          return r;
        }, Object.create(null));

        const eventKeys = Object.keys(reducedArr);
        const eventValues = Object.values(reducedArr);

        const aggregatedEvents = [];
        eventKeys.forEach((event, i) => {
          aggregatedEvents.push({
            date: eventKeys[i],
            event: eventValues[i]
          })
        })

        this.nextWeekEvents = aggregatedEvents;

        this.days = this.days.map(day => {
          const events = this.nextWeekEvents.find(el => el.date === day.date);
          if(events) {
            return {
              ...day,
              events: events.event
            }
          } else {
            return day
          }
        });
      }
    })
  }

  onDayClick(day: Day) {
    this.activeDay = day;
  }

  ngOnDestroy() {
    if(this.eventsSubscription !== null) {
      this.eventsSubscription.unsubscribe();
    }
  }

}
