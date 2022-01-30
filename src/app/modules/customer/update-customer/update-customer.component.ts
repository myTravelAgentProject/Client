import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerService } from 'src/app/modules/customer/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private _customerService:CustomerService) { }

  private customerDetails:Customer=new Customer(0,"","","","");
  
  id:number=0;

  setCustomerDetails(customer: Customer): void {
    this.customerDetails=customer;
    this.customerForm.controls["FirstName"].setValue(customer.firstName);
    this.customerForm.controls["LastName"].setValue(customer.lastName);
    this.customerForm.controls["NumOfAdults"].setValue(customer.numOfAdults);
    this.customerForm.controls["NumOfKids"].setValue(customer.numOfKIds);
    this.customerForm.controls["HighFloor"].setValue(customer.highFloor);
    this.customerForm.controls["Porch"].setValue(customer.porch);
    this.customerForm.controls["SeparteBeds"].setValue(customer.separteBeds);
    this.customerForm.controls["MultipleRooms"].setValue(customer.multipleRooms);
    this.customerForm.controls["EmailAddress"].setValue(customer.emailAddress);
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
    "EmailAddress":new FormControl("",Validators.email),
    "Address":new FormControl("",Validators.required),
    "PhoneNumber":new FormControl("",Validators.required),
    "Comments":new FormControl(""),
  });
   
  getALLCustomerDetails(){
  this._customerService.getByCustomerId("/22").subscribe(data=>{
    if(data){
      this.setCustomerDetails(data);
      console.log(data);
    }
    else{console.log("no such customer");}
  })
  };

  saveCustomer(){
     this.id=this.customerDetails.id;
     this.customerDetails=this.customerForm.value;
    //this.customerDetails.id=0;
    this.customerDetails.id=this.id;
    if(this.customerDetails.id==0){
      this._customerService.addNewCustomer(this.customerDetails).subscribe(
        data=>{
          if(data)
          {
            console.log("sucsess "+data)
          }else
          console.log("faild");
        });
    } 
    else
      this._customerService.updateCustomer(this.customerDetails).subscribe(
        data=>{
          if(data)
          {
            console.log("sucsess")
          }else
          console.log("faild");
        });
  };

 
  


  ngOnInit(): void {
    
  }

}
