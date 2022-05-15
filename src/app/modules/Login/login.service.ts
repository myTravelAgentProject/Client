import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/Admin.model';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { AdminDTO } from 'src/app/models/AdminDTO.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = "/api/Admin/";

  constructor(private _http: HttpClient) { }

  getAdmin(admin: AdminDTO): Observable<Admin> {
    return this._http.post<Admin>("/api/Admin/Login", admin)

  }
  // changePaswword(changePaswword:Admin):Observable<any>{
  //   return this._http.put(this.baseURL+changePaswword.id,changePaswword)
  //   }
}