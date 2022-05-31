import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderDTO } from 'src/app/models/OrderDTO.model';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { OrdersService } from '../orders.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersListComponent implements OnInit {

  ordersList: OrderDTO[] = [];
  hotelPrice: number;
  columnsToDisplay: string[] = ['customerName', 'checkInDate', 'checkOutDate', 'totalPrice', 'costPrice', 'numOfAdults', 'numOfKids', 'hotelName'];
  dataSource: MatTableDataSource<OrderDTO> = new MatTableDataSource();
  paramsForm: FormGroup;
  isLoading = false;
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions: number[] = [20];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _orderService: OrdersService, public dialog: MatDialog) {
    // this.dataSource = new MatTableDataSource(this.ordersList);
  }
  ngOnInit(): void {
    this.getTheLastOrders();
    this.buildForm();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(Id: number): void {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '80%',
      height:'80%',
      data: { id: Id },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getTheLastOrders();
      }
    });
  }

  getTheLastOrders() {
    this.isLoading = true;
    this._orderService.getTheLastOrders(this.currentPage, this.pageSize).subscribe(data => {
      if (data) {
        this.ordersList = data.orders;
        this.dataSource.data = this.ordersList;
        setTimeout(() => {
          // this.dataSource.paginator = this.paginator;
          this.paginator.pageIndex = this.currentPage;
          this.paginator.length = data.totalRows;
        });
        console.log(this.ordersList);
        this.dialog.closeAll();
      } else {
        this.isLoading = false;
        console.log("no customers")
      }
    })
  }
  findOrdersByParams() {
   // this.isLoading = true;
   
    const customerName = this.paramsForm.get('customerName')?.value.replace(/\s/g, '');;
    const hotelName = this.paramsForm.get('hotelName')?.value.replace(/\s/g, '');;
    const startDate = this.paramsForm.get('startDate')?.value;
    const endDate = this.paramsForm.get('endDate')?.value;
    this.currentPage=0;
    this._orderService.getOrdersByParams(customerName, hotelName, this.currentPage, this.pageSize, startDate, endDate).subscribe(data => {
      if (data) {
        this.ordersList = data.orders;
        this.dataSource.data = this.ordersList;
        setTimeout(() => {
          // this.dataSource.paginator = this.paginator;
          this.paginator.pageIndex = this.currentPage;
          this.paginator.length = data.totalRows;
          console.log(this.ordersList);
        }) }
      else { console.log("no customers with this params") }
    })
  }
  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getTheLastOrders();
  }

  getOrderDetails(id: number): void {
    this.openDialog(id);
  }



  //  ngAfterViewInit():void {

  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }


  resetSearchParams() {
    this.buildForm();
    this.getTheLastOrders();
 //   this.currentPage=0;
  }
  buildForm(): void {
    this.paramsForm = new FormGroup({
      "customerName": new FormControl(""),
      "hotelName": new FormControl(""),
      "startDate": new FormControl(),
      "endDate": new FormControl(),
    });
  }
}
