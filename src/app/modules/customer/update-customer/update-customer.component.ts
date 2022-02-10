import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerService } from 'src/app/modules/customer/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private _customerService: CustomerService) { }

  // private customerDetails!: Customer;
  
  edit: boolean = true;
  customerForm!: FormGroup;

  @Input()
  customerID!: number;
  // @Output()
  // onSaveClicked = new EventEmitter<boolean>()


  ngOnInit(): void {
    this.buildForm();
    this.getALLCustomerDetails();
  }

  setCustomerDetails(customer: Customer): void {
    // this.customerDetails = customer;
    this.customerForm.patchValue(customer);
    // this.customerForm.controls["firstName"].setValue(customer.firstName);
    // this.customerForm.controls["lastName"].setValue(customer.lastName);
    // this.customerForm.controls["numOfAdults"].setValue(customer.numOfAdults);
    // this.customerForm.controls["numOfKids"].setValue(customer.numOfKids);
    // this.customerForm.controls["highFloor"].setValue(customer.highFloor);
    // this.customerForm.controls["porch"].setValue(customer.porch);
    // this.customerForm.controls["separteBeds"].setValue(customer.separteBeds);
    // this.customerForm.controls["multipleRooms"].setValue(customer.multipleRooms);
    // this.customerForm.controls["emailAddress"].setValue(customer.emailAddress);
    // this.customerForm.controls["address"].setValue(customer.address);
    // this.customerForm.controls["phoneNumber"].setValue(customer.phoneNumber);
    // this.customerForm.controls["comments"].setValue(customer.comments);
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
    // this.customerDetails = this.customerForm.value;
    if (this.customerForm.value.id == 0) {
      this._customerService.addNewCustomer(this.customerForm.value).subscribe(
        data => {
          if (data) {
            console.log("sucsess " + data)
          } else
            console.log("faild");
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
