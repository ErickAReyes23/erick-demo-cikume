import { UsersModule } from './users/users.module';
import { NavBarComponent } from './utilities/header.component';
import { PageNotFoundComponent } from './page-404.component';
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
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [		
    AppComponent,
      HomeComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, { delay: 1000 }),
    CitizensModule,
    UsersModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path: '**', component:PageNotFoundComponent}
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
