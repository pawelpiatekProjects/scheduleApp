import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UiService} from "../../../services/ui.service";
import {Subscription} from "rxjs";

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


  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.formModeSubscription = this.uiService.formMode.subscribe(mode => {
      if(mode === 'add') {
        this.formTitle = 'Add';
        this.headerClass = 'text-blue';
        this.buttonClass = 'form__button--blue';
      } else if(mode === 'edit') {
        this.formTitle = 'Edit';
        this.headerClass = 'text-blue';
        this.buttonClass = 'form__button--blue';
      } else {
        this.formTitle = 'Delete'
        this.headerClass = 'text-red';
        this.buttonClass = 'form__button--red';
      }
    })
  }

  onAdd(form: NgForm) {
    this.uiService.onCloseBackdrop();
  }

  ngOnDestroy() {
    this.formModeSubscription.unsubscribe();
  }

}
