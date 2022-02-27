import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const ORDER_ROUTES: Routes = [
  { path: "orders", component: OrdersListComponent },
  { path: "orders/NewOrder", component: OrderCardComponent },
];

@NgModule({
  declarations: [OrdersListComponent,OrderCardComponent],
  imports: [
    CommonModule,ReactiveFormsModule, FormsModule,MatIconModule ,RouterModule.forChild(ORDER_ROUTES),],
     providers: [],
    exports: [OrdersListComponent, OrderCardComponent]
})
export class OrdersModule { }
