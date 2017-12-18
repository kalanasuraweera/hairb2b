import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { MatCheckboxChange, MatCheckbox } from '@angular/material';


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
  isSlotFree: boolean[][]=[[true,true]];
  selectedSlots: string[]=[];
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
    var i:number;
    var j:number;
    for(i=1;i<31;i++) {
      this.isSlotFree.push([true,true]);      
    }
    
  }

  

  headerButtonClick(ev):void{
      var temp = ev as Date;  
      this.viewDate.setMonth(temp.getMonth());
      this.viewDate = new Date(this.viewDate.getTime());
      // console.log(document.getElementById("21_11_2017_e"));
      // for(var val in this.selectedSlots) {
      //   var tempCheck;
      //   console.log(val);
      //   if(tempCheck=document.getElementById(this.selectedSlots[val])) {
      //     tempCheck.checked = true;
      //     console.log("bal");
      //   }
      // }
  }


  dayClicked({ event }: { event: CalendarEvent }) : void {

  }

  editSelectedSlots(ev:MatCheckboxChange):void {
    if(ev.checked) {
      this.selectedSlots.push(ev.source.id);
    }
    else {
      var index:number=this.selectedSlots.indexOf(ev.source.id);
      if(index!= -1) {
        this.selectedSlots.splice(index,1);      
      }
    }
    console.log(this.selectedSlots);
  }
  
  isSelectedSlot(slot:string):boolean {
    if(this.selectedSlots.indexOf(slot)>-1) {
      console.log(this.selectedSlots.indexOf(slot));
      return true;
    }
    return false;

  } 
  
}
