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
    const token = localStorage.getItem('token');
    return this.restService.post<any>({
      url: 'events/new',
      data: {
        name: name,
        date: date,
        hour: hour,
        description: description,
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

  deleteEvent(id: string) {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    return this.restService.post<any>({
      url: 'events/delete',
      data: {
        eventId: id,
        userId: userId
      },
      headers: {
        Authorization: 'Bearer ' + token
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
    const token = localStorage.getItem('token');
    return this.restService.put<any>({
      url: 'events/edit',
      data: {
        id: id,
        name: name,
        date: date,
        hour: hour,
        description: description,
        userId: userId
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }



}
