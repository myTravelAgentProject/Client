import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule,ReactiveFormsModule, FormsModule ,MaterialModule],
  providers: [LoginService],
  exports:[LoginComponent]
})
export class LoginModule {

 }
