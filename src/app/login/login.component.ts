import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../models/Admin.model';
import { AdminDTO } from '../models/AdminDTO.model';
import { AdminService } from '../modules/Admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userAdmin!:AdminDTO
  // =new Admin(0,"","");
  adminForm!:FormGroup;
  userAdminDTO!:AdminDTO
  
  constructor(private _adminService: AdminService) { }

  onSubmit() {
   // this.userAdmin.name=
   //this._adminService.getAdmin().subscribe();
   //this.adminForm.get('name')?.value, this.adminForm.get('name')?.value
  }
  
  Login(){
    this.userAdmin=this.adminForm.value;
    this.userAdmin.name=this.userAdmin.name.replace(/\s/g, '');
    this.userAdmin.password=this.userAdmin.password.replace(/\s/g, '');
      this._adminService.getAdmin(this.userAdmin).subscribe(data=>{
        if(data)
        {this.userAdminDTO=data;
         console.log(this.userAdminDTO);
         alert("Welcome to "+this.userAdminDTO.name);
        }
        else{console.log("no such user");}  
      })
    };

  ngOnInit(): void {
    this.adminForm=new FormGroup({
      name:new FormControl("",Validators.email),
      password:new FormControl("",[Validators.required,Validators.minLength(8)]),
    });
  }

}
