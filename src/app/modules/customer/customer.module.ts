import { Component, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CustomerService } from "./customer.service";
 import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent} from './customer-card/customer-card.component';
import { CustomerDialogComponent } from "./customer-dialog/customer-dialog.component";
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";


const CUSTOMER_ROUTES: Routes = [
    { path: "customerList", component: CustomerListComponent },
    { path: "NewCustomer", component: CustomerCardComponent },
];
@NgModule({
    declarations: [CustomerListComponent, CustomerCardComponent, CustomerDialogComponent],
    imports: [CommonModule,ReactiveFormsModule, FormsModule, RouterModule.forChild(CUSTOMER_ROUTES),MaterialModule],
    providers: [CustomerService],
    exports: [CustomerListComponent, CustomerCardComponent]
})
export class CustomerModule {

}
// isLoggedIn$ = new BehaviorSubject<boolean>(false);