import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Event} from "../models/Event";
import {RestService} from "./rest.service";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events = new BehaviorSubject<Event>(null);


  constructor(private restService: RestService) { }


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
    }).pipe(tap(a => {
      console.log(a);
    }))
  }

}
