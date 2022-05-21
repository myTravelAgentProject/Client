// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { UserService } from './user.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardService implements CanActivate {

//   constructor(public _userService: UserService, public _router: Router) {}

//   isAuthoraize:boolean=false;
  
//   canActivate(): boolean {
//     this._userService.getUserAdmin().subscribe(data=>{
//       if(data.token!=""){
//         this.isAuthoraize=true;
//       }
//     })
//     if (this.isAuthoraize==true) 
//       return true;
//     alert("על מנת להכנס לאתר, יש להזין שם משתמש וסיסמה")
//     this._router.navigate(['login']);
//     return true;
//   }
// }
