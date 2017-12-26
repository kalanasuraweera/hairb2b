import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
  MatSliderModule,
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StylistListComponent } from './stylist-list/stylist-list.component';
import { SearchcriteriaComponent } from './searchcriteria/searchcriteria.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarheaderComponent } from './calendar/utils/calendarheader/calendarheader.component';
import { StylistProfileSalonviewComponent } from './stylist-profile-salonview/stylist-profile-salonview.component';
import { StylistCardComponent } from './stylist-card/stylist-card.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'style/:stylistId', component: StylistProfileSalonviewComponent },
  { path: 'style', component: StylistProfileSalonviewComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StylistListComponent,    
    SearchcriteriaComponent,
    CalendarComponent,
    CalendarheaderComponent,
    StylistProfileSalonviewComponent,
    StylistCardComponent,
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
    CommonModule,
    MatCheckboxModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
