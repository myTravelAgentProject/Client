import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerService } from 'src/app/modules/customer/customer.service';
import { CustomerDialogComponent } from '../customer-dialog/customer-dialog.component';
//Material:
import { MatDialog } from '@angular/material/dialog';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {



  constructor(private _customerService: CustomerService, public dialog: MatDialog,private _liveAnnouncer: LiveAnnouncer) { }

  customers: Customer[]=[];
  customersList:Customer[]=[];
  customersName:string[]=[];
  name:string;
    
  columnsToDisplay: string[] = ['firstName', 'lastName', 'emailAddress', 'address','phoneNumber'];
  dataSource: MatTableDataSource<Customer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort)sort: MatSort

  openDialog(Id:number): void {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '80%',
      height:'80%',
      data: {id:Id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // alert('popup closed!!!!!!!!!!');
      if (result) {
        this.getAllCustomers();
      }
    });
  }
  

  getAllCustomers() {
    this._customerService.getAllCustomers().subscribe(data => {
      if (data) { this.customersList=data; this.customers = data; 
        this.dataSource = new MatTableDataSource(this.customersList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator=this.paginator;
        this.dialog.closeAll();
       } else { console.log("no customers") }
    })
  }

  // getAllCustomersName(){
  //   this.getAllCustomers();
  //   this.customers.forEach((customer)=>{

  //   }
  // }
  getCustomerDetails(id:number): void {
    this.openDialog(id);
  }

  ngOnInit(): void {
    this.getAllCustomers();
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value)),
    // );
    }
 
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
}
