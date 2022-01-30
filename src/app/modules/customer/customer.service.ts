import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/Customer.model';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { CustomerDTO } from '../../models/CustomerDTO.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   baseUrl: string = "/api/Customer/";
  constructor(private _http: HttpClient) { }

  getAllCustomers(): Observable<CustomerDTO[]> {
    return this._http.get<CustomerDTO[]>(this.baseUrl)
  }
  getByCustomerId(id: number): Observable<Customer> {
    return this._http.get<Customer>(`${this.baseUrl}${id}`)
  }
  addNewCustomer(newCustomer:Customer):Observable<number>{
      return this._http.post<number>(this.baseUrl,newCustomer)
  }
  updateCustomer(customerToUpdate:Customer){
    return this._http.put(this.baseUrl+customerToUpdate.id,customerToUpdate);
    }
    deleteCustomer(id:number):Observable<any>{
    return this._http.delete(this.baseUrl+id)
    }
}