import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Admin } from '../models/Admin.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuthorized: boolean = true;
  authorized: BehaviorSubject<boolean> = new BehaviorSubject(this.isAuthorized);
  admin: Admin = new Admin(0, "", "", "");
  userAdmin: BehaviorSubject<Admin> = new BehaviorSubject(this.admin);
  userAdminDetails: string
  // _authorize: boolean = false;
  // token: string = "";
  // userToken: BehaviorSubject<string> = new BehaviorSubject(this.admin.token);
  getUserAdmin() {
    this.userAdmin.subscribe(data => {
      if (data.token == "") {
        let userAdminDetails = localStorage.getItem('admin')
        if (userAdminDetails)
          this.userAdmin.next(JSON.parse(userAdminDetails));
      }
    })
    return this.userAdmin;

  }

  setUserAdmin(_admin: Admin) {
    this.userAdmin.next(_admin);
  }
  // getUserToken(){
  //   return this.userToken;
  // }

  setAuthorized(_authorized: boolean) {
    this.authorized.next(_authorized);
  }

  getAuthorized(){
    return this.authorized;
  }
  // getAuthorized() {
  //   if (this.userAdmin.subscribe(data => {
  //     if (data.token != "")
  //       this._authorize = true;
  //   }))
  //     if (this._authorize == true)
  //       return true;
  //   return false;
  // }

}
