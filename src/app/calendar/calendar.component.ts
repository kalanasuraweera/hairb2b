import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {
  view: string = 'month';
  viewDate: Date;
  testDate: Date;
  numb: number=5;
  events: CalendarEvent[] = [];
  constructor() { 
    
  }

  ngOnInit() {
    this.viewDate = new Date();
  }

  headerButtonClick(ev):void{
      var temp = ev as Date;  
      this.viewDate.setMonth(temp.getMonth());
      
      this.viewDate = new Date(this.viewDate.getTime());
  }

  
}
