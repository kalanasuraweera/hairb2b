import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-calendarheader',
  templateUrl: './calendarheader.component.html',
  styleUrls: ['./calendarheader.component.css']
})
export class CalendarheaderComponent implements OnInit {

  @Input() viewDate : Date;
  @Input() locale: string = 'en';
  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();
  constructor(private http:HttpClient) {
    
  }

  ngOnInit() {
   
  }

  clickPrevious():void {
    this.viewDate.setMonth(this.viewDate.getMonth()-1);
    this.viewDateChange.emit(this.viewDate);
    // console.log(this.viewDate);
  }

  clickNext():void {
    this.viewDate.setMonth(this.viewDate.getMonth()+1);
    this.viewDateChange.emit(this.viewDate);
    // console.log(this.viewDate);
  }

  clickToday():void {
    this.viewDate = new Date();
    this.viewDateChange.emit(this.viewDate);
  }
}
