import { Component, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CustomerService } from "./customer.service";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerCardComponent} from './customer-card/customer-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerDialogComponent } from "./customer-dialog/customer-dialog.component";
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInput, MatInputModule } from "@angular/material/input";
import {MatTableModule} from '@angular/material/table';
<<<<<<< HEAD
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import {TableModule} from 'primeng/table';
import { MatSortModule } from "@angular/material/sort";
=======
>>>>>>> ad902364ee0cc5055377278e94de11273b7b5723


const CUSTOMER_ROUTES: Routes = [
    { path: "customer", component: CustomerListComponent },
    { path: "customer/NewCustomer", component: CustomerCardComponent },
];
@NgModule({
    declarations: [CustomerListComponent, CustomerCardComponent, CustomerDialogComponent],
    imports: [ReactiveFormsModule, FormsModule, RouterModule.forChild(CUSTOMER_ROUTES), MatDialogModule,
        MatButtonModule,CommonModule,MatInputModule,MatTableModule,TableModule,MatPaginatorModule,MatSortModule ],
    providers: [CustomerService],
    exports: [CustomerListComponent, CustomerCardComponent]
})
export class CustomerModule {

}