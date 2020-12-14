import { Injectable } from '@angular/core';
import {BehaviorSubject, from} from "rxjs";
import {RestService} from "./rest.service";
import {map, take, tap} from 'rxjs/operators';

export interface Event {
   id: string,
   name: string,
   date: string,
   hour: string,
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

// TODO: Add interceptor
  createEvent(name: string, date: string, hour: string) {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    return this.restService.post<any>({
      url: 'events/new',
      data: {
        name: name,
        date: date,
        hour: hour,
        userId: userId
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }

  fetchEvents() {
    const token = localStorage.getItem('token');
    return this.restService.get<any>({
      url: 'events/all',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).pipe(tap(({events}) => {
      this.events.next(events);
    }))
  }

  getEvents() {
    return this.events.asObservable();
  }


}
