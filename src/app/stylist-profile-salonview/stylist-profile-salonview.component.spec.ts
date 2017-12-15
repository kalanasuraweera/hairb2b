import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistProfileSalonviewComponent } from './stylist-profile-salonview.component';

describe('StylistProfileSalonviewComponent', () => {
  let component: StylistProfileSalonviewComponent;
  let fixture: ComponentFixture<StylistProfileSalonviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylistProfileSalonviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylistProfileSalonviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
