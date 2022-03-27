import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { Customer } from 'src/app/models/Customer.model';
import { Hotel } from 'src/app/models/Hotel.model';
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

 filteredOptions: Observable<string[]>;
 hotelsOption:Observable<string[]>;
  myControl = new FormControl();
  myHotelControl= new FormControl();
  customers:Customer[]=[]
  customerId:number;
  hotels:Hotel[]=[];
  @Input()
  orderID: number;
  

  orderForm:FormGroup
  ngOnInit(): void {
    this.buildForm();
    this.getOrderDetails();
    this.getAllCustomers1();
    this.getHotelsList();
    this.hotelsOption=this.myHotelControl.valueChanges.pipe(
      startWith(''),
      map(val => this._filterHotel(val)),
    )
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
   
  }

  getAllCustomers1(){
    this._customerService.getAllCustomers().subscribe(data=>{
      if(data)
       {this.customers=data; 
        console.log(this.customers);
      }})
  };
 
  _filter(val: string): string[] {
    return this.customers.map(x=>x.firstName+" "+x.lastName).filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  _filterHotel(value: string): string[] {
    // const filterValue = value.toLowerCase();
    // debugger;
    return this.hotels.map(x=>x.name).filter(option =>
       option.toLowerCase().includes(value.toLowerCase()));
  }

  getHotelsList(){
    this._orderService.getAllHotels().subscribe(data=>
      {if(data){
        this.hotels=data;
     }; })
  }
  setOrderDetails(order: OrderDTO): void {
    // this.customerDetails = customer;
    this.orderForm.patchValue(order);
    // this.customerForm.controls["firstName"].setValue(customer.firstName);
  }
  buildForm(): void {
    this.orderForm = new FormGroup({
      "id":new FormControl(0,Validators.required),
      "customerId":new FormControl(18,Validators.required),
      "customerName": new FormControl("",Validators.required),
      "checkInDate": new FormControl("",Validators.required),
      "checkOutDate": new FormControl("",Validators.required),
      "bookingDate":new FormControl("",Validators.required),
      "earlyCheckIn": new FormControl(),
      "lateCheckOut": new FormControl(),
      "separteBeds": new FormControl(false,Validators.required),
      "multipleRooms": new FormControl(false,Validators.required),
      "floorHeight": new FormControl(),
      // "highFloor": new FormControl(),
      // "porch":new FormControl(),
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
         this.orderForm.disable();
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
updateMySelection(customerId:number){
  // this.actionData.libraryContent.billingActivityId=object.activityId;
}
}