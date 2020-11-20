import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent implements OnInit {

  constructor() { }

  @Input() message: string;
  @Input() styles: string;
  @Input() type: 'button' | 'submit' | 'reset';


  ngOnInit() {

  }


}
