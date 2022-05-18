import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin.model';
import { AdminDTO } from 'src/app/models/AdminDTO.model';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userAdmin!: AdminDTO;
  loginForm!: FormGroup;
  userAdminDTO!: AdminDTO;
  hide = true;

  constructor(private _loginService: LoginService, private router: Router, private _userService: UserService) { }

  onSubmit() {

    // this.userAdmin.name=
    //this._adminService.getAdmin().subscribe();
    //this.adminForm.get('name')?.value, this.adminForm.get('name')?.value
  }

  Login() {
    this.userAdmin = this.loginForm.value;
    this.userAdmin.name = this.userAdmin.name.replace(/\s/g, '');
    this.userAdmin.password = this.userAdmin.password.replace(/\s/g, '');
    this._loginService.getAdmin(this.userAdmin).subscribe(data => {
      if (data) {
        this.userAdminDTO = data;
        console.log(this.userAdminDTO);
        alert("Welcome to " + this.userAdminDTO.name);
        // this._userService.setAuthorized(true);
        debugger;
        this._userService.setUserAdmin(data);
        localStorage.setItem('admin',JSON.stringify(data))
        this.router.navigate(['/calendar']);
      }
      else { console.log("no such user"); }
    })
  };

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    });
  }

}
