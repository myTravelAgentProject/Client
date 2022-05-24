import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Admin } from '../models/Admin.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  authorized: boolean = false;
  adminName: string = "מנהל";
  toAddNewAdmin: boolean;
  emptyAdmin: Admin = new Admin(0, "", "", "");

  constructor(private _userservice: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.authorized = this._userservice.getIsAuthorized();
    this._userservice.getUserAdmin().subscribe(data => {
      if (data) {
        this.adminName = data.name;
      }
    })
  }
  updateAdmin() {
    this.toAddNewAdmin = false;
    this._router.navigate(['/admin', this.toAddNewAdmin]);
  }
  addAdmin() {
    this.toAddNewAdmin = true;
    this._router.navigate(['/admin', this.toAddNewAdmin]);
  }
  logOut() {
    // this._userservice.setUserAdmin(this.emptyAdmin);
    // localStorage.clear();
    //  this._router.navigate(['/login']);
    //   this._router.navigate(['']);
    this._userservice.logOut();
    this._router.navigate(['/login']);
  }


}
