import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDTO } from 'src/app/models/CustomerDTO.model';
import {  OrderDTO } from 'src/app/models/OrderDTO.model';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersListComponent implements OnInit {

  ordersList:OrderDTO[]=[];

  
  constructor(private _orderService:OrdersService,public dialog: MatDialog) { }

  
  openDialog(Id:number): void {
    const dialogRef = this.dialog.open(OrdersListComponent, {
      width: '80%',
      height:'80%',
      data: {id:Id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      alert('popup closed!!!!!!!!!!');
    });
  }
  
  

  getTheLastOrders() {
    this._orderService.getTheLastOrders().subscribe(data => {
      if (data) { this.ordersList = data; console.log(this.ordersList);
        this.dialog.closeAll();
       } else { console.log("no customers") }
    })
  }
  
  getOrderDetails(id:number): void {
    this.openDialog(id);
  }

  ngOnInit(): void {
    this.getTheLastOrders()
   }

    hotelPrice:number;
  columnsToDisplay: string[] = ['customerName','checkInDate', 'checkOutDate', 'totalPrice', 'costPrice','numOfAdults','numOfKids','hotelName'];
  dataSource = new MatTableDataSource<OrderDTO>(this.ordersList);

}
