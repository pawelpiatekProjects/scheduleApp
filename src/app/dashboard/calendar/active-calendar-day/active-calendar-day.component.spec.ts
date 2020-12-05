import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCalendarDayComponent } from './active-calendar-day.component';

describe('ActiveCalendarDayComponent', () => {
  let component: ActiveCalendarDayComponent;
  let fixture: ComponentFixture<ActiveCalendarDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveCalendarDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCalendarDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
