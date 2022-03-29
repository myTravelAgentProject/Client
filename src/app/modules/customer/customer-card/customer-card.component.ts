import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer.model';
import { OrderDTO } from 'src/app/models/OrderDTO.model';
import { CustomerService } from 'src/app/modules/customer/customer.service';
import { OrdersService } from '../../orders/orders.service';
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
  customerID: number=0;
  @Output()
  onCustomeBtnClikced = new EventEmitter();
  panelOpenState = false;
  @ViewChild(MatAccordion) accordion: MatAccordion;


  ngOnInit(): void {
    this.buildForm();
    this.getALLCustomerDetails();
    this.getAllCustomerOrders();
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
      "address": new FormControl(""),
      "phoneNumber": new FormControl("", Validators.required),
      "anotherPhoneNumber":new FormControl(""),
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
    if (this.customerForm.get('id')?.value == 0) {
      this._customerService.addNewCustomer(this.customerForm.value).subscribe( data => {
          if (data) {
            console.log("sucsess " + data);
            // this.onCustomeBtnClikced.emit();
            this._router.navigate(['customer/customerList']); 
          } else {
            console.log("faild");
            this.onCustomeBtnClikced.emit();
          }
        });
    }
    else
      this._customerService.updateCustomer(this.customerForm.value).subscribe(
        data => {
          debugger;
         
          if (data) {
            console.log("sucsess");
            
          } else{
            this._router.navigate(['./customerList']);
            console.log("faild");
          }
          this.onCustomeBtnClikced.emit();
        });
  }

  deleteCustomer(){
    if(this.customerForm.value.id!=0){
      this._customerService.deleteCustomer(this.customerForm.value.id).subscribe(  data => {
        this.onCustomeBtnClikced.emit();
          // if (data) {
          //   console.log("sucsess");
            
          // } else
          //   console.log("faild");
        });
    
     
     
   } }

   //Orders
   ordersList:OrderDTO[]=[];
   columnsToDisplay: string[] = ['checkInDate', 'checkOutDate', 'totalPrice', 'costPrice','numOfAdults','numOfKids','hotelName'];
   dataSource = new MatTableDataSource<OrderDTO>(this.ordersList);
 
   getAllCustomerOrders() {
    //  if (this.customerForm.get('id')?.value != 0) {
      this._customerService.getOrdersByCustomerId(this.customerID).subscribe( data => {
          if (data) {
            console.log("sucsess " + data);
            this.ordersList=data;
          } else {
            console.log("faild");
          }
        });
    // }
 }

 getOrderDetails(id:number){
   if(id!=0){
     debugger;
     this.onCustomeBtnClikced.emit()
    this._router.navigate(['/orders/orders/NewOrder',id]);
    
   }
 }
 }
//  const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
