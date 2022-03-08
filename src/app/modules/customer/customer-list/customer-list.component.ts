import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerService } from 'src/app/modules/customer/customer.service';
import { CustomerDialogComponent } from '../customer-dialog/customer-dialog.component';
//Material:
import { MatDialog } from '@angular/material/dialog';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit,AfterViewInit {



  constructor(private _customerService: CustomerService, public dialog: MatDialog,private _liveAnnouncer: LiveAnnouncer) { }

  customers: Customer[]=[];
  customersName:string[]=[];
  name:string;
  // options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();

  openDialog(Id:number): void {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '80%',
      height:'80%',
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
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    
  }
 
  

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

  _filter(val: string): string[] {
    return this.customers.map(x => x.firstName+' '+x.lastName).filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  // findCustomer(name:string){
  //   this.customers=this.customers.filter(x=>x.firstName.toLowerCase()+' '+x.lastName.toLowerCase().includes(name.toLowerCase()));
  // }

  
  columnsToDisplay: string[] = ['firstName', 'lastName', 'emailAddress', 'address','phoneNumber'];
  dataSource = new MatTableDataSource<Customer>(this.customers);
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort// = new MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  private handleContacts() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
 
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  sortData(sort: Sort) {
    const data = this.customers.slice();
    if (!sort.active || sort.direction === '') {
      this.customers = data;
      return;
    }

    this.customers = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'firstName':
          return this.compare(a.firstName, b.firstName, isAsc);
        case 'lastName':
          return this.compare(a.lastName, b.lastName, isAsc);
        // case 'fat':
        //   return this.compare(a.fat, b.fat, isAsc);
        // case 'carbs':
        //   return this.compare(a.carbs, b.carbs, isAsc);
        // case 'protein':
        //   return this.compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}

