import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stylistList:string[];
  myControl: FormControl = new FormControl();
  constructor(private http:HttpClient) { }
  filteredStylists: Observable<string[]>;
  ngOnInit() {
    this.http.get<string[]>("http://localhost:51967/api/stylists/getStylistNames").subscribe(res=>{
      this.stylistList=res;console.log(this.stylistList);
      this.filteredStylists = this.myControl.valueChanges.pipe(startWith(''),map(val=>this.filter(val)));
    });
    
  }

  filter(val: string): string[] {
    return this.stylistList.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}

