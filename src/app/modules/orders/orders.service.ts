import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer.model';
import { Hotel } from 'src/app/models/Hotel.model';
import { OrderDTO } from 'src/app/models/OrderDTO.model';
import { formatDate } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl: string = "/api/Order/";
  private hotelList$: BehaviorSubject<Hotel[] | any> = new BehaviorSubject(null);

  constructor(private _http: HttpClient) { }

  getChangePriceOrders(): Observable<OrderDTO[]> {
    return this._http.get<OrderDTO[]>(this.baseUrl + "ChangedPriceOrders")
  }
  getTheLastOrders(event?:PageEvent |any): Observable<OrderDTO[]> {
    if(event){
      return this._http.get<OrderDTO[]>(this.baseUrl + "lastOrders?page="+(event.pageIndex))
    }
    return this._http.get<OrderDTO[]>(this.baseUrl + "lastOrders")
  }
  getOrdersByParams(customerName:string,hotelName:string,startDate?:Date,endDate?:Date):Observable<OrderDTO[]>{
    let queryParamsString="?customerName="+customerName+"&hotelName="+hotelName;
    if(startDate&&endDate){
      const start=formatDate(startDate,'mediumDate','en_US');
      const end=formatDate(endDate,'mediumDate','en_US');
      queryParamsString+="&startDate="+start+"&endDate="+end;
    }
    return this._http.get<OrderDTO[]>(this.baseUrl+queryParamsString);
  }
  getOrderById(id: number): Observable<OrderDTO> {
    return this._http.get<OrderDTO>(this.baseUrl + id)
  }

  addNewOrder(newOrder: OrderDTO): Observable<number> {
    return this._http.post<number>(this.baseUrl, newOrder)
  }
  updateOrder(orderToUpdate: OrderDTO): Observable<any> {
    return this._http.put(this.baseUrl + orderToUpdate.id, orderToUpdate)
  }
  deleteOrder(id: number): Observable<any> {
    return this._http.delete(this.baseUrl + id)
  }
  getAllHotels(): Observable<Hotel[]> {
    if (!this.hotelList$.value) {
      this.setAllHotels();
    }
    return this.hotelList$.asObservable();
  }

  setAllHotels(): void {
    this._http.get<Hotel[]>("api/Hotel/").subscribe(hotels => {
      this.hotelList$.next(hotels);
    })
  }
}
