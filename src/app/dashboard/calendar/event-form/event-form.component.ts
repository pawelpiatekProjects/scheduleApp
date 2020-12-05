import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UiService} from "../../../services/ui.service";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  @Input() isEdit: boolean;
  formTitle: string;

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.formTitle = this.isEdit === true ? 'Edit' : 'Add';
  }

  onAdd(form: NgForm) {
    this.uiService.onCloseBackdrop();
  }

}
