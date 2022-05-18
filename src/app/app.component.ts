import { Component, Input } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTravelAgent-app';
 _authorized!:boolean;

  constructor(private _userservice:UserService) {

  }
  ngOnInit(){
    this._authorized=this._userservice.getAuthorized();
}
}