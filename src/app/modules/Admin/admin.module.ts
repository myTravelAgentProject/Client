import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CustomerCardComponent } from "../customer/customer-card/customer-card.component";
import { CustomerListComponent } from "../customer/customer-list/customer-list.component";
import { CustomerService } from "../customer/customer.service";
import { MaterialModule } from "../material/material.module";
import { AdminComponent } from "./admin/admin.component";

@NgModule({
    declarations: [AdminComponent],
    imports: [CommonModule,ReactiveFormsModule, FormsModule,MaterialModule],
    providers: [CustomerService],
    exports: [AdminComponent]
})
export class AdminModule {

}