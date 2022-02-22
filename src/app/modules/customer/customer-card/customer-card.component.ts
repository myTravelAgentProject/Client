import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerService } from 'src/app/modules/customer/customer.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {

  constructor(private _customerService: CustomerService,private _router:Router) { }

  edit: boolean = true;
  customerForm!: FormGroup;

  @Input()
  customerID!: number;
 

  ngOnInit(): void {
    this.buildForm();
    this.getALLCustomerDetails();
  }

  setCustomerDetails(customer: Customer): void {
    // this.customerDetails = customer;
    this.customerForm.patchValue(customer);
    // this.customerForm.controls["firstName"].setValue(customer.firstName);
  }

  buildForm(): void {
    this.customerForm = new FormGroup({
      "id":new FormControl(0),
      "firstName": new FormControl("", Validators.required),
      "lastName": new FormControl("", Validators.required),
      "numOfAdults": new FormControl(0),
      "numOfKids": new FormControl(0),
      "highFloor": new FormControl(),
      "porch": new FormControl(),
      "separteBeds": new FormControl(),
      "multipleRooms": new FormControl(),
      "emailAddress": new FormControl("", Validators.email),
      "address": new FormControl("", Validators.required),
      "phoneNumber": new FormControl("", Validators.required),
      "comments": new FormControl(),
    });
   
  }


  getALLCustomerDetails() {
    if(this.customerID){
      this.customerForm.disable();
    this._customerService.getByCustomerId(this.customerID).subscribe(data => {
      if (data) {
        this.setCustomerDetails(data);
        console.log(data);
      }
      else { console.log("no such customer"); }
    })}
  };

  onEditClickecd(): void {
    this.customerForm.enable();
  }

  saveCustomer() {
    if (this.customerForm.value.id == 0) {
      this._customerService.addNewCustomer(this.customerForm.value).subscribe( data => {
          if (data) {
            console.log("sucsess " + data);
            this._router.navigate(['/customer1']); 
          } else
            console.log("faild");
            this._router.navigate(['/homePage']); 
        });
    }
    else
      this._customerService.updateCustomer(this.customerForm.value).subscribe(
        data => {
          if (data) {
            console.log("sucsess")
          } else
            console.log("faild");
        });
  };

}
