import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Admin } from 'src/app/models/Admin.model';
import { AdminDTO } from 'src/app/models/AdminDTO.model';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userAdmin: Admin;
  adminForm: FormGroup;
  hide = true;
  constructor(private _adminService: AdminService, private _userService: UserService) { }


  ngOnInit(): void {
    this.buildForm();
    // if (this.adminForm.get('id')?.value == 0) {
    //   // this.adminForm.controls['name'].disable()
    // }
    this.getAdminDetails();
  }

  setAdminDetails(admin: AdminDTO): void {
    this.adminForm.patchValue(admin);
  }

  buildForm(): void {
    this.adminForm = new FormGroup({
      "id": new FormControl(0),
      "name": new FormControl("", [Validators.required, Validators.email]),
      "password": new FormControl("", [Validators.required, Validators.minLength(8)]),
      "token": new FormControl(""),
    });
  }
  addNewAdmin() {
    this.adminForm.controls['id'].setValue(0);
    this.adminForm.controls['token'].setValue("");
    this._adminService.addNewAdmin(this.adminForm.value).subscribe(data => {
      if (data) {
        console.log('admin add succsess')
      } else {
        console.log('admin failed')
      }

    })
  }

  updateAdmin() {
    this._adminService.updateAdmin(this.adminForm.value).subscribe(data=>{
      
      console.log('admin update was succsessfully')
    })
        
     
  }
  getAdminDetails() {
    this._userService.getUserAdmin().subscribe(data => {
      if (data) {
        this.userAdmin = data;
        this.adminForm.patchValue(this.userAdmin);
      }
    })
  }
}

