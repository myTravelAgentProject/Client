import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '../Calendar/calendar/calendar.component';

const HOME_ROUTES:Routes=[
  {path:"calendar",component:CalendarComponent},
  {path:"customer", loadChildren:()=> import("src/app/modules/customer/customer.module").then(m=>m.CustomerModule)} 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(HOME_ROUTES)
  ]
})
export class HomePageModule { }
