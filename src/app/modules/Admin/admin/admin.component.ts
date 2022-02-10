import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/models/Admin.model';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin!:Admin
  userAdmin!: Admin;
  adminForm!:FormGroup;
//  hide = true;
  constructor(private _adminService: AdminService) { }

  onSubmit() {
   // this.userAdmin.name=
   //this._adminService.getAdmin().subscribe();
   //this.adminForm.get('name')?.value, this.adminForm.get('name')?.value
  }
  
  Login(name:string,password:string){
    this.admin.name=name.replace(/\s/g, '');
    this.admin.password=password.replace(/\s/g, '');
      this._adminService.getAdmin(this.admin).subscribe(data=>{
        if(data)
        {this.userAdmin=data;
        //  console.log(this.userAdmin.id);
         alert("Welcome to "+this.userAdmin.name);}
        else{console.log("no such user");}  
      })
    };
        
        AddNewAdmin(name:string,password:string){
          this.userAdmin.name=name;
          this.userAdmin.password=password
          this._adminService.addNewAdmin(this.userAdmin).subscribe(data=>{
            if(data)
            { console.log(this.userAdmin); }
            else{console.log("no such user")}  }
            )};
  ngOnInit(): void {
    this.adminForm=new FormGroup({
      name:new FormControl("",Validators.email),
      password:new FormControl("",[Validators.required,Validators.minLength(8)]),
    });
  }

}
