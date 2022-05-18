import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Admin } from '../models/Admin.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // isAuthorized: boolean = false;
  // authorized: BehaviorSubject<boolean> = new BehaviorSubject(this.isAuthorized);
  admin: Admin = new Admin(0, "", "", "");
  userAdmin: BehaviorSubject<Admin> = new BehaviorSubject(this.admin);
  userAdminDetails: string="";
  // token: string = "";
  // userToken: BehaviorSubject<string> = new BehaviorSubject(this.admin.token);
  getUserAdmin() {
    this.userAdmin.subscribe(data => {
      debugger;
      if (data.token == "") {
        this.userAdminDetails = JSON.stringify(localStorage.getItem('admin'));
        if (this.userAdminDetails!="null")
          this.userAdmin = new BehaviorSubject(JSON.parse(this.userAdminDetails));
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

  // setAuthorized(_authorized: boolean) {
  //   this.authorized.next(_authorized);
  // }

  getAuthorized() {
    if(this.userAdminDetails){
      return true;
    }
    return false;
  }

}
