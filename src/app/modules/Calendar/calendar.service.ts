import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Alert } from "src/app/models/Alert.model";
import { OrderDTO } from "src/app/models/OrderDTO.model";


@Injectable({
    providedIn: 'root'
  })
export class CalendarService{
  baseUrl: string = "/api/Calendar/date/";
  constructor(private _http: HttpClient) { }

  getEventsByMonth(year:number,month:number): Observable<OrderDTO[]> {
    return this._http.get<OrderDTO[]>(this.baseUrl+year+'/'+month+'/orders')
  }
  getEventsByDay(date:Date): Observable<OrderDTO[]> {
    return this._http.get<OrderDTO[]>(this.baseUrl+date+'/orders')
  }

  getAlertsByMonth(year:number,month:number):Observable<Alert[]>{
      return this._http.get<Alert[]>(this.baseUrl+year+'/'+month+'/alerts')
  }
  getAlertsByDay(date:Date):Observable<Alert[]>{
    return this._http.get<Alert[]>(this.baseUrl+date+'/alerts')
}

  // https://www.positronx.io/angular-fullcalendar-create-and-display-dynamic-events/ 
}
