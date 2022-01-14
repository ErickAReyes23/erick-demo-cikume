import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'login',component:UsersComponent}
    ])
  ],
  declarations: [UsersComponent]
})
export class UsersModule { 


}
