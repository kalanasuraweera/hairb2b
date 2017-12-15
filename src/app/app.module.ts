import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'angular-calendar';
import { CommonModule } from '@angular/common';

import 'hammerjs';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatExpansionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSliderModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StylistListComponent } from './stylist-list/stylist-list.component';
import { SearchcriteriaComponent } from './searchcriteria/searchcriteria.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarheaderComponent } from './calendar/utils/calendarheader/calendarheader.component';
import { StylistProfileSalonviewComponent } from './stylist-profile-salonview/stylist-profile-salonview.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StylistListComponent,    
    SearchcriteriaComponent,
    CalendarComponent,
    CalendarheaderComponent,
    StylistProfileSalonviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    CalendarModule.forRoot(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
