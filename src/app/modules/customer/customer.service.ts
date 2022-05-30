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
 // private customerList$: BehaviorSubject<Customer[] | any> = new BehaviorSubject(null);
  constructor(private _http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this._http.get<Customer[]>(this.baseUrl)
    // if (!this.customerList$.value) {
    //   this.setAllCustomers();
    // }
    // return this.customerList$.asObservable();
  }
  // private setAllCustomers(): void {
  //   this._http.get<Customer[]>(this.baseUrl).subscribe(customers => {
  //     this.customerList$.next(customers);
  //   })
  //}
  getByCustomerId(id: number): Observable<Customer> {
    return this._http.get<Customer>(this.baseUrl + id)
  }
  getOrdersByCustomerId(id: number): Observable<OrderDTO[]> {
    return this._http.get<OrderDTO[]>(this.baseUrl + id + "/orders")
  }
  addNewCustomer(newCustomer: Customer): Observable<number> {
    return this._http.post<any>(this.baseUrl, newCustomer)
    //.pipe(tap(() => this.setAllCustomers()))
  }
  updateCustomer(customerToUpdate: Customer): Observable<any> {
    return this._http.put(this.baseUrl + customerToUpdate.id, customerToUpdate)
    //.pipe(tap(() => this.setAllCustomers()))
  }
  deleteCustomer(id: number): Observable<any> {
    return this._http.delete(this.baseUrl + id)
    //.pipe(tap(() => this.setAllCustomers()))
  }
}