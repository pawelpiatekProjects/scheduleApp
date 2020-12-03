import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-with-gold-corners',
  templateUrl: './header-with-gold-corners.component.html',
  styleUrls: ['./header-with-gold-corners.component.scss']
})
export class HeaderWithGoldCornersComponent implements OnInit {

  @Input() text: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {
  }

}
