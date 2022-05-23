import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  toAddNewAdmin:boolean
  constructor(private _adminService: AdminService,private route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit(): void {
    this.buildForm();
    // if (this.adminForm.get('id')?.value == 0) {
    //   // this.adminForm.controls['name'].disable()
    // }
    this.route.paramMap.subscribe(params => {
      let isNewAdmin=params.get('toAddNewAdmin');
      if(isNewAdmin){
        if(isNewAdmin=="false"){
          this.getAdminDetails();
          this.toAddNewAdmin=false;
        }
        else{
          this.toAddNewAdmin=true;
          this.adminForm.reset();
        }
      }
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
        alert('admin add succsess')
      } else {
        console.log('admin failed')
      }

    })
  }

  updateAdmin() {
    this._adminService.updateAdmin(this.adminForm.value).subscribe(data => {

      alert('admin update was succsessfully')
    })


  }

}

