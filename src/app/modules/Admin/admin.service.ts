import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/Admin.model';
// import { Admin } from '../../models/Admin.model';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { AdminDTO } from 'src/app/models/AdminDTO.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseURL = "/api/Admin/";

  constructor(private _http: HttpClient) { }

  updateAdmin(admin: Admin): Observable<any> {
    return this._http.put<any>(this.baseURL + admin.id, admin)
  }
  addNewAdmin(newAdmin: AdminDTO): Observable<number> {
    return this._http.post<number>(this.baseURL, newAdmin)
  }
  // changePaswword(changePaswword:Admin):Observable<any>{
  //   return this._http.put(this.baseURL+changePaswword.id,changePaswword)
  //   }
}
