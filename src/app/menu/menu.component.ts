import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  authorized:boolean=false;
  
  constructor(private _userservice:UserService) { }

  ngOnInit(): void {
    this._userservice.getAuthorized().subscribe(data=>{
      if(data){
        this.authorized=data;
      }

    })
  }

}
