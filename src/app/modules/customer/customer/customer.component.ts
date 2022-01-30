import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerDTO } from 'src/app/models/CustomerDTO.model';
import { CustomerService } from 'src/app/modules/customer/customer.service';
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

  constructor(private _customerService: CustomerService) { }

  customerDetails!: Customer
  customer!: CustomerDTO[];

  getAllCustomers() {
    this._customerService.getAllCustomers().subscribe(data => { if (data)
     { this.customer = data; console.log(this.customer) } else { console.log("no such user") } })
  }

  getCustomerDetails(): void {
    this.onGetCustomerDetails.emit()
  }

  ngOnInit(): void {
  }

}
