import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDTO } from 'src/app/models/CustomerDTO.model';
import { Order } from 'src/app/models/Order.model';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersListComponent implements OnInit {

  ordersList:Order[]=[];

  constructor(private _orderService:OrdersService) { }

  ngOnInit(): void {
   this.getTheLastOrders()
  }
  

  getTheLastOrders() {
    this._orderService.getTheLastOrders().subscribe(data => {
      if (data) { this.ordersList = data; console.log(this.ordersList);
       } else { console.log("no customers") }
    })
  }
  
    hotelPrice:number;
  columnsToDisplay: string[] = ['checkInDate', 'checkOutDate', 'totalPrice', 'costPrice','numOfAdults','numOfKids','hotelName'];
  dataSource = new MatTableDataSource<Order>(this.ordersList);

}
