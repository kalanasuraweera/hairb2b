import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-stylist-list',
  templateUrl: './stylist-list.component.html',
  styleUrls: ['./stylist-list.component.css']
})
export class StylistListComponent implements OnInit {

  stylistList: stylist[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.setStylistList();
  }


  setStylistList():void {
    this.stylistList=[];
    this.http.get<stylist[]>("http://localhost:51967/api/stylists/getDummyStylistCards").subscribe(res=>{this.stylistList=res;console.log(this.stylistList[0].id)});
  }

}


interface stylist {
  id:number;
  name:string;
  category:string;
  costPerSlot:number;
  rating:number;
}
