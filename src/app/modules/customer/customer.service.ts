import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Customer } from 'src/app/models/Customer.model';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { OrderDTO } from 'src/app/models/OrderDTO.model';
// import { listenerCount } from 'process';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = "/api/Customer/";
  // customers: Customer[] = [new Customer(0, "", "", "999090", "jhj", 0, 0, false, false, false, false, "", "")]
  // private customerList$: BehaviorSubject<Customer[]> = new BehaviorSubject(this.customers);
  constructor(private _http: HttpClient) { }
//save the list of the customers inthe client instead of get request from the server
  // getAllCustomers(): Observable<Customer[]> {
  //   if (!this.customerList$.value) {
  //     this.setAllCustomers();
  //   }
  //   return this.customerList$.asObservable();
  // }
  // private setAllCustomers(): void {
  //   this._http.get<Customer[]>(this.baseUrl).subscribe(customers => {
  //     this.customerList$.next(customers);
  //   })
  // }
  getAllCustomers(): Observable<Customer[]> {
    return this._http.get<Customer[]>(this.baseUrl)
  }
  getByCustomerId(id: number): Observable<Customer> {
    return this._http.get<Customer>(this.baseUrl + id)
  }
  getOrdersByCustomerId(id: number): Observable<OrderDTO[]> {
    return this._http.get<OrderDTO[]>(this.baseUrl + id + "/orders")
  }
  addNewCustomer(newCustomer: Customer): Observable<number> {
    return this._http.post<any>(this.baseUrl, newCustomer)
    // .pipe(tap(() => this.setAllCustomers()))
  }
  updateCustomer(customerToUpdate: Customer): Observable<any> {
    return this._http.put(this.baseUrl + customerToUpdate.id, customerToUpdate)
    // .pipe(tap(() => this.setAllCustomers()))
  }
  deleteCustomer(id: number): Observable<any> {
    return this._http.delete(this.baseUrl + id)
    // .pipe(tap(() => this.setAllCustomers()))
  }
}