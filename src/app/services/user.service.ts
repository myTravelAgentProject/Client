import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuthorized: boolean = false;
  authorized: BehaviorSubject<boolean>=new BehaviorSubject(this.isAuthorized);  

  setAuthorized(_authorized:boolean) {
this.authorized.next(_authorized);
  }

  getAuthorized(){ 
   return this.authorized;
  }

}
