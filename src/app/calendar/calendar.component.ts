import { Component, OnInit,NgZone } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent,CalendarMonthViewDay } from 'angular-calendar';
import { MatCheckboxChange, MatCheckbox } from '@angular/material';
import {HttpClient,HttpParams} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


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
  refresh: Subject<any> = new Subject();
 


  
    
  constructor(private http:HttpClient, private zone:NgZone) {
    
  }


  ngOnInit() {
    this.viewDate = new Date();
    var i:number;
    var j:number;

    for(i=1;i<31;i++) {
      this.isSlotFree.push([true,true]);      
    }
    let p = new HttpParams().set('month',(this.viewDate.getMonth()+1).toString());
    
    this.http.get<busyDateResponse[]>("http://localhost:51967/api/stylists/getBusyDates",{params:p}).subscribe(res=>{this.zone.run(() => this.setIsSlotFree(res) ) });
  
    console.log(this.isSlotFree);
    
  
  }

  // beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
  //   let p = new HttpParams().set('month',(this.viewDate.getMonth()+1).toString());
  //   this.http.get<busyDateResponse[]>("http://localhost:51967/api/stylists/getBusyDates",{params:p}).subscribe(res=>this.setIsSlotFree(res));
  //   console.log(this.isSlotFree);
  // }

  
  setIsSlotFree(res:busyDateResponse[]):void {
    var busy_date:busyDateResponse;
    for(busy_date of res) {
        var temp:number = (busy_date.slot=='m')?0:1;
        this.isSlotFree[busy_date.day-1][temp] = false;
    }
    
  }

  


  headerButtonClick(ev):void{
      var temp = ev as Date;  
      this.viewDate.setMonth(temp.getMonth());
      this.viewDate = new Date(this.viewDate.getTime());
      var i:number;
      for(i=0;i<31;i++) {
        this.isSlotFree[i][0]=true;  
        this.isSlotFree[i][1]=true;    
      }
      let p = new HttpParams().set('month',(this.viewDate.getMonth()+1).toString());
      this.http.get<busyDateResponse[]>("http://localhost:51967/api/stylists/getBusyDates",{params:p}).subscribe(res=>{this.zone.run(() => this.setIsSlotFree(res) );console.log(res) });
      console.log(this.isSlotFree);
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
      
      return true;
    }
    return false;

  } 
  
}

interface busyDateResponse {
  $id : string;
  day : number;
  month: number;
  year: number;
  slot: string;
}
