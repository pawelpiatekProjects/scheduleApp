import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UiService} from "../../../services/ui.service";

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {


  constructor(private uiService: UiService) { }

  ngOnInit() {
  }

  onBackdropClick() {
    this.uiService.onCloseBackdrop();
  }


}
