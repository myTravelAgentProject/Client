import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

const ORDER_ROUTES: Routes = [
  { path: "ordersList", component: OrdersListComponent },
  { path: "orders/NewOrder", component: OrderCardComponent },
];

@NgModule({
  declarations: [OrdersListComponent,OrderCardComponent],
  imports: [
    CommonModule,ReactiveFormsModule, FormsModule,MatIconModule ,RouterModule.forChild(ORDER_ROUTES),MatInputModule,MatTableModule,MatPaginatorModule,MatSortModule, MatIconModule,MatOptionModule],
     providers: [],
    exports: [OrdersListComponent, OrderCardComponent]
})
export class OrdersModule { }
