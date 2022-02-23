import { Component, Input } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTravelAgent-app';

  authorized:boolean=false;
  constructor(private _userservice:UserService) {

  }
  ngOnInit(){
    this._userservice.getAuthorized().subscribe(data=>{
      if(data){
        this.authorized=data;
      }

    })
  }
}
