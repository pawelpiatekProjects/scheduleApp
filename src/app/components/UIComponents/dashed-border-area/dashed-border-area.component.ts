import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashed-border-area',
  templateUrl: './dashed-border-area.component.html',
  styleUrls: ['./dashed-border-area.component.scss']
})
export class DashedBorderAreaComponent implements OnInit {

  @Input() text: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
