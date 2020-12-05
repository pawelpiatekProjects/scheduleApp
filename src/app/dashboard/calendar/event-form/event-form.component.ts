import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  @Input() isEdit: boolean;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  formTitle: string;

  constructor() { }

  ngOnInit() {
    this.formTitle = this.isEdit === true ? 'Edit' : 'Add';
  }

  onAdd(form: NgForm) {
    this.onClose.emit(false);
  }

}
