import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  isBackdropOpen = new BehaviorSubject<boolean>(false);
  formMode = new BehaviorSubject<'add' | 'edit' | 'delete'>(null);

  onOpenBackdrop():void {
    this.isBackdropOpen.next(true);
  }

  onCloseBackdrop(): void {
    this.isBackdropOpen.next(false);
    this.formMode.next(null);
  }

  onOpenAddEvent():void {
    this.onOpenBackdrop();
    this.formMode.next('add');
  }

  onOpenEditEvent(): void {
    this.onOpenBackdrop();
    this.formMode.next('edit');
  }

  onOpenDeleteEvent(): void {
    this.onOpenBackdrop();
    this.formMode.next('delete');
  }



  constructor() { }
}
