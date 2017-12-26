import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stylist-profile-salonview',
  templateUrl: './stylist-profile-salonview.component.html',
  styleUrls: ['./stylist-profile-salonview.component.css']
})
export class StylistProfileSalonviewComponent implements OnInit {

  public stylistId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{this.stylistId= +params.get('stylistId')});
  }

}
