import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer.model';
import { Hotel } from 'src/app/models/Hotel.model';
import { OrderDTO } from 'src/app/models/OrderDTO.model';

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
  getTheLastOrders(): Observable<OrderDTO[]> {
    return this._http.get<OrderDTO[]>(this.baseUrl + "lastOrders")
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
