import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerDTO } from 'src/app/models/CustomerDTO.model';
import { CustomerService } from 'src/app/modules/customer/customer.service';
import { CustomerDialogComponent } from '../customer-dialog/customer-dialog.component';

//import { EventEmitter } from 'stream';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  @Output()
  onGetCustomerDetails: EventEmitter<Customer> = new EventEmitter();

  constructor(private _customerService: CustomerService, public dialog: MatDialog) { }

  // customerDetails!: Customer
  customers: CustomerDTO[]=[];

  // isSingleClick: Boolean = true;

  // onClicked() {
  //   this.isSingleClick = true;
  // }

  openDialog(Id:number): void {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '1250px',
      data: {id:Id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      alert('popup closed!!!!!!!!!!');
    });
  }
  

  getAllCustomers() {
    this._customerService.getAllCustomers().subscribe(data => {
      if (data) { this.customers = data; console.log(this.customers);alert("succed!!")
       } else { console.log("no customers") }
    })
  }

  getCustomerDetails(id:number): void {
    this.openDialog(id);
    // this.isSingleClick = false;
    // this.onGetCustomerDetails.emit()
  }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  hide=true;
}
