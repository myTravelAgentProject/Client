import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { MaterialModule } from '../material/material.module';
import { AuthGuard } from 'src/app/services/auth.guard';


const ORDER_ROUTES: Routes = [
  { path: "ordersList", component: OrdersListComponent ,canActivate: [AuthGuard]},
  { path: "orders/NewOrder", component: OrderCardComponent ,canActivate: [AuthGuard]},
  { path: "orders/NewOrder/:id", component: OrderCardComponent,canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [OrdersListComponent,OrderCardComponent , OrderDialogComponent],
  imports: [
    CommonModule,ReactiveFormsModule, FormsModule,MaterialModule ,RouterModule.forChild(ORDER_ROUTES),],
     providers: [],
    exports: [OrdersListComponent, OrderCardComponent]
})
export class OrdersModule { }
