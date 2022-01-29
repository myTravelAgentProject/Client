import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

 // @Input()
  customerDetails!:Customer

  
  constructor(private _customerService:CustomerService) { }

  customer!:Customer[];

  // getAllCustomers(){
  //   this._customerService.getAllCustomers().subscribe(data=>
  //  {if(data) {this.customer=data;console.log(this.customer)} else{console.log("No such Customer")}})
  //  }
   
  getALLCustomerDetails(){
  this._customerService.getByCustomerId("/2").subscribe(data=>{
    if(data){
      this.customerDetails=data;
      this.setCustomerDetails(this.customerDetails);
      console.log(data);
    }
    else{console.log("no such customer");}
  })
  };

  setCustomerDetails(customer: Customer): void {
    this.customerForm.controls["FirstName"].setValue(this.customerDetails.firstName);
    this.customerForm.controls["LastName"].setValue(customer.lastName);
    this.customerForm.controls["NumOfAdults"].setValue(customer.numOfAdults);
    this.customerForm.controls["NumOfKids"].setValue(customer.numOfKIds);
    this.customerForm.controls["HighFloor"].setValue(customer.highFloor);
    this.customerForm.controls["Porch"].setValue(customer.porch);
    this.customerForm.controls["SeparteBeds"].setValue(customer.separteBeds);
    this.customerForm.controls["MultipleRooms"].setValue(customer.multipleRooms);
    this.customerForm.controls["EmailAdress"].setValue(customer.emailAdress);
    this.customerForm.controls["Address"].setValue(customer.address);
    this.customerForm.controls["PhoneNumber"].setValue(customer.phoneNumber);
    this.customerForm.controls["Comments"].setValue(customer.comments);
  }
  

    customerForm:FormGroup=new FormGroup({
      "FirstName":new FormControl("",Validators.required),
      "LastName":new FormControl("",Validators.required),
      "NumOfAdults":new FormControl(""),
      "NumOfKids":new FormControl(""),
      "HighFloor":new FormControl(""),
      "Porch":new FormControl(""),
      "SeparteBeds":new FormControl(""),
      "MultipleRooms":new FormControl(""),
      "EmailAdress":new FormControl("",Validators.email),
      "Address":new FormControl("",Validators.required),
      "PhoneNumber":new FormControl("",Validators.required),
      "Comments":new FormControl(""),
    });
  ngOnInit(): void {
 
  }

}
