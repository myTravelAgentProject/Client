import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  authorized: boolean = false;
  adminName: string = "מנהל";
  toAddNewAdmin: boolean

  constructor(private _userservice: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.authorized=this._userservice.getAuthorized();
    this._userservice.getUserAdmin().subscribe(data=>{
      if(data){
        this.adminName=data.name;
      }
    })
  }
  goToUpdateAdmin() {
    this.toAddNewAdmin = false;
    this._router.navigate(['/admin', this.toAddNewAdmin]);
  }
  goToAddAdmin() {
    this.toAddNewAdmin = true;
    this._router.navigate(['/admin', this.toAddNewAdmin]);
  }

}
