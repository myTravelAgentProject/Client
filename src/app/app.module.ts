import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './modules/Admin/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerModule } from './modules/customer/customer.module';
import { CalendarModule } from './modules/Calendar/calendar.module';
import { RouterModule,Routes } from '@angular/router';
import { CustomerListComponent } from './modules/customer/customer-list/customer-list.component';
import { CustomerCardComponent } from './modules/customer/customer-card/customer-card.component';
import { HomePageComponent } from './modules/homePage/home-page/home-page.component';
import { LoginComponent } from './modules/Login/login/login.component';
import { LoginModule } from './modules/Login/login.module';
// import { Calendar, FullCalendarModule } from '@fullcalendar/angular';
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
// /*  */import { MatFormFieldControl } from '@angular/material/form-field';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { CalendarComponent } from './modules/Calendar/calendar/calendar.component';
import { OrdersModule } from './modules/orders/orders.module';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './modules/material/material.module';


const APP_ROUTES:Routes=[
  
  {path:"", pathMatch: "full", redirectTo:"login"},
  {path:"homePage",component:HomePageComponent},
  {path:"login",component:LoginComponent},
  // {path:"customer1",component:CustomerListComponent},
  {path:"customer", loadChildren:()=> import("./modules/customer/customer.module").then(m=>m.CustomerModule)},
  {path:"calendar",component:CalendarComponent},
  // {path:"order",component:OrdersListComponent},
  {path:"orders", loadChildren:()=> import("./modules/orders/orders.module").then(m=>m.OrdersModule)},

];
// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin,
//   // interactionPlugin
// ]);
@NgModule({
  declarations: [
    AppComponent,
    // AdminComponent,
    HomePageComponent,
    // CalendarComponent,
    MenuComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomerModule,
    LoginModule,
    CalendarModule,
    // FullCalendarModule,
    CalendarModule,
    OrdersModule,
    RouterModule.forRoot(APP_ROUTES),
    ///////////////// material modules /////////////////
    MaterialModule,
    BrowserModule,
    DropDownsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
