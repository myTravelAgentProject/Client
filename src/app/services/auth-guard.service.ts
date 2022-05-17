import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public _userService: UserService, public _router: Router) {}

  isAuthoraize:boolean=false;
  
  canActivate(): boolean {
    this._userService.getUserAdmin().subscribe(data=>{
      if(data){
        this.isAuthoraize=true;
      }
    })
    if (this.isAuthoraize==true) {
      return true;
    }
    this._router.navigate(['login']);
    return false;
  }
}
