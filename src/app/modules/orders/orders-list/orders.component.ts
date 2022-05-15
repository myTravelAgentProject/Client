import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {  OrderDTO } from 'src/app/models/OrderDTO.model';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersListComponent implements OnInit{

  ordersList:OrderDTO[]=[];
  hotelPrice:number;
  columnsToDisplay: string[] = ['customerName','checkInDate', 'checkOutDate', 'totalPrice', 'costPrice','numOfAdults','numOfKids','hotelName'];
  dataSource: MatTableDataSource<OrderDTO>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private _orderService:OrdersService,public dialog: MatDialog) { 
    // this.dataSource = new MatTableDataSource(this.ordersList);
  }
  
  openDialog(Id:number): void {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '70%',
      height:'70%',
      data: {id:Id},
    });

    dialogRef.afterClosed().subscribe(result => {
    if(result){
      this.getTheLastOrders();
    }
    });
  }

  getTheLastOrders() {
    this._orderService.getTheLastOrders().subscribe(data => {
      if (data) { this.ordersList = data; 
        this.dataSource = new MatTableDataSource(this.ordersList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.ordersList);
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

  //  ngAfterViewInit():void {
  
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
