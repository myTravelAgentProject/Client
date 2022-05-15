import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Admin } from '../models/Admin.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuthorized: boolean = false;
  authorized: BehaviorSubject<boolean> = new BehaviorSubject(this.isAuthorized);
  admin: Admin = new Admin(0, "", "", "");
  userAdmin: BehaviorSubject<Admin> = new BehaviorSubject(this.admin);

  getUserAdmin() {
    return this.userAdmin;
  }

  setUserAdmin(_admin: Admin) {
    this.userAdmin.next(_admin);
  }

  setAuthorized(_authorized: boolean) {
    this.authorized.next(_authorized);
  }

  getAuthorized() {
    return this.authorized;
  }

}
