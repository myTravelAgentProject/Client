import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer.model';
import { OrderDTO } from 'src/app/models/OrderDTO.model';
import { CustomerService } from '../../customer/customer.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  constructor(private _orderService:OrdersService,private _router:Router,private _customerService:CustomerService) { }

 
 customers:Customer[]=[]
  customerId:number;
  @Input()
  orderID: number;

  orderForm:FormGroup
  ngOnInit(): void {
    this.buildForm();
    this.getOrderDetails();
  }

  setOrderDetails(order: OrderDTO): void {
    // this.customerDetails = customer;
    this.orderForm.patchValue(order);
    // this.customerForm.controls["firstName"].setValue(customer.firstName);
  }
  buildForm(): void {
    this.orderForm = new FormGroup({
      "id":new FormControl(0,Validators.required),
      "customerId":new FormControl(1,Validators.required),
      "customerName": new FormControl("michal solo",Validators.required),
      "checkInDate": new FormControl("",Validators.required),
      "checkOutDate": new FormControl("",Validators.required),
      "bookingDate":new FormControl("03/03/2022",Validators.required),
      "earlyCheckIn": new FormControl(),
      "lateCheckOut": new FormControl(),
      "separteBeds": new FormControl(false,Validators.required),
      "multipleRooms": new FormControl(false,Validators.required),
      "floorHeight": new FormControl(0),
      "totalPrice": new FormControl(0,Validators.required),
      "costPrice": new FormControl(0,Validators.required),
      "bookingId": new FormControl(),
      "numOfAdults": new FormControl(0,Validators.required),
      "numOfKids": new FormControl(0),
      "statusCode": new FormControl(1,Validators.required),
      "newPrice": new FormControl(),
      "change": new FormControl(),
      "hotelId": new FormControl(4959,Validators.required),
      "hotelName": new FormControl("Gan Ba’eden",Validators.required),
      "comments": new FormControl(""),
      "isImportant": new FormControl(),
      "hotelPrice": new FormControl(0,Validators.required),
    });
  }
   
    getOrderDetails(){
      if(this.orderID){
        // this.orderForm.disable();
      this._orderService.getOrderById(this.orderID).subscribe(data => {
        if (data) {
          this.setOrderDetails(data);
          console.log(data);
        }
        else { console.log("no such order"); }
      })}
    }

onEditClickecd(): void {
  this.orderForm.enable();
}

saveOrder() {
  if (this.orderForm.get('id')?.value == 0) {
    this._orderService.addNewOrder(this.orderForm.value).subscribe( data => {
        if (data) {
          console.log("sucsess " + data);
          this._router.navigate(['./ordersList']); 
        } else {
          console.log("faild");
          this._router.navigate(['./homePage']);
        }
      });
  }
  else
    this._orderService.updateOrder(this.orderForm.value).subscribe(
      data => {
        if (data) {
          console.log("sucsess");
          this._router.navigate(['./ordersList']);
        } else
          console.log("faild");
    
        });
      }
    
 

// getCustomerId(name:string){
//   this._customerService.getAllCustomers().subscribe(data => {
//     if (data) { this.customers = data; 
//       console.log(this.customers);
//        this.c1= this.customers.filter((c:Customer)=>{
//           if((c.firstName+" "+c.lastName)==name){return  c.id}} );
//      } else { console.log("no customer") }
//   })
// }

deleteOrder(){
  if(this.orderForm.value.id!=0){
    this._orderService.deleteOrder(this.orderForm.value.id).subscribe(()=>
   this._router.navigate(['./ordersList']))
}
}
}