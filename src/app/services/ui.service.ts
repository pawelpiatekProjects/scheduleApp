import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  isBackdropOpen = new BehaviorSubject<boolean>(false);

  onOpenBackdrop():void {
    this.isBackdropOpen.next(true);
  }

  onCloseBackdrop(): void {
    this.isBackdropOpen.next(false);
  }



  constructor() { }
}
