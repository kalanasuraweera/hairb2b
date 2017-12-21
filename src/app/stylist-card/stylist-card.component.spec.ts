import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistCardComponent } from './stylist-card.component';

describe('StylistCardComponent', () => {
  let component: StylistCardComponent;
  let fixture: ComponentFixture<StylistCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylistCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
