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

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.formModeSubscription = this.uiService.formMode.subscribe(mode => {
      if(mode === 'add') {
        this.formTitle = 'Add';
      } else {
        this.formTitle = 'Edit';
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
