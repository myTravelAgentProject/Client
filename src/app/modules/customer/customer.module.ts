import { Component, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes,RouterModule } from "@angular/router";
import { CustomerService } from "./customer.service";
import { CustomerComponent } from "./customer/customer.component";
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const CUSTOMER_ROUTES:Routes=[
   {path:"customer",component:CustomerComponent},
    {path:"customer/NewCustomer",component:UpdateCustomerComponent},
];
@NgModule({
    declarations:[CustomerComponent, UpdateCustomerComponent],
    imports:[ReactiveFormsModule,FormsModule,RouterModule.forChild(CUSTOMER_ROUTES)],
    providers:[CustomerService],
    exports:[CustomerComponent,UpdateCustomerComponent]
})
export class CustomerModule{
    
}