import { Injectable } from '@angular/core';
import {BehaviorSubject, from} from "rxjs";
import {RestService} from "./rest.service";
import {filter, map, take, tap} from 'rxjs/operators';


export interface Event {
   _id: string,
   name: string,
   date: string,
   hour: string,
   description?: string,
   createdAt: string,
   updatedAt: string,
   creator: string
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events = new BehaviorSubject<Event[]>(null);


  constructor(private restService: RestService) { }


  createEvent(name: string, date: string, hour: string, description: string) {
    const userId = localStorage.getItem('userId');
    return this.restService.post<any>({
      url: 'events/new',
      data: {
        name: name,
        date: date,
        hour: hour,
        description: description,
        userId: userId
      }
    });
  }

  fetchEvents() {
    return this.restService.get<any>({
      url: 'events/all'
    }).pipe(tap(({events}) => {
      this.events.next(events);
    }))
  }

  deleteEvent(id: string) {
    console.log('event id from event service: ', id);
    const userId = localStorage.getItem('userId');
    return this.restService.post<any>({
      url: 'events/delete',
      data: {
        eventId: id,
        userId: userId
      }
    })
  }

  getEvents() {
    return this.events.asObservable();
  }

  getEventById(id: string) {
    return this.events.value.filter(event => event._id === id)[0];
  }

  editEvent(id: string, name, date, hour,description) {
    const userId = localStorage.getItem('userId');
    return this.restService.put<any>({
      url: 'events/edit',
      data: {
        id: id,
        name: name,
        date: date,
        hour: hour,
        description: description,
        userId: userId
      }
    })
  }



}
