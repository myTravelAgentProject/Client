import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public _userService: UserService, public _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this._userService.getUserAdmin().subscribe(data => {
    //   if (data) {
    //     return true;
    //   }
    //   this._router.navigate(['login']);
    //   return false;
    //   // })
    //   // if (this.isAuthoraize == true) {
    //   //   return true;
    // }
    if (this._userService.getIsAuthorized()) {
      return true;
    }
    this._router.navigate(['login']);
    return false;
    // alert("על מנת להכנס לאתר, יש להזין שם משתמש וסיסמה")
  }

}
