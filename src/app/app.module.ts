import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { CitizensModule } from './citizens/citizens.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CitizenListComponent } from './citizens/citizen-list/citizen-list.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, { delay: 1000 }),
    CitizensModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'citizen', component:CitizenListComponent},
      {path:'',redirectTo:'citizen',pathMatch:'full'},
      {path: '**', redirectTo:'citizen', pathMatch:'full'}
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
