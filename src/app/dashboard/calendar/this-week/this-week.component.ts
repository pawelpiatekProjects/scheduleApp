import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatesService, Day, onGetDate} from "../../../services/dates.service"
import {Event, EventsService} from '../../../services/events.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-this-week',
  templateUrl: './this-week.component.html',
  styleUrls: ['./this-week.component.scss']
})
export class ThisWeekComponent implements OnInit, OnDestroy{

  //todo: change from any
  days: Day[] = [];
  firstDay: string;
  lastDay: string;
  activeDay: Day = null;
  thisWeekEvents: {date: string, event: {date: string, event: Event}[]}[];
  eventsSubscription: Subscription = null;

  constructor(private datesService: DatesService, private eventsService: EventsService) { }


  ngOnInit() {
    this.days = this.datesService.setWeek(new Date());

    this.firstDay = this.days[0].date.toString();
    this.lastDay = this.days[this.days.length-1].date.toString();
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

          this.thisWeekEvents = aggregatedEvents;
          this.days = this.days.map(day => {
            const events = this.thisWeekEvents.find(el => el.date === day.date);
            if(events) {
              return {
                ...day,
                events: events.event
              }
            } else {
              return day
            }
          });

          console.log(this.days)


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
