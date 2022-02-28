import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer.model';
import { CustomerDTO } from 'src/app/models/CustomerDTO.model';
import { Order } from 'src/app/models/Order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl: string = "/api/Order/";

  constructor(private _http: HttpClient) { }

  getChangePriceOrders(): Observable<Order[]> {
    return this._http.get<Order[]>(this.baseUrl+"ChangedPriceOrders")
  }

  getTheLastOrders(): Observable<Order[]> {
    return this._http.get<Order[]>(this.baseUrl+"lastOrders")
  }
  getByOrderId(id: number): Observable<Order> {
    return this._http.get<Order>(this.baseUrl+id)
  }
  addNewOrder(newOrder:Order):Observable<number>{
      return this._http.post<number>(this.baseUrl,newOrder)
  }
  updateOrder(orderToUpdate:Order):Observable<any>{
    return this._http.put(this.baseUrl+orderToUpdate.id,orderToUpdate)
    }
  deleteOrder(id:number):Observable<any>{
    return this._http.delete(this.baseUrl+id)
  }
}
