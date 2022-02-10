import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/Admin.model';
// import { Admin } from '../../models/Admin.model';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseURL = "/api/Admin/";

  constructor(private _http: HttpClient) { }

  getAdmin(admin:Admin): Observable<Admin> {
    return this._http.post<Admin>(this.baseURL,admin)
  }
  addNewAdmin(newAdmin:Admin):Observable<any>{
    return this._http.post<any>(this.baseURL,newAdmin)
}
// changePaswword(changePaswword:Admin):Observable<any>{
//   return this._http.put(this.baseURL+changePaswword.id,changePaswword)
//   }
}
