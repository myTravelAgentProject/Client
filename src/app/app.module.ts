import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './modules/Admin/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { InterceptorService } from './services/interceptor.service';
import { UserService } from './services/user.service';
import { WrongRouteComponent } from './modules/wrong-route/wrong-route.component';


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
    MenuComponent,
    WrongRouteComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // CustomerModule,
    LoginModule,
    CalendarModule,
    // CalendarModule,
    OrdersModule,
    ///////////////// material modules /////////////////
    MaterialModule,
    DropDownsModule,
  ],
  providers: [
    UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
