import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './modules/Calendar/calendar/calendar.component';
import { HomePageComponent } from './modules/homePage/home-page/home-page.component';
import { LoginComponent } from './modules/Login/login/login.component';


const APP_ROUTES: Routes = [

  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "homePage", component: HomePageComponent },
  { path: "login", component: LoginComponent },
  // {path:"customer1",component:CustomerListComponent},
  { path: "customer", loadChildren: () => import("./modules/customer/customer.module").then(m => m.CustomerModule) },
  { path: "calendar", component: CalendarComponent },
  // {path:"order",component:OrdersListComponent},
  { path: "orders", loadChildren: () => import("./modules/orders/orders.module").then(m => m.OrdersModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
