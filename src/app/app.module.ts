import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './modules/Admin/admin/admin.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CustomerModule } from './modules/customer/customer.module';
import { RouterModule,Routes } from '@angular/router';
import { CustomerListComponent } from './modules/customer/customer-list/customer-list.component';
import { CustomerCardComponent } from './modules/customer/customer-card/customer-card.component';
import { HomePageComponent } from './modules/homePage/home-page/home-page.component';
import { LoginComponent } from './modules/Login/login/login.component';
import { MatTabsModule } from '@angular/material/tabs'; 
import { LoginModule } from './modules/Login/login.module';
// import { FullCalendarModule } from '@fullcalendar/angular';
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { MatFormFieldControl } from '@angular/material/form-field';
// import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { CalendarComponent } from './modules/Calendar/calendar/calendar.component';


const APP_ROUTES:Routes=[
  {path:"", pathMatch: "full", redirectTo:"login"},
  {path:"homePage",loadChildren:()=> import("./modules/homePage/home-page.module").then(m=>m.HomePageModule)}
  // {path:"login",component:LoginComponent},
  // {path:"customer1",component:CustomerListComponent},
  // {path:"customer", loadChildren:()=> import("./modules/customer/customer.module").then(m=>m.CustomerModule)} 
];
// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin,
//   // interactionPlugin
// ]);
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomePageComponent,
    // CalendarComponent, 
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomerModule,
    LoginModule,
    // FullCalendarModule,
    RouterModule.forRoot(APP_ROUTES),
    ///////////////// material modules /////////////////
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    BrowserModule,
    // DropDownsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
