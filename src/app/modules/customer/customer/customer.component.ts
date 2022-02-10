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


<<<<<<< HEAD
  @Output()
  onGetCustomerDetails: EventEmitter<Customer> = new EventEmitter();
=======
  // @Output()
  // onGetCustomerDetails: EventEmitter<Customer> = new EventEmitter();
>>>>>>> 05d0285c9f62a856fadf86ae1d7a447e745831ce

  constructor(private _customerService: CustomerService, public dialog: MatDialog) { }

  // customerDetails!: Customer
  customers: CustomerDTO[]=[];
<<<<<<< HEAD
=======
  dataSource=this.customers;
>>>>>>> 05d0285c9f62a856fadf86ae1d7a447e745831ce

  // isSingleClick: Boolean = true;

  // onClicked() {
  //   this.isSingleClick = true;
  // }

  openDialog(Id:number): void {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
<<<<<<< HEAD
      width: '1250px',
=======
      width: '1200',
>>>>>>> 05d0285c9f62a856fadf86ae1d7a447e745831ce
      data: {id:Id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      alert('popup closed!!!!!!!!!!');
    });
  }
  

  getAllCustomers() {
    this._customerService.getAllCustomers().subscribe(data => {
      if (data) { this.customers = data; console.log(this.customers)
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

<<<<<<< HEAD
  hide=true;
=======
>>>>>>> 05d0285c9f62a856fadf86ae1d7a447e745831ce
}
