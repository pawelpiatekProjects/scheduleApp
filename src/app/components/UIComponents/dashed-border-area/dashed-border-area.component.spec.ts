import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashedBorderAreaComponent } from './dashed-border-area.component';

describe('DashedBorderAreaComponent', () => {
  let component: DashedBorderAreaComponent;
  let fixture: ComponentFixture<DashedBorderAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashedBorderAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashedBorderAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
