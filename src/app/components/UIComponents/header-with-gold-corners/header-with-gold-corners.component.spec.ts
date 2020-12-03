import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithGoldCornersComponent } from './header-with-gold-corners.component';

describe('HeaderWithGoldCornersComponent', () => {
  let component: HeaderWithGoldCornersComponent;
  let fixture: ComponentFixture<HeaderWithGoldCornersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWithGoldCornersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithGoldCornersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
