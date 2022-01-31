import { Component, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CustomerService } from "./customer.service";
import { CustomerComponent } from "./customer/customer.component";
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerDialogComponent } from "./customer-dialog/customer-dialog.component";
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInput, MatInputModule } from "@angular/material/input";
import { MatLabel } from "@angular/material/form-field";

const CUSTOMER_ROUTES: Routes = [
    { path: "customer", component: CustomerComponent },
    { path: "customer/NewCustomer", component: UpdateCustomerComponent },
];
@NgModule({
    declarations: [CustomerComponent, UpdateCustomerComponent, CustomerDialogComponent],
    imports: [ReactiveFormsModule, FormsModule, RouterModule.forChild(CUSTOMER_ROUTES), MatDialogModule,
        MatButtonModule,CommonModule,MatInputModule],
    providers: [CustomerService],
    exports: [CustomerComponent, UpdateCustomerComponent]
})
export class CustomerModule {

}