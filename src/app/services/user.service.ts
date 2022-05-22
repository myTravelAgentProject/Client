import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Admin } from '../models/Admin.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // isAuthorized: boolean = false;
  // authorized: BehaviorSubject<boolean> = new BehaviorSubject(this.isAuthorized);
  // admin: Admin = new Admin(0, "", "", "");
  private userAdmin: BehaviorSubject<Admin | any> = new BehaviorSubject(null);
  // userAdminDetails: string = "";
  userDetailsKey = 'admin'
  // token: string = "";
  // userToken: BehaviorSubject<string> = new BehaviorSubject(this.admin.token);
  getUserAdmin(): Observable<Admin | any> {
    // this.userAdmin.subscribe(data => {
    //   debugger;
    //   if (data.token == "") {
    //     this.userAdminDetails = JSON.stringify(localStorage.getItem(this.userDetailsKey));
    //     if (this.userAdminDetails != "null")
    //       this.userAdmin.next(JSON.parse(this.userAdminDetails));
    //   }
    // })

    if (!this.userAdmin.value) {
      const user = localStorage.getItem(this.userDetailsKey);
      if (user) {
        this.userAdmin.next(JSON.parse(user));
      }
    }
    return this.userAdmin.asObservable();
  }

  setUserAdmin(_admin: Admin | any): void {
    this.userAdmin.next(_admin);
    if (_admin) {
     
      localStorage.setItem(this.userDetailsKey, JSON.stringify(_admin))
    } else {
      localStorage.removeItem(this.userDetailsKey)
    }
  }
  // getUserToken(){
  //   return this.userToken;
  // }

  // setAuthorized(_authorized: boolean) {
  //   this.authorized.next(_authorized);
  // }

  getIsAuthorized(): boolean {
  //   if (this.userAdminDetails) {
  //     return true;
  //   }
  //   return false;
  // }
    return this.userAdmin.value;
  }

  logOut(){
    this.setUserAdmin(null);

  //   this._router.navigate(['']);
  }
}
