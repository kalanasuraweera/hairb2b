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
  events: CalendarEvent[] = [ 
    {
      title: 'Editable event',
      color: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
      },
      start: new Date()
      
    }];

    eventClicked({event} :{event : CalendarEvent} ): void {
      console.log(event);
    }

  constructor() { 
    
  }

  ngOnInit() {
    this.viewDate = new Date();
  }

  

  headerButtonClick(ev):void{
      var temp = ev as Date;  
      this.viewDate.setMonth(temp.getMonth());
      // console.log(this.viewDate.;
      this.viewDate = new Date(this.viewDate.getTime());
  }

  createCalendarEvent():void{

  }

  dayClicked({ event }: { event: CalendarEvent }) : void {

  }
  
}
