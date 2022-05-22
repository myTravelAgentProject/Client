import { Component, Input } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTravelAgent-app';
  _authorized: boolean = false;

  constructor(private _userservice: UserService) {

  }
  ngOnInit() {
    this._userservice.getUserAdmin().subscribe(data => {
      if (data)
        this._authorized = true;
      else
        this._authorized = false;
    })
    //this._userservice.getAuthorized();
  }
}