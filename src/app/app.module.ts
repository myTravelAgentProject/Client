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
import { MatFormFieldControl } from '@angular/material/form-field';

const APP_ROUTES:Routes=[
  
  {path:"", pathMatch: "full", redirectTo:"login"},
  {path:"homePage",component:HomePageComponent},
  {path:"login",component:LoginComponent},
  {path:"customer", loadChildren:()=> import("./modules/customer/customer.module").then(m=>m.CustomerModule)}
  
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomePageComponent, 
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
    RouterModule.forRoot(APP_ROUTES),
    ///////////////// material modules /////////////////
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
