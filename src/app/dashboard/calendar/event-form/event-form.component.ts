import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UiService} from "../../../services/ui.service";
import {Subscription} from "rxjs";
import {EventsService} from "../../../services/events.service";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit, OnDestroy {

  formTitle: string;
  formModeSubscription: Subscription;
  headerClass: string;
  buttonClass: string;
  mode: string;


  constructor(private uiService: UiService, private eventsService: EventsService) { }

  ngOnInit() {
    this.formModeSubscription = this.uiService.formMode.subscribe(mode => {
      this.mode = mode;
      if(this.mode === 'add') {

        this.formTitle = 'Add';
        this.headerClass = 'text-blue';
        this.buttonClass = 'form__button--blue';

      } else if(this.mode === 'edit') {
        this.formTitle = 'Edit';
        this.headerClass = 'text-blue';
        this.buttonClass = 'form__button--blue';

      } else {
        this.formTitle = 'Delete'
        this.headerClass = 'text-red';
        this.buttonClass = 'form__button--red';

      }

    })
    console.log(this.mode);
  }

  formAction(form: NgForm) {
    if(this.mode === 'add') {
      const {value: {name, date, time, description}} = form;

      this.eventsService.createEvent(name, date, time, description).subscribe(res => {
        console.log(res);
        this.eventsService.fetchEvents().subscribe(res => {
          console.log(res);
        });
      })

    } else if(this.mode === 'edit') {

    } else {
        const eventId = this.uiService.activeDayId.value;
        console.log('eventId: ', eventId)
        this.eventsService.deleteEvent(eventId).subscribe(res => {
          console.log(res);
          this.eventsService.fetchEvents().subscribe(res => {
            console.log(res);
          })
        })
    }
    this.uiService.onCloseBackdrop();
  }

  ngOnDestroy() {
    this.formModeSubscription.unsubscribe();
  }

}
