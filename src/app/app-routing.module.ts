import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/Admin/admin/admin.component';
import { CalendarComponent } from './modules/Calendar/calendar/calendar.component';
import { HomePageComponent } from './modules/homePage/home-page/home-page.component';
import { LoginComponent } from './modules/Login/login/login.component';
import { WrongRouteComponent } from './modules/wrong-route/wrong-route.component';
import { AuthGuard } from './services/auth.guard';

const APP_ROUTES: Routes = [

  { path: "", pathMatch: "full", redirectTo: "calendar" },
  { path: "homePage", component: HomePageComponent ,canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "admin/:toAddNewAdmin", component: AdminComponent,canActivate: [AuthGuard] },
  // {path:"customer1",component:CustomerListComponent},
  { path: "customer", loadChildren: () => import("./modules/customer/customer.module").then(m => m.CustomerModule) },
  { path: "calendar", component: CalendarComponent,canActivate: [AuthGuard] },
  // {path:"order",component:OrdersListComponent},
  { path: "orders", loadChildren: () => import("./modules/orders/orders.module").then(m => m.OrdersModule) },
  { path: "**",pathMatch:"full", component: WrongRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
