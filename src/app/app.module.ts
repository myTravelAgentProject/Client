import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { CustomerComponent } from './modules/customer/customer.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CustomerModule } from './modules/customer/customer.module';
import { RouterModule,Routes } from '@angular/router';
import { CustomerComponent } from './modules/customer/customer/customer.component';
import { UpdateCustomerComponent } from './modules/customer/update-customer/update-customer.component';
import { HomePageComponent } from './modules/homePage/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
//import { UpdateCustomerComponent } from './modules/update-customer/update-customer.component';

const APP_ROUTES:Routes=[
  {path:"homePage",component:HomePageComponent},
  {path:"login",component:LoginComponent},
  // {path:"newCustomer",component:UpdateCustomerComponent},
  {path:"customer", loadChildren:()=> import("./modules/customer/customer.module").then(m=>m.CustomerModule)},

 
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
   
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
   RouterModule.forRoot(APP_ROUTES),

    ///////////////// material modules /////////////////
    MatInputModule,
    MatButtonModule,
    MatIconModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
