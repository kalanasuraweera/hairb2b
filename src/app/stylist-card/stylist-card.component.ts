import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylist-card',
  templateUrl: './stylist-card.component.html',
  styleUrls: ['./stylist-card.component.css']
})
export class StylistCardComponent implements OnInit {

  stylistId:number;
  rating: number;
  category: string;
  charge: number;

  constructor() { }

  ngOnInit() {
  }

}
