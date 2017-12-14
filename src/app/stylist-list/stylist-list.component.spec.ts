import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistListComponent } from './stylist-list.component';

describe('StylistListComponent', () => {
  let component: StylistListComponent;
  let fixture: ComponentFixture<StylistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
