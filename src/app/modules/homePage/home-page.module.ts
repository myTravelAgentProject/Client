import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '../Calendar/calendar/calendar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatIconModule } from '@angular/material/icon';
import { CustomerModule } from '../customer/customer.module';
import { CalendarModule } from '../Calendar/calendar.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppModule } from 'src/app/app.module';


const HOME_ROUTES:Routes=[
  {path:"",component:HomePageComponent},
  {path:"calendar",component:CalendarComponent},
  {path:"customer", loadChildren:()=> import("src/app/modules/customer/customer.module").then(m=>m.CustomerModule)}
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTES),
    MatIconModule,
    CustomerModule,
    CalendarModule
  ],
  exports:[HomePageComponent]
})
export class HomePageModule { }
