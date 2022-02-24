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

  getAdmin(admin:AdminDTO): Observable<AdminDTO> {
    return this._http.post<AdminDTO>("/api/Admin/Login",admin)
    
  }
  addNewAdmin(newAdmin:Admin):Observable<any>{
    return this._http.post<any>(this.baseURL,newAdmin)
}
// changePaswword(changePaswword:Admin):Observable<any>{
//   return this._http.put(this.baseURL+changePaswword.id,changePaswword)
//   }
}
