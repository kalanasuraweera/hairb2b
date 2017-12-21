import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-stylist-card',
  templateUrl: './stylist-card.component.html',
  styleUrls: ['./stylist-card.component.css']
})
export class StylistCardComponent implements OnInit {

  @Input() stylistId:number;
  @Input() name:string;
  @Input() rating: number;
  @Input() category: string;
  @Input() costPerSlot: number;

  constructor() { }

  ngOnInit() {
  }

}
